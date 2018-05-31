using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/calculator")]
    public class CalculatorController : ApiController
    {

        // POST: api/Calculator
        [ResponseType(typeof(Calculation))]
        public IHttpActionResult PostCalculation(Calculation c)
        {
            if (!ModelState.IsValid)
            {
                List<Exception> errors = ModelState.SelectMany(x => x.Value.Errors.Select(z => z.Exception)).ToList<Exception>();
                return BadRequest(errors[0].Message);
            }
           
            switch (c.OperatorId)
            {
                case 0 :
                    c.OpertionResult = c.FirstNumber + c.SecondNumber;
                    break;
                case 1:
                    c.OpertionResult = c.FirstNumber - c.SecondNumber;
                    break;
                case 2:
                    c.OpertionResult = c.FirstNumber * c.SecondNumber;
                    break;
                case 3:
                    {
                        if (c.SecondNumber == 0)
                            c.OpertionResult = 0;
                        else
                            c.OpertionResult = c.FirstNumber / c.SecondNumber;
                        break;
                    }
                default:
                    c.OpertionResult = 0;
                    break;

            }
            return Ok(c);
        }

    }
}
