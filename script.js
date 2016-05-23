
$(document).ready(function () {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Austin,usa&units=imperial&appid=8a755c3903379d7e690ec63d41cb5528",
      function(data) {
      $('#location').html(data.name);
      var units = ["F", "C"];
      $('#temp').html(data.main.temp + " °" + units[0]);
      $('#weather').html(data.weather[0].main); 
      $('#icon').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
  });
});


   







// for celcius use &units=metric


/*

{
"coord":{"lon":-97.74,"lat":30.27},
"weather":[{"id":500,"main":"Rain", "description":"light rain","icon":"10n"}],
"base":"cmc stations",
"main":{"temp":77.32,"pressure":1013,"humidity":78,"temp_min":75,"temp_max":78.8},
"wind":{"speed":9.17,"deg":150,"gust":9.8},
"clouds":{"all":90},
"dt":1463975298,
"sys":{"type":1,"id":2558,"message":0.0041,"country":"US","sunrise":1464003147,"sunset":1464053005},
"id":4671654,
"name":"Austin",
"cod":200
}

$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});



$(document).ready(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/apps/Webservices/wsUsers.asmx/GetUser",
        data: "{'user': 'jwg1'}",
        dataType: "json",
        success: function (data) {
            var obj = data.d;
            console.log(obj);
        }
    });
});

*/