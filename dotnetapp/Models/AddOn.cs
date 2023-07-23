using System.ComponentModel.DataAnnotations;// It provide attribute for data validation and defining constraints.

namespace dotnetapp.Models
{
    public class AddOn
    {
        [Key]// Primary key constraint
        public int addOnId { get; set; }// Property named addonId represents unique values
        [Required]// Specifies that the addOnName property is required and must have a value
        public string addOnName { get; set; }
        [Required]
        public string addOnDescription { get; set; }
        [Required]
        public long addOnPrice { get; set; } 
        [Required]
        public string addOnImageURL { get; set; }
    }
}