using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Models
{
    public class DataContext : DbContext
    {
        // Initializes a new instance of the DataContext class using the provided options, which configures the database connection and behavior. 
        //The options are passed to the base class constructor.
        public DataContext(DbContextOptions<DataContext> option) : base(option) { }

        public DbSet<User> Users{ get; set; } // DbSet property named <User> model, it represents Users entity in database
        public DbSet<Theme> Themes { get; set; }// DbSet property named <Theme> model, it represents Themes entity in database
        public DbSet<Menu> Menus { get; set; }// DbSet property named <Menu> model, it represents Menus entity in database
        public DbSet<AddOn> AddOns { get; set;}// DbSet property named <AddOn> model, it represents Addons entity in database
        public DbSet<Event> Events { get; set; }// DbSet property named <AddOn> model, it represents Events entity in database
    }
}