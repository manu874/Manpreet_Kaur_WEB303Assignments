/*
    Assignment #4
    {Vrajesh Patel}
*/

$(function () {
    // your code here
  
    if (!navigator.geolocation) {
      $("#locationhere").html("<h1>Please enable your location. </h1>");
    } else {
      navigator.geolocation.getCurrentPosition(success, fail);
      function success(position) {
        let nextLat = position.coords.latitude;
        let nextLon = position.coords.longitude;

        $("#locationhere").append("<h1>Your Latitude is: " + nextLat + "</h1>");
        $("#locationhere").append("<h1>Your Longitude is: " + nextLon + "</h1>");
         
        let oldLat = localStorage.getItem("oldLat");
        let oldLon = localStorage.getItem("oldLon");
        
  
        if (oldLat && oldLon) {
          const distance = calcDistanceBetweenPoints(nextLat, nextLon, nextLat, nextLon);
          $("#distance").append("<h1> You have Travelled " + distance.toFixed(2) + "km</h1>");
        } else {
          $("#distance").append(
            "<h1>Welcome to the page for first time!!!!</h1>"
          );
        }
        localStorage.setItem("oldLat", nextLat);
        localStorage.setItem("oldLon", nextLon);
      }
      function fail() {
        $("#location").html("<h1>We cannot get the location</h1>");
      }
    }
  
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
      var toRadians = function (num) {
        return (num * Math.PI) / 180;
      };
      var R = 6371000; // radius of Earth in metres
      var φ1 = toRadians(lat1);
      var φ2 = toRadians(lat2);
      var Δφ = toRadians(lat2 - lat1);
      var Δλ = toRadians(lon2 - lon1);
  
      var a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
      return R * c;
    }
  });
  