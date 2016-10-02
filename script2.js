
$(document).ready(function () { 

  getWeather();

});

function getPosition(){
  // Get user location coordinates and incorporate them into the api call for
  // location specific weather data
  var pos = { lat: 0, lon: 0 };
  navigator.geolocation.getCurrentPosition(function(position){
  pos.lat = position.coords.latitude;
  pos.lon = position.coords.longitude;
  api_call = "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat + "&lon=" + pos.lon +"&appid=8a755c3903379d7e690ec63d41cb5528&units=imperial";
  return api_call;
}
   
// Make the api call to openweathermap.org
// and insert returned data into html
function getWeather(){
  $.getJSON(getPosition(),
    function(data) {
    var units = "F";
    var temp = Math.round(data.main.temp);
    $('#location').html(data.name);
    $('#temp').html(temp + " °" + units);
    $('#weather').html(data.weather[0].main); 
    $('#icon').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
  )};
} 


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
)};
