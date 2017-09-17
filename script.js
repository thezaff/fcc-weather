var tempunit;
if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $.get({
                url: "https://fcc-weather-api.glitch.me/api/current",
                data: {lat:position.coords.latitude, lon:position.coords.longitude},
                success: function(json) {
                    $("#icon").attr('src', json.weather[0].icon);
                    $("#location").html(json.name + ", " + json.sys.country);
                    $("#main").html(json.weather[0].main);
                    tempunit = json.main.temp;
                    $("#temp").html(tempunit);
                    $("#tempsign").html("°");
                    $("#celsius").html("C");
                    $("#farenheit").html("F");
                    $("#farenheit").on('click', function() {
                        $("#temp").text((tempunit *  9 / 5) + 32);
                        $("#celsius").css('color', '#222831');
                        $("#farenheit").css('color', '#2BB3C0'); 
                    })
                    $("#celsius").on('click', function() {
                        $("#temp").text(json.main.temp);
                        $("#farenheit").css('color', '#222831');
                        $("#celsius").css('color', '#2BB3C0');
                    })  
                }
            });
        });
    }
    
