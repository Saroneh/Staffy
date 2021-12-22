using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Artifact
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Level { get; set; }

        public string PictureUrl { get; set; }

        public string Type { get; set; }

        public string Status { get; set; }

        public DateTime Deadline { get; set; }
    }
}