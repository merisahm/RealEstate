using MA_RealEstate.Entities;
using Microsoft.EntityFrameworkCore;

namespace MA_RealEstate.Persistence.Database
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Property> Properties { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
