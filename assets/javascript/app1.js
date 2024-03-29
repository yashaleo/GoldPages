// Hiding zip code form and submit button.
$(".md-form").hide();

// When restaurant button is clicked, zip code box reappears.
var restaurantClicked = $(document).on("click", ".restaurant", function () {
    console.log("restaurant button was clicked")
    $(".md-form").show();
});

// When hotels button is clicked, zip code box reappears.
var hotelClicked = $(document).on("click", ".hotel", function () {
    console.log("hotels button was clicked")
    $(".md-form").show();
});

// When attractions button is clicked, zip code box reappears.
var attractionsClicked = $(document).on("click", ".attractions", function () {
    console.log("attractions button was clicked")
    $(".md-form").show();
});

// When all button is clicked,  zip code box reappears.
var allClicked = $(document).on("click", ".all", function () {
    console.log("all button was clicked")
    $(".md-form").show();
});



