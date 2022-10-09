using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers
{
    public class ActivitiesController: BaseApiController
    {
        private DataContext _context {get;}
        public ActivitiesController(DataContext context )
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetActivities() => 
            Ok(await _context.Activities.ToListAsync());
            
        [HttpGet("{id}")] //
        public async Task<IActionResult> GetActivity(Guid id) => 
            Ok(await _context.Activities.FindAsync(id));
    }
}