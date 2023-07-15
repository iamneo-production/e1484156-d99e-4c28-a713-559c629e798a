#nullable disable
using dotnetapp.Models; 
using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore; 

namespace dotnetapp.Controllers
{
    [ApiController] 
    public class MenusController : ControllerBase 
    {

        private readonly DataContext _context;
        // Constructor for the MenusController class that accepts a DataContext instance as a parameter.
        public MenusController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Menus
        [HttpGet]
        [Route("admin/getMenu")]
        public async Task<ActionResult<IEnumerable<Menu>>> getMenu() //the method signature, indicating that the method returns an ActionResult
        {
            return await _context.Menus.ToListAsync(); //It retrieves all the menu from the _context object asynchronously 
        }

        // GET: api/Menus/5
        [HttpGet]
        [Route("admin/getMenu/{menuId}")]
        public async Task<ActionResult<Menu>> getMenu(int menuId)
        {
            var menu = await _context.Menus.FindAsync(menuId); //asynchronous operation that searches for a menu in the _context object based on the specified menuId

            if (menu == null)
            {
                return NotFound();
            }
            return menu;
        }
        // PUT: api/Menus/5
        [HttpPut]
        [Route("admin/editMenu/{menuId}")]
        public async Task<IActionResult> editMenu(int menuId, Menu menu)
        {
            if (menuId != menu.foodMenuId) 
            {
                return BadRequest(); //status code to indicate that the request is invalid
            }

            _context.Entry(menu).State = EntityState.Modified; //persist the modifications to the corresponding table in the database

            try
            {
                await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database
            }
            catch (DbUpdateConcurrencyException) //an exception that occurs when a concurrency conflict is detected during an update operation in Entity Framework Core.
            {
                if (!MenuExists(menuId)) 
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

        // POST: api/Menus
        [HttpPost]
        [Route("admin/addMenu")]
        public async Task<ActionResult<Menu>> addMenu(Menu menu) 
        {
            bool foodMenuItemExist = await _context.Menus.AnyAsync(m=> m.foodMenuItems == menu.foodMenuItems);
            if(foodMenuItemExist)
            {
                return BadRequest("Item already exists");
            }

            _context.Menus.Add(menu); //add the menu object to the context
            await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database

            return CreatedAtAction("GetMenu", new { menuId = menu.foodMenuId }, menu);
        }

        // DELETE: api/Menus/5
        [HttpDelete]
        [Route("admin/deleteMenu/{menuId}")]
        public async Task<IActionResult> deleteMenu(int menuId)
        {
            var menu = await _context.Menus.FindAsync(menuId); //retrieves a specific menu object from the _context based on given menuId
            if (menu == null)
            {
                return NotFound();
            }

            _context.Menus.Remove(menu); //the menu object for removal from the context.
            await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database

            return Ok();
        }

        private bool MenuExists(int menuId) //private method named MenuExists that checks if a menu with a specific menuId exists in the _context
        {
            return _context.Menus.Any(e => e.foodMenuId == menuId);
        }
    }
}