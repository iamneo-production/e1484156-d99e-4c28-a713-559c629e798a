using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using dotnetapp.Dto;

namespace dotnetapp.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
         private DataContext _context;
        // Constructor for the AuthController class that injects a DataContext instance as a dependency.
        // The DataContext instance is assigned to the _context field. 
        public AuthController(DataContext context) 
        {
            _context = context;
        } 

        [HttpPost]
        [Route("user/signup")]
        public async Task<IActionResult> signup(RegisterDto registerDto) // returns a value as a result
        {

            // Check if email already exists
            if (await _context.Users.AnyAsync(u => u.email == registerDto.Email))
            {
                return BadRequest("Email already exists.");
            }

            // Check if username already exists
            if (await _context.Users.AnyAsync(u => u.userName == registerDto.UserName))
            {
                return BadRequest("Username already taken.");
            }

            // Check if mobile number already exists
            if (await _context.Users.AnyAsync(u => u.mobileNumber == registerDto.MobileNumber))
            {
                return BadRequest("Mobile number already exists.");
            }
            
            var user = new User // new object is created
            {
                email = registerDto.Email,
                userName = registerDto.UserName,
                mobileNumber = registerDto.MobileNumber,
                password = registerDto.Password,
                userRole = registerDto.UserRole
            };
            _context.Users.Add(user);//add the user object to the context
            await _context.SaveChangesAsync(); //asynchronous operation that saves the changes made to the database

            return Ok("Successfully Registered!");
        } 

        [HttpPost]
        [Route("user/login")] 
        public async Task<ActionResult<User>> Login(LoginDto loginDto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.email == loginDto.Email); //retrive the single element from collection that satisfies condition

            if (user != null && loginDto.Password == user.password) //check for user exists and password match
            {
                var loggedInUser = new User
                {
                    userId = user.userId, // retrieves the user data
                    email = user.email,
                    userName = user.userName,
                    mobileNumber = user.mobileNumber,
                    userRole = user.userRole
                };

                return Ok(loggedInUser);
            }

            return BadRequest("Invalid details! Please try again");
        }
    }
}