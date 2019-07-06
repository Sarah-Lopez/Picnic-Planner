


    //Seperate by seasons

//const userSearch = ""
//["summer", "fall", "winter", "spring"];
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
  
      // Increase the articleCount (track article # - starting at 1)
      //const articleCount = i + 1;
  
      // Create the  list group to contain the articles and add the article content for each
      const $articleList = $("<ul>");
      $articleList.addClass("list-group");
  
      // Add the newly created element to the DOM
      $("#recipeDiv").append($articleList);
  
      // If the article has a headline, log and append to $articleList
      /*const headline = recipeV.label;
      const $articleListItem = $("<li class='list-group-item articleHeadline'>");
  
      if (headline && headline.main) {
        console.log(headline.main);
        $articleListItem.append(
          "<span class='label label-primary'>" +
            articleCount +
            "</span>" +
            "<strong> " +
            headline.main +
            "</strong>"
        );
      }*/
  
  
      // Log section, and append to document if exists
      const section = recipeV.label;
      console.log(recipeV.label);

      const $articleListItem = $("<div>").addClass("art");

      if (section) {
        $articleListItem.append("<h5>Section: " + section + "</h5>");
      }
  
      const dataImg = recipeV.image;
        //Create new image div and gave it an attribute
        const imgDiv = $("<img class='image'>")
        imgDiv.attr("src", dataImg);
  
      // Append and log url
      $articleListItem.append("<a href='" + recipeV.uri + "'>" + recipeV.url + "</a>");
      $articleListItem.append(imgDiv);
      console.log(recipeV.url);
  
      // Append the article
      $articleList.append($articleListItem);
    }
} 

function clear() {
    $("#article-section").empty();
  }
  
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
.then(updatePage);
  });
/*
(function(response) {

    console.log(response);

    userSearch = $("#recipeSearch").val().trim();

    for (i = 0; i < response.hits.length; i++) {
        //Variables for the recipe name, image, health labels, and diet labels
        const name = response.hits[i].recipe.label;
        const health = response.hits[i].recipe.healthLabels;
        const diet = response.hits[i].recipe.dietLabels
        const dataImg = response.hits[i].recipe.image;
        //Create new image div and gave it an attribute
        const imgDiv = $("<img class='image'>")
        imgDiv.attr("src", dataImg);
        //Create a div for the health and diet labels
        const healthDiet = $("<div>").addClass("health-diet")
        //Append heath and diet labels to the healthDiet div
        $(healthDiet).append(health);
        $(healthDiet).append(diet);


        console.log(name);
        const newDiv = $("<h4>");
        //Append new divs to the recipe div in our html
        $("#recipeDiv").append(imgDiv);
        $("#recipeDiv").append(newDiv);
        $("#recipeDiv").append(healthDiet);
        
    }

})
*/

