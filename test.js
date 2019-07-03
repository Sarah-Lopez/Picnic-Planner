
function test() {

    //Seperate by seasons

const userSearch = ["summer", "fall", "winter", "spring"];


const queryURL = "https://api.edamam.com/search?q=" + userSearch + "&app_id=ff5eea8f&app_key=60ed34c1d6d2b78f3933b4438a735801";


// Performing an AJAX request with the queryURL
$.ajax({
url: queryURL,
method: "GET"
})
// After data comes back from the request
.then(function(response) {

    console.log(response);

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
        $(".recipe").append(imgDiv);
        $(".recipe").append(newDiv);
        $(".recipe").append(healthDiet);
        
    }

})

}
