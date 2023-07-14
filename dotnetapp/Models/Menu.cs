using System.ComponentModel.DataAnnotations;// It provide attribute for data validation and defining constraints.

namespace dotnetapp.Models
{
    public class Menu
    {
        [Key]// Primary key constraint
        public int foodMenuId { get; set; }// Property named foodMenuId represents unique values
        [Required]// Specifies that the foodMenuImageURL property is required and must have a value
        public string foodMenuImageURL { get; set; }
        [Required]
        public string foodMenuType { get; set; }
        [Required]
        public string foodMenuItems { get; set; }
        [Required]
        public long foodMenuCost { get; set; }
    }
}