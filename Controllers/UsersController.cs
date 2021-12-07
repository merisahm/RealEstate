using MA_RealEstate.Entities;
using MA_RealEstate.Persistence.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MA_RealEstate.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<User>>> Get()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var toRemove = _context.Users.Where(n => n.Id == Id).FirstOrDefault<User>();
            _context.Users.Remove(toRemove);

            return Ok(await _context.SaveChangesAsync());
        }
        
        [HttpPost]
        public async Task<ActionResult> AddProperty()
        {
            var user = await _context.Users
                .Include(p => p.Properties)
                .FirstOrDefaultAsync<User>();

            if(user != null) return NotFound();

            var prop = await _context.Properties
                .FirstOrDefaultAsync();

            user.Properties.Add(prop);

            return Ok(await _context.SaveChangesAsync());
        }
    }
}
