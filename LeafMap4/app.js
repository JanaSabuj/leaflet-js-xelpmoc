 
     var map = L.map('map').setView([20.5937, 78.9629], 4.5);



     //adding the basic map tile
     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
         maxZoom: 18,
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
             '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
             'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         id: 'mapbox.streets'
     }).addTo(map);

     //info marker

     var marker = L.marker([28.7041,77.1025]).addTo(map).bindPopup(' <h3>This map covers all the Indian States and UTs.</h3> <h4>The borders of state can be visualized. </h4> <h4>Click on any to know the name of the state and other info. <br> Zoom in for better visualization of the state boundaries! </h4>').openPopup();


     //loading map data from local geojson
     
     function basement(feature, layer){

      layer.bindPopup(" <h3> Hi I am an  info popup. </h3> " + " <h4> You clicked  </h4>"+ "<h1>" +feature.properties.NAME_1 +"</h1>" +"<h2>"+  "   It is a "+ feature.properties.ENGTYPE_1 + "</h2");

     };


    L.geoJSON(india,{
      onEachFeature: basement

    }).addTo(map);
 
 
 