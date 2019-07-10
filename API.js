  console.log("page loaded");
  
  const APIkey = "47337097ebfc4ab015eefc3e27cd788d";


       let zip;


       $("#button").on("click", function () {
           console.log("hello");
           event.preventDefault();

           zip = $("#zip").val();
           console.log(zip)
           const weather = $(this).attr("data-weather");

           const queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=" + APIkey + "&units=imperial"



           $.ajax({
               url: queryURL,
               method: "GET"

           })
               .then(function (response) {
                   console.log(response)

  
                   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
                   $(".temp").text("Temperature (F) " + response.main.temp);
                   $(".wind").text("Wind Speed: " + response.wind.speed);
                   $(".humidity").text("Humidity: " + response.main.humidity);

               });




       })