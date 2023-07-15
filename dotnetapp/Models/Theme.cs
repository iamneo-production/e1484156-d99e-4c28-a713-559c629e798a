using System.ComponentModel.DataAnnotations;// It provide attribute for data validation and defining constraints.

namespace dotnetapp.Models
{
    public class Theme
    {
        [Key]// Primary key constraint
        public int themeId { get; set; }// Property named themeId represents unique values
        [Required]// Specifies that the themeName property is required and must have a value
        public string themeName { get; set; }
        [Required]
        public string themeImageURL { get; set; }
        [Required]
        public string themeAddress { get; set; }
        [Required]
        public string themeDescription { get; set; }
        [Required]
        public string themePhotographer { get; set; }
        [Required]
        public string themeVideographer { get; set; }
        [Required]
        public string themeReturnGift { get; set; }
        [Required]
        public long themeCost { get; set; }
    }
}