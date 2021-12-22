using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ArtifactsController : ControllerBase
    {
        private readonly SiteContext _context;
       
        public ArtifactsController(SiteContext context)
        {
            _context = context;
    
        }

        [HttpGet]

        public async Task<ActionResult<List<Artifact>>> GetArtifact()
        {
            var Artifact = await _context.Artifacts.ToListAsync();

            return Ok(Artifact);

        }


        [HttpGet("{Id}")]

        public async Task<ActionResult<Artifact>> GetArtifact(int Id)
        {
            return await _context.Artifacts.FindAsync(Id);
        } 
    }
}