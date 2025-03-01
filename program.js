var map = L.map('map').setView([4.622283900850308, -74.17107456828663], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadPolygon() {

    try{

        let response= await fetch("britalia.geojson");
        let data = await response.json();

        L.geoJSON(data,
            {
                style: {color: "blue"}
            }
        ).addTo(map);

    }
    catch(error){
        console.error("Can´t load")
    }
    
}

loadPolygon();
