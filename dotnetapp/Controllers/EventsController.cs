#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq; 

namespace dotnetapp.Controllers
{
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly DataContext _context;

        public EventController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Events
        [HttpGet]
        [Route("user/getAllThemes")]
        public async Task<ActionResult<IEnumerable<Event>>> getEvent()
        {
            return await _context.Events.ToListAsync();
        }

        // GET: api/Events/5
        [HttpGet]
        [Route("user/getBookedTheme/{eventId}")]
        public async Task<ActionResult<Event>> getEvent(int eventId)
        {
            var @event = await _context.Events.FindAsync(eventId);

            if (@event == null)
            {
                return NotFound();
            }

            return @event;
        }


        // PUT: api/Events/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("user/editTheme/{id}")]
        public async Task<IActionResult> editEvent(int id, Event @event)
        {
            if (id != @event.eventId)
            {
                return BadRequest();
            }

            _context.Entry(@event).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        // POST: api/Events
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("user/bookTheme")]
        public async Task<ActionResult<Event>> bookEvent(Event @event)
        {
            _context.Events.Add(@event);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEvent", new { id = @event.eventId }, @event); 
        }

        // DELETE: api/Events/5
        [HttpDelete("user/deleteTheme/{id}")]
        public async Task<IActionResult> deleteEvent(int id)
        {
            var @event = await _context.Events.FindAsync(id);
            if (@event == null)
            {
                return NotFound();
            }

            _context.Events.Remove(@event);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool EventExists(int id)
        {
            return _context.Events.Any(e => e.eventId == id);
        }
    }
}