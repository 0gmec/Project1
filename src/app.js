








// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);









var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);
console.log("typescript is working");
