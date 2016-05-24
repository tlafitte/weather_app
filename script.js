
$(document).ready(function () { // Is it cool to have all of these functions strung
	                            // together like this in order to keep variables in scope?
	                            // What is the best way to do this? Is there another way?
	var units = "F";
	var pos = { lat: 0, lon: 0 };

   navigator.geolocation.getCurrentPosition(function(position){
    pos.lat = position.coords.latitude;
    pos.lon = position.coords.longitude;
    api_call = "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat + "&lon=" + pos.lon +"&appid=8a755c3903379d7e690ec63d41cb5528&units=imperial";
   
  $.getJSON(api_call,
      function(data) {
      var temp = data.main.temp;
      $('#location').html(data.name);
      $('#temp').html(temp + " °" + units);
      $('#weather').html(data.weather[0].main); 
      $('#icon').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

   
   $('#temp').click(function(){
   	
      if(units == "F"){
      	units = "C";
        temp = (temp -32) * (5/9);
      	$('#temp').html(temp + " °" + units);
      }
      else if(units == "C"){
      	units = "F";
      	temp = (temp * 1.8) + 32;
      	$('#temp').html(temp + " °" + units);
      }
      });
    });
   });
});

 