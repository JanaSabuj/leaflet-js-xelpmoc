	 // alert('This is a map');
	 var mymap = L.map('mapid').setView([22.5726, 88.3639], 12);

	 //adding the basic map tile
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);



	//markers

	//add a marker for my college Jadavpur University SL Campus, JU Main Campus, 
	var marker = L.marker([22.5605, 88.4135]).addTo(mymap).bindPopup('This is JU SL Campus').openPopup();
	var marker = L.marker([22.4978, 88.3717]).addTo(mymap).bindPopup('This is JU Main Campus').openPopup();
	var marker = L.marker([22.5770, 88.4313]).addTo(mymap).bindPopup('This is Millenium IT Park Xelpmoc Office').openPopup();