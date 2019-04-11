 //add AJAX for requesting json data from url

 var counties = $.ajax({
     url: "https://gist.githubusercontent.com/maptastik/df8e483d5ac1c6cae3dc4a7c02ea9039/raw/9cd46849bddcfa90aab240772a12275408d6d8d0/kyCounties.geojson",
     dataType: "json",
     success: console.log("County data successfully loaded."),
     error: function(xhr) {
         alert(xhr.statusText)
     }
 })
 var motorways = $.ajax({
  url: "https://gist.githubusercontent.com/maptastik/df8e483d5ac1c6cae3dc4a7c02ea9039/raw/ff9897d53ee19a92e4393d23c87aa6d305e6b247/kyMotorwaysSimplified.geojson",
  dataType: "json",
  success: console.log("County data successfully loaded."),
  error: function(xhr) {
    alert(`Motorways: ${xhr.statusText}`);
  }
});

var parks = $.ajax({
  url: "https://gist.githubusercontent.com/maptastik/df8e483d5ac1c6cae3dc4a7c02ea9039/raw/ff9897d53ee19a92e4393d23c87aa6d305e6b247/kyParks.geojson",
  dataType: "json",
  success: console.log("County data successfully loaded."),
  error: function(xhr) {
    alert(`Parks: ${xhr.statusText}`);
  }
});


 //wrapping rest of the script in .when() and .done() so that AJAX call for geojson data is completed
 // first before the rest of the leaflet map loads

 $.when(counties,motorways,parks).done(function() {

     var map = L.map('map').setView([37.857507, -85.632935], 7);



     //adding the basic map tile
     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
         maxZoom: 18,
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
             '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
             'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         id: 'mapbox.streets'
     }).addTo(map);

      var marker = L.marker([38.6270,-90.1994]).addTo(map).bindPopup(' <ul> <li> Blue- All the Kentucky counties </li> <li> Red- All the Kentucky Motorways </li> <li> Black- All the Kentucky Parks </li> </ul> Im just a random notifier. <br> Zoom in for better visualization!').openPopup();

      L.geoJSON(counties.responseJSON).addTo(map);	

      var kyCounties = L.geoJSON(counties.responseJSON, {
    fillOpacity: 0,
    color: '#b2b2b2',
    weight: 0.75
  }).addTo(map);

  var kyMotorways = L.geoJSON(motorways.responseJSON, {
    color: 'red',
    weight: 1
  }).addTo(map);
  
  var kyParks = L.geoJSON(parks.responseJSON, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 4,
        fillOpacity: 0,
        color: 'black',
        weight: 0.75
      })
    }
  }).addTo(map);


});



 

 //displaying featurers of the data

