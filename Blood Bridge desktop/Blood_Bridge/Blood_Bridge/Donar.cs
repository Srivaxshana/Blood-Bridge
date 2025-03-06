using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blood_Bridge
{
    /// <summary>
    /// ///////old
    /// </summary>
    public class Donar
    {
        [Key]
        public int DonorID { get; set; }
        public string? Name { get; set; }
        public int? Age { get; set; }
        // public string? DOB { get; set; }
        public DateTime DOB { get; set; }
        public string? Gender { get; set; }
        public string? BloodType { get; set; }
        public string? Contact { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? District { get; set; }
    }
}
