
$(document).ready(function () { 

	var units = "F";
	var pos = { lat: 0, lon: 0 };
   navigator.geolocation.getCurrentPosition(function(position){
    pos.lat = position.coords.latitude;
    pos.lon = position.coords.longitude;
    api_call = "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat + "&lon=" + pos.lon +"&appid=8a755c3903379d7e690ec63d41cb5528&units=imperial";
   
   // jQuery getJSON method to make the api call 
   // Returned data is inserted into html
  $.getJSON(api_call,
      function(data) {
      var temp = data.main.temp;
      $('#location').html(data.name);
      $('#temp').html(temp + " °" + units);
      $('#weather').html(data.weather[0].main); 
      $('#icon').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

/*
      if(data.weather[0].id == /8[0-9][0-9]/)
        $('#body').css("background-image", 'url("http://source.unsplash.com/featured/?snow")');
      });
*/

   // Temperature conversion between F and C on click
   $('#temp').click(function(){
   	
      if(units == "F"){
        units = "C";
        temp = Math.round((temp -32) * (5/9));
        $('#temp').html(temp + " °" + units);
      }
      else if(units == "C"){
        units = "F";
        temp = Math.round((temp * 1.8) + 32);
        $('#temp').html(temp + " °" + units);
      }
      }); // temperature conversion 
    }); // API call
   }); // geolocation
  

});

 