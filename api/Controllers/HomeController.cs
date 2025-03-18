namespace API.Controllers {
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;

    [ApiController]
    [Route("")]
    public class HomeController: ControllerBase
    {
        [HttpGet]
        public IActionResult ApiIsWroking()
        {
            return Ok(new { Status = "Success", Message = "API is working"});
        }

        [HttpGet("protected")]
        [Authorize(Policy = "RequireAdminRole")]
        public IActionResult ProtectedEndpoint()
        {
            return Ok(new { Status = "Success", Message = "If you are logged, you can see me"});
        }

    }
}