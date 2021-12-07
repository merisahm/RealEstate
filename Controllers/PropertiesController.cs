using MA_RealEstate.Entities;
using MA_RealEstate.Persistence.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MA_RealEstate.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PropertiesController : Controller
    {
        private readonly AppDbContext _context;

        public PropertiesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<Property>>> Get()
        {
            return await _context.Properties.ToListAsync();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var toRemove = _context.Properties.Where(n => n.Id == Id).FirstOrDefault<Property>();
            _context.Properties.Remove(toRemove);

            return Ok(await _context.SaveChangesAsync());
        }
    }
}
