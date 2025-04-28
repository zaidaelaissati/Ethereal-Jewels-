let map = L.map('map').setView([51.23081644164199, 4.415918207934244], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*eigen logo*/

let Icon = L.icon({
    iconUrl: 'assets/images/pointerlogo.png',
    

    iconSize:     [60, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   
});

L.marker([51.23081644164199, 4.415918207934244], {icon: Icon}).addTo(map);

