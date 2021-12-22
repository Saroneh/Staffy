using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class SiteContext : DbContext
    {
        public SiteContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Artifact> Artifacts {get; set;} 
    }
}