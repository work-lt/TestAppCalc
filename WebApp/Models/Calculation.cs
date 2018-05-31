using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Calculation
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public float FirstNumber { get; set; }
        [Required]
        public float SecondNumber { get; set; }
        [Required]
        public int OperatorId { get; set; } 
        public float OpertionResult { get; set; }
    }
}