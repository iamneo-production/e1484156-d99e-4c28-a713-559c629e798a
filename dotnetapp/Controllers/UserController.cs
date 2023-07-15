#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
   [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        // Constructor for the UserController class that accepts a DataContext instance as a parameter
        public UserController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        [Route("admin/getUser")]
        public async Task<ActionResult<IEnumerable<User>>> GetUser() //the method signature, indicating that the method returns an ActionResult
        {
            var users = await _context.Users.Where(u => u.userRole == "user").ToListAsync(); //It retrieves all the user from the _context object asynchronously
            return users;
        }


        // GET: api/Users/5
        [HttpGet]
        [Route("admin/getUser/{userId}")]
        public async Task<ActionResult<User>> getUser(int userId)
        {
            var user = await _context.Users.FindAsync(userId);//asynchronous operation that searches for a menu in the _context object based on the specified userId


            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("admin/edituser/{userId}")]
        public async Task<IActionResult> editUser(int userId, User user)
        {
            if (userId != user.userId)
            {
                return BadRequest(); //status code to indicate that the request is invalid
            }

            _context.Entry(user).State = EntityState.Modified; //persist the modifications to the corresponding table in the database

            try
            {
                await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database
            }
            catch (DbUpdateConcurrencyException) //an exception that occurs when a concurrency conflict is detected during an update operation in Entity Framework Core.
            {
                if (!UserExists(userId))
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

        [HttpPost]
        [Route("admin/addUser")]
        public async Task<ActionResult<User>> addUser(User user)
        {
            //Check if the email already exists             
            if (await _context.Users.AnyAsync(u => u.email == user.email))             
            {                 
                return BadRequest("Email already exists");             
            }

            // Check if the userName already exists             
            if (await _context.Users.AnyAsync(u => u.userName == user.userName))             
            {                 
                return BadRequest("UserName is taken");             
            }

            // Check if the mobileNumber already exists             
            if (await _context.Users.AnyAsync(u => u.mobileNumber == user.mobileNumber))             
            {                 
                return BadRequest("Mobile number already exists");             
            }

            _context.Users.Add(user); //add the user object to the context
            await _context.SaveChangesAsync();  //asynchronous operation that saves the changes made to the database

            return CreatedAtAction("GetUser", new { userId = user.userId }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete]
        [Route("admin/deleteUser/{userId}")]
        public async Task<IActionResult> deleteUser(int userId) 
        {
            var user = await _context.Users.FindAsync(userId); //retrieves a specific menu object from the _context based on given userId
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user); //the user object for removal from the context.
            await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database

            return Ok();
        }

        private bool UserExists(int userId) //private method named UserExists that checks if a user with a specific userId exists in the _context
        {
            return _context.Users.Any(e => e.userId == userId);
        }
    }
}