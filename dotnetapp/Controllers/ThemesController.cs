#nullable disable
using dotnetapp.Models; 
using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore; 

namespace dotnetapp.Controllers
{
    [ApiController] 
    public class ThemeController : ControllerBase 
    {
        
        private readonly DataContext _context;
        // Constructor for the AddOnsController class that accepts a DataContext instance as a parameter.
        public ThemeController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Themes
        //GetTheme": It is the name of the action method that will be used to generate the Location header. 
        [HttpGet]
        [Route("admin/getTheme")]
        public async Task<ActionResult<IEnumerable<Theme>>> getTheme()
        {
            return await _context.Themes.ToListAsync();//It retrieves all the themes from the _context object asynchronously 
        }

        // GET: api/Themes/5
        //Finds the theme based on themeId, if the theme is null it returns theme not found otherwise returns the theme. 
        [HttpGet]
        [Route("admin/getTheme/{themeId}")]
        public async Task<ActionResult<Theme>> getTheme(int themeId)
        {
            var theme = await _context.Themes.FindAsync(themeId);

            if (theme == null)
            {
                return NotFound(); // Returns an HTTP 204 NoContent response indicating that the request was successfully processed, but there is no content to return.
            }

            return theme;
        }
        

        // PUT: api/Themes/5
        // It edits the theme based on the parameters themeId,theme. If the provided themeId doesnot match with the themeId of provided theme then it returns bad request. Otherwise the state of theme gets tracked and modified.And then save the changes.
        [HttpPut]
        [Route("admin/editTheme/{themeId}")]
        public async Task<IActionResult> editTheme(int themeId, Theme theme)
        {
            if (themeId != theme.themeId)
            {
                return BadRequest(); //status code to indicate that the request is invalid
            }

            _context.Entry(theme).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database
            }
            catch (DbUpdateConcurrencyException) //an exception that occurs when a concurrency conflict is detected during an update operation in Entity Framework Core.
            {
                if (!ThemeExists(themeId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

         // POST: api/Themes
         //The provided theme is added and changes are saved.Using themeId we can retrieve the theme.
        [HttpPost]
        [Route("admin/addTheme")]
        public async Task<ActionResult<Theme>> addTheme(Theme theme)
        {
            bool themeNameExist = await _context.Themes.AnyAsync(T=> T.themeName == theme.themeName);
            if(themeNameExist)
            {
                return BadRequest("Theme already exists");
            }

            _context.Themes.Add(theme); //add the theme object to the context
            await _context.SaveChangesAsync(); 

            return CreatedAtAction("GetTheme", new { themeId = theme.themeId }, theme);// CreatedAtAction returns an HTTP 201 (Created) response along with a Location header pointing 
        }

        // DELETE: api/Themes/5
        //It deletes the theme based on the provided themeId and save the changes.
        [HttpDelete]
        [Route("admin/deleteTheme/{themeId}")]
        public async Task<IActionResult> deleteTheme(int themeId)
        {
            var theme = await _context.Themes.FindAsync(themeId);
            if (theme == null)
            {
                return NotFound();// Returns an HTTP 204 NoContent response indicating that the request was successfully processed, but there is no content to return.
            }

            _context.Themes.Remove(theme);//the theme object for removal from the context.
            await _context.SaveChangesAsync();

            return Ok();
        }
        private bool ThemeExists(int themeId)
        {
            return _context.Themes.Any(e => e.themeId == themeId);
        }
    }
}