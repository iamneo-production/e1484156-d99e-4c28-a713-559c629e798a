#nullable disable
using dotnetapp.Models; 
using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq; 

namespace dotnetapp.Controllers
{
    [ApiController] 
    public class AddOnsController : ControllerBase 
    { 
        
        private readonly DataContext _context;
        // Constructor for the AddOnsController class that accepts a DataContext instance as a parameter.
        public AddOnsController(DataContext context) 
        {
            _context = context;
        }

        // GET: api/AddOns
        [HttpGet]
        [Route("admin/getAddOn")]
        public async Task<ActionResult<IEnumerable<AddOn>>> GetAddOns() //the method signature, indicating that the method returns an ActionResult
        {
            return await _context.AddOns.ToListAsync(); //It retrieves all the themes from the _context object asynchronously 
        }

        // GET: api/AddOns/5
        [HttpGet]
        [Route("admin/getAddOn/{addOnId}")]
        public async Task<ActionResult<AddOn>> GetAddOn(int addOnId)
        {
            var addOn = await _context.AddOns.FindAsync(addOnId); //asynchronous operation that searches for an AddOns in the _context object based on the specified addOnId

            if (addOn == null) 
            {
                return NotFound();
            }
            return addOn;
        }

        // PUT: api/AddOns/5
        [HttpPut]
        [Route("admin/editAddOn/{addOnId}")]
        public async Task<IActionResult> PutAddOn(int addOnId, AddOn addOn)
        {
            if (addOnId != addOn.addOnId)
            {
                return BadRequest(); //status code to indicate that the request is invalid
            }

            _context.Entry(addOn).State = EntityState.Modified; //persist the modifications to the corresponding table in the database

            try
            {
                await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database
            }
            catch (DbUpdateConcurrencyException) //an exception that occurs when a concurrency conflict is detected during an update operation in Entity Framework Core.
            {
                if (!AddOnExists(addOnId))
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

        // POST: api/AddOns
        [HttpPost]
        [Route("admin/addAddOn")]
        public async Task<ActionResult<AddOn>> PostAddOn(AddOn addOn)
        {
            bool addOnNameExist = await _context.AddOns.AnyAsync(A=> A.addOnName == addOn.addOnName);
            if(addOnNameExist)
            {
                return BadRequest("Addons already exists");
            }

            _context.AddOns.Add(addOn); //add the AddOn object to the context
            await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database

            return CreatedAtAction("GetAddOn", new { addOnId = addOn.addOnId }, addOn);
        }

        // DELETE: api/AddOns/5 
        [HttpDelete]
        [Route("admin/deleteAddOn/{addOnId}")]
        public async Task<IActionResult> DeleteAddOn(int addOnId)
        {
            var addOn = await _context.AddOns.FindAsync(addOnId); //retrieves a specific addOn object from the _context based on given addOnId
            if (addOn == null)
            {
                return NotFound();
            }

            _context.AddOns.Remove(addOn); //the addOn object for removal from the context.
            await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database

            return Ok();
        }
        private bool AddOnExists(int addOnId) //private method named AddOnExists that checks if an addOn with a specific addOnId exists in the _context
        {
            return _context.AddOns.Any(e => e.addOnId == addOnId);
        }
    }
    
}