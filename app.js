

/**
 @returns {string}
 * 
 */

function buildURL() {

    const queryURL = "https://api.edamam.com/search?";
    
    const queryParams = { "app_id": "ff5eea8f", "app_key": "60ed34c1d6d2b78f3933b4438a735801" };
    queryParams.q = $("#recipeSearch")
    .val()
    .trim();
    
    console.log("---------------\nURL: " + queryURL + "\n---------------")
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
    
    }
    
    function updatePage(edamamRecipe) {
        const numRecipe = edamamRecipe.hits.length;
    
        console.log(edamamRecipe);
        console.log("------------------------------------");
      
        // Loop through and build elements for the defined number of articles
        for (let i = 0; i < numRecipe; i++) {
          // Get specific article info for current index
          const recipeV = edamamRecipe.hits[i].recipe;
      
      
          // Create the  list group to contain the articles and add the article content for each
          const $articleList = $("<ul>");
          $articleList.addClass("list-group");
      
          // Add the newly created element to the DOM
          $("#recipeDiv").append($articleList);
      
      
          // Log section, and append to document if exists
          const section = recipeV.label;
          console.log(recipeV.label);

          const $articleListItem = $("<div>").addClass("art");

          //if (section) {
            //$articleListItem.append("<h5>Section: " + section + "</h5>");
          //}
      
          const dataImg = recipeV.image;
            //Create new image div and gave it an attribute
            const imgDiv = $("<img class='image'>")
            imgDiv.attr("src", dataImg);

      
          // Append and log url
          $articleListItem.append("<a href='" + recipeV.url + "'>" + section + "</a><br>");
          $articleListItem.append(imgDiv);
          console.log(recipeV.url);
      
          // Append the article
          $articleList.append($articleListItem);
        }
    } 
    
    function clear() {
        $("#article-section").empty();
      }

      $("#spring").on("click", function() {
        window.open("https://api.edamam.com/recipes/spring");
      })

      $("#summer").on("click", function() {
        window.open("https://api.edamam.com/recipes/summer");
      })

      $("#fall").on("click", function() {
        window.open("https://api.edamam.com/recipes/fall");
      })

      $("#winter").on("click", function() {
        window.open("https://api.edamam.com/recipes/winter");
      })
      
      // .on("click") function associated with the Search Button
      $("#run-search").on("click", function(event) {
        event.preventDefault();
      
        clear();
      
        const queryURL = buildURL();
      
    
    
    // Performing an AJAX request with the queryURL
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    // After data comes back from the request
    .then(function(response) {
        updatePage(response);
    });
      });
