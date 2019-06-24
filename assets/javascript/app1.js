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
// Submit Button
$(document).on("click", ".btn", function () {
    console.log("submit button clicked")
 });

 
 function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = 'Geolocation is not supported by this browser.';
    }
  }
  
  function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat, long);
  
    $.ajax({
      url: googleURL,
      method: 'GET',
      dataType: 'jsonp'
    }).then(function() {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var x = parseFloat(latitude);
      var y = parseFloat(longitude);
  
      var latlng = new google.maps.LatLng(x, y);
      var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('map'), myOptions);
  
      var marker = new google.maps.Marker({
        position: { lat: x, lng: y },
        map: map
      });
    });
  }
  
  getLocation();
  
  var googleURL = 'https://maps.googleapis.com/maps/api/js?key=YOURKEYGOESHERE';
  


