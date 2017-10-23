using Microsoft.AspNetCore.Mvc;

namespace SPARocks.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}