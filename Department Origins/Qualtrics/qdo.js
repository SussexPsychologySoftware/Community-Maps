Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
	const userData = {lat:0,lng:0}
    let marker = null

    // Create map
    const map = L.map('map',{
            //zoomSnap: 0.5
        })
        .setView([30, 0], 3)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //maxZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)


    const popup = L.popup()

    map.on('click', onMapClick)
    function onMapClick(e) {
        if(marker !== null) marker.remove() 
        marker = L.marker(e.latlng).addTo(map);
        saveClick(e.latlng)
    }

    // Qualtrics stuff --------------
    function saveClick(latlng){
        userData.lat = latlng.lat
        userData.lng = latlng.lng
        Qualtrics.SurveyEngine.setEmbeddedData('latitude', userData.lat )
        Qualtrics.SurveyEngine.setEmbeddedData('longitude', userData.lng )
    }

    document.getElementById('mapsNextButton').addEventListener('click',()=>{
            document.getElementById('NextButton').click()
        })
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/
});