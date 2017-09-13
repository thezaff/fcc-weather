
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $.get({
                url: "https://fcc-weather-api.glitch.me/api/current",
                data: {lat:position.coords.latitude, lon:position.coords.longitude},
                success: function(json) {
                    $("#icon").attr('src', json.weather[0].icon);
                    $("#location").html(json.name + ", " + json.sys.country);
                    $("#main").html(json.weather[0].main);
                    $("#temp").html(json.main.temp);
                    $("#converter").html("C");
                }
            });
        });
    }

function myFunction () {
    $("#converter").html("F");
}