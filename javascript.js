
    
    const queryURL = 'https://api.yelp.com/v3/businesses/search?location=Arizona'
    // Creating an AJAX call for the specific button being clicked
    
  



      $.ajax({
        url: queryURL,
        // beforeSend: function(request) {
        //     request.setRequestHeader("Authorization: Bearer", "U_I2WEBf30B57uz-OWPTFNzkZXE-aa4X5TomOxg-N9DSsALkENlBaf3GuH-AsDowZIPERYACljJ67SSjc3yGOJscT7A_8uEo6rm2KHzXHUsQMBbmJdO8vk3lXhccXXYx");
        //   },
        crossDomain: true,
        headers: { 'Authorization': 'Bearer U_I2WEBf30B57uz-OWPTFNzkZXE-aa4X5TomOxg-N9DSsALkENlBaf3GuH-AsDowZIPERYACljJ67SSjc3yGOJscT7A_8uEo6rm2KHzXHUsQMBbmJdO8vk3lXhccXXYx',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json'   },
        method: "GET"
      })

      // After the data from the AJAX request comes back
        .then(function(response) {
            console.log(response);
            console.log("123");
        })
