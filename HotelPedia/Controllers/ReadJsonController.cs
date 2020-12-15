using HotelPedia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace HotelPedia.Controllers
{
    public class ReadJsonController : Controller
    {
        // GET: ReadJson
        public ActionResult Index()
        {
            //get the Json filepath  
            string file = Server.MapPath("~/App_Data/csvjson.json");

            //deserialize JSON from file  
            string Json = System.IO.File.ReadAllText(file);

            JavaScriptSerializer ser = new JavaScriptSerializer();
            var hotelList = ser.Deserialize<List<Hotel>>(Json);

            return View(hotelList);
        }
    }
}