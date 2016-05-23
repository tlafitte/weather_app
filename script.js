

$(document).ready(function () {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=8a755c3903379d7e690ec63d41cb5528",
      function(weather) {
      // Populate #weather with current temp from open weather API
      $('#weather').html(JSON.stringify(weather.main.temp));

  });
 });
   

// for celcius use &units=metric