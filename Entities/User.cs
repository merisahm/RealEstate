using System.ComponentModel.DataAnnotations;

namespace MA_RealEstate.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ICollection<Property> Properties { get; set; } = new List<Property>();

    }
}
