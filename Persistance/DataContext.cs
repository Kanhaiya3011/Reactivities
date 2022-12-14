using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : DbContext
    {   
        public DataContext(DbContextOptions options): base(options){}
        
        public DbSet<Value> Values{get;set;}
        public DbSet<Activity> Activities{get;set;}
        protected override void OnModelCreating(ModelBuilder builder){
            builder.Entity<Value>()
                .HasData(
                    new Value { Id = 1, Name = "Values 101"},
                    new Value { Id = 2, Name = "Values 102"},
                    new Value { Id = 3, Name = "Values 103"},
                    new Value { Id = 4, Name = "Values 104"}
                );
        }
    }
}
