using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetapp.Models
{
    public class Event
    {
        [Key]
        public int eventId { get; set; }
        [Required]
        public string applicantAddress { get; set; }
        [Required] 
        public string applicantEmail { get; set; }
        [Required]
        public string applicantMobile { get; set; }
        [Required]
        public string applicantName { get; set; }
        [Required] 
        public string eventAddress { get; set; }
        [Required]
        public string eventDate { get; set; } 
        [Required]
        public string eventTime { get; set; }
        [Required]
        public long EventCost{get;set;}
        [Required]
        public long noOfPeople{get;set;}

        // Foreign key 
        [Display(Name = "Theme")] 
        public int themeId { get; set; } 
        
        [ForeignKey("themeId")] 
        public virtual Theme themes { get; set; }

        public  string addOnIds{get;set;}

        [Display(Name = "User")]
        public int userId{get;set;}

        [ForeignKey("userId")] 
        public virtual User users { get; set; }

        public string eventmenuIds {get;set;}
        
    }
}