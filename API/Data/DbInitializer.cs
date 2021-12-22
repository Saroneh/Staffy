using System;
using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(SiteContext context)
        {
            if (context.Artifacts.Any()) return;
            
            var Artifacts = new List<Artifact>
            {
                new Artifact
                {
                    Name = "Afkalk kaffemaskine",

                    Description = "Husk at følge guiden",

                    Level = 3,

                    PictureUrl = "https://cdn.shopify.com/s/files/1/0314/7923/4698/files/descaling_blog.jpg?v=1600591616",

                    Type = "Opgave",

                    Status = "Venter",

                    Deadline = new DateTime(2019,05,09,9,15,0)
                },
                new Artifact
                {
                    Name = "Afkalking af kaffemaskine",

                    Description = "Brug minuskalk med 1 liter",

                    Level = 3,

                    PictureUrl = "https://cdn.shopify.com/s/files/1/0314/7923/4698/files/descaling_blog.jpg?v=1600591616",

                    Type = "Guide",

                    Status = "Færdig",

                    Deadline = new DateTime(2019,05,09,9,15,0)
                },
                };

                foreach (var Artifact in Artifacts)
                {
                    context.Artifacts.Add(Artifact);
                    
                }
                
                context.SaveChanges();
            }

    }

    }
