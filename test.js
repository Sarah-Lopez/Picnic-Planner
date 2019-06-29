
//hi
const queryURL = "https://api.edamam.com/search?q=chicken&app_id=ff5eea8f&app_key=60ed34c1d6d2b78f3933b4438a735801&ingr=4";
//"https://api.giphy.com/v1/gifs/search?q=" +
//animal + "&api_key=dc6zaTOxFJmzC&limit=10";


// Performing an AJAX request with the queryURL
$.ajax({
url: queryURL,
method: "GET"
})
// After data comes back from the request
.then(function(response) {

    console.log(response);

    for (i = 0; i < response.hits.length; i++) {
        const name = response.hits[i].recipe.label;
        console.log(name);
    }

})