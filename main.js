let latitude=22.7868542, longitude=88.3643296;
mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center : [longitude,latitude],
    zoom:4
})

map.addControl(
    new MapboxGeocoder({
        accessToken : mapboxgl.accessToken,
        mapboxgl : mapboxgl
    })
)

var image1 = document.querySelector("#amber")
var image2 = document.querySelector("#gateway")
var image3 = document.querySelector("#gate")
var image4 = document.querySelector("#lotus")
var image5 = document.querySelector("#victoria")
var image6 = document.querySelector("#taj")
var image7 = document.querySelector("#charminar")
var image8 = document.querySelector("#gwalior")


var marker1 = new mapboxgl.Marker({
    element : image1
})
.setLngLat([75.85133,25.98547])
.addTo(map)

var marker2 = new mapboxgl.Marker({
    element : image2
})
.setLngLat([ 72.8347,18.9220])
.addTo(map)

var marker3 = new mapboxgl.Marker({
    element:image3
})
.setLngLat([77.2295,28.6129])
.addTo(map)

var marker4 = new mapboxgl.Marker({
    element:image4
})
.setLngLat([77.2588,28.5535])
.addTo(map)

var marker5 = new mapboxgl.Marker({
    element:image5
})
.setLngLat([88.3426,22.5448])
.addTo(map)

var marker6 = new mapboxgl.Marker({
    element: image6
})
.setLngLat([78.0421,27.1751])
.addTo(map)

var marker7 = new mapboxgl.Marker({
    element:image7
})
.setLngLat([78.4747,17.3616])
.addTo(map)

var marker8 = new mapboxgl.Marker({
    element:image8
})
.setLngLat([78.1690,26.2263])
.addTo(map)
