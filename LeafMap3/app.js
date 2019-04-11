 //add AJAX for requesting json data from url

 var counties = $.ajax({
     url: "https://gist.githubusercontent.com/maptastik/df8e483d5ac1c6cae3dc4a7c02ea9039/raw/9cd46849bddcfa90aab240772a12275408d6d8d0/kyCounties.geojson",
     dataType: "json",
     success: console.log("County data successfully loaded."),
     error: function(xhr) {
         alert(xhr.statusText)
     }
 })


 //wrapping rest of the script in .when() and .done() so that AJAX call for geojson data is completed
 // first before the rest of the leaflet map loads

 $.when(counties).done(function() {

     var map = L.map('map').setView([37.857507, -85.632935], 7);



     //adding the basic map tile
     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
         maxZoom: 18,
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
             '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
             'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         id: 'mapbox.streets'
     }).addTo(map);


 });

 //displaying featurers of the data

 L.geoJSON(counties.responseJSON).addTo(map);