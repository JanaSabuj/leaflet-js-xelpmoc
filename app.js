	 // alert('This is a map');
	 var mymap = L.map('mapid').setView([22.5726, 88.3639], 13);

	 //adding the basic map tile
	 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	     maxZoom: 18,
	     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
	         '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	     id: 'mapbox.streets'
	 }).addTo(mymap);



	 ///Markers-add a marker for my college Jadavpur University SL Campus, JU Main Campus,XelpMoc Office.-ve longitude signifies west	

	 var marker = L.marker([22.5605, 88.4135]).addTo(mymap).bindPopup('This is JU SL Campus').openPopup();
	 var marker = L.marker([22.4978, 88.3717]).addTo(mymap).bindPopup('This is JU Main Campus').openPopup();
	 var marker = L.marker([22.5770, 88.4313]).addTo(mymap).bindPopup('This is Millenium IT Park Xelpmoc Office').openPopup();




	 ///Circles-this circle represents the entire plot of JU SL Campus, including CAB Ground


	 var circle = L.circle([22.562022, 88.4131262], {
	     color: 'red',
	     fillColor: '#f03',
	     fillOpacity: 0.5,
	     radius: 250
	 }).addTo(mymap);

	 circle.bindPopup('I\'m a circle of JUSL').openPopup();

	 ///Polygons- catches the quadrilateral of SALT LAKE STADIUM


	 var polygon = L.polygon([
	     [22.568490, 88.407191],
	     [22.570940, 88.408352],
	     [22.570451, 88.410443],
	     [22.567167, 88.409468]
	 ]).addTo(mymap);

	 polygon.bindPopup('I represent the Salt Lake Stadium').openPopup();


	 //standalone popups

	 var popup = L.popup()
    .setLatLng([22.563922, 88.368948])
    .setContent("I am a standalone popup for NRS Hospital")
    .openOn(mymap);

