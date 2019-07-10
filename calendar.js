//Submit link and display on page, append links to previous links
function showInput(number) {
    let newDiv= document.createElement ("li")
    let recipeVal=  document.getElementById("user_input" + number).value
    let recipeLi= $("<li>")
    recipeLi.text(recipeVal);
    console.log($('#text' + number + ' ul' ))
    $('#text' + number + ' ul' ).append(recipeLi);
}

//Clear buttons
$("#clear1").on("click", function () {
    $("#text1").empty();
});
$("#clear2").on("click", function () {
    $("#text2").empty();
});
$("#clear3").on("click", function () {
    $("#text3").empty();
});
$("#clear4").on("click", function () {
    $("#text4").empty();
});
$("#clear5").on("click", function () {
    $("#text5").empty();
});
$("#clear6").on("click", function () {
    $("#text6").empty();
});
$("#clear7").on("click", function () {
    $("#text7").empty();
});
$("#clear8").on("click", function () {
    $("#text8").empty();
});
$("#clear9").on("click", function () {
    $("#text9").empty();
});
$("#clear10").on("click", function () {
    $("#text10").empty();
});
$("#clear11").on("click", function () {
    $("#text11").empty();
});
$("#clear12").on("click", function () {
    $("#text12").empty();
});
$("#clear13").on("click", function () {
    $("#text13").empty();
});
$("#clear14").on("click", function () {
    $("#text14").empty();
});