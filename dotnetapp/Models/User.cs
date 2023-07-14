using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class User
    {
        [Key] // Primary key constraint
        public int userId{get;set;} // Property named userId represents unique values
        [Required] // Specifies that the email property is required and must have a value
        public string email { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string userName { get; set; }
        [Required]
        public string mobileNumber { get; set; }
        [Required]
        public string userRole { get; set; }
    }
}