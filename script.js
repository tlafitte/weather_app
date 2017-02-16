  $(document).ready(function(){
    getLocation();

  // Button swaps units between C and F when clicked
  $('#button').click(function(){
    var currTemp = $('#temp').html();
    var tempNum = parseInt(currTemp);
    var tempUnits;
    if (currTemp.indexOf("F") >= 0){
      tempUnits = "C";
      tempNum = Math.round((tempNum -32) * (5/9));
    }
    else if (currTemp.indexOf("C") >= 0){
      tempUnits = "F";
      tempNum = Math.round((tempNum * 1.8) + 32);
    }
    $('#temp').html(tempNum + " °" + tempUnits); // Reset #temp with converted data
  }); // End button

  })


/** Get user location data **/
function getLocation() {
    $.ajax({
        url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBJCvxEmi2PsLS9HTTnwkw07UyTsLO-WB0",
        type: "POST",
        success: function (response) {
            getLocalWeather(response);
        },
        error: function () {
            alert("Error: Unable to retrieve data from remote server");
        }
    });
} 


/** Get localized weather data **/
function getLocalWeather(response) {
  var apiURL = "http://api.openweathermap.org/data/2.5/weather?";
  var lat = "lat=" + response.location.lat + "&";
  var lng = "lon=" + response.location.lng + "&";
  var appID = "appid=8a755c3903379d7e690ec63d41cb5528&units=imperial";
  var fullURL = apiURL + lat + lng + appID;

  $.ajax({
    url: fullURL,
    type: "POST",
    dataType: "jsonp",
    success: function(response) {
         updatePage(response);
    },
    error: function (){
         alert("Error: Unable to retrieve data from remote server");
    }
  });
} 


/** Update page with current local weather data **/
function updatePage (weatherData) {

  var userCity = weatherData.name;
  var currentTemp = Math.round(weatherData.main.temp) + " °F";
  var currentWeather = weatherData.weather[0].main;

  // Update elements with current weatherData
  $('#location').html(userCity);
  $('#temp').html(currentTemp);
  $('#weather').html(currentWeather);

  // Retrieve icon for current weatherData and update element
  var apiURL = "http://openweathermap.org/img/w/";
  var iconID = weatherData.weather[0].icon;
  var fileType = ".png";
  var fullURL = apiURL + iconID + fileType;
  $('#icon').attr("src", fullURL);
  

  var bgCondition;
  // Use the weather icon ID numbers to match general weather condition categories to bg images
  var weatherID = parseInt(iconID); // strip everything but the number value from iconID
  if (weatherID == 1)
    bgCondition = "clear";
  else if (weatherID >= 2 && weatherID<= 4)
    bgCondition = "cloudy";
  else if (weatherID >= 9 && weatherID<= 10)
    bgCondition = "rain";
  else if (weatherID == 13)
    bgCondition = "snow";
  else if (weatherID == 50)
    bgCondition = "fog";
  else if (weatherID == 11)
    bgCondition = "storm";


  $("body").css("background-image","url('images/" + bgCondition + ".jpg')");
};








