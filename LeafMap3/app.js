 
	 var map = L.map('map').setView([37.857507, -85.632935], 7);
	 


	 //adding the basic map tile
	 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	     maxZoom: 18,
	     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
	         '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	     id: 'mapbox.streets'
	 }).addTo(map);
