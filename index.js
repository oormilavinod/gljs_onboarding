
mapboxgl.accessToken = 'pk.eyJ1Ijoib29ybWlsYXZpbm9kIiwiYSI6ImNqMzJqZWxpNjAwNDEyd284djQ5NHp6OTIifQ.DMjNS8_ZqjrZrtnwJI-CsA';

var obj =  {
    container: 'map', // container id
    style: 'mapbox://styles/oormilavinod/cj3mtqbqj00022ro92hbijon9', //stylesheet location
    center: [78.2368, 12.9791], // starting position
    zoom: 14 ,// starting zoom
	hash:true

};

var data = { "type": "FeatureCollection",
  "generator": "overpass-ide",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2017-06-14T10:05:10Z",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3316175217",
        "name": "Ajjapalli",
        "name:kn": "ಅಜ್ಜಪಲ್ಲಿ",
        "name:kn:iso15919": "Ajjapalli",
        "place": "village"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.2279798,
          12.9681419
        ]
      },
      "id": "node/3316175217"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3829748841",
        "name": "Devaganahalli",
        "name:kn": "ದೇವಗಾನಹಳ್ಳಿ",
        "place": "village"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.2223095,
          12.9784135
        ]
      },
      "id": "node/3829748841"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4125784767",
        "name": "Chinnakote",
        "name:kn": "ಚಿನ್ನಕೋಟೆ",
        "place": "village"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.2276788,
          12.9813858
        ]
      },
      "id": "node/4125784767"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4125784775",
        "name": "Kattihalli",
        "name:kn": "ಕತ್ತಿಹಳ್ಳಿ",
        "place": "village"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.228719,
          12.987451
        ]
      },
      "id": "node/4125784775"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4873933576",
        "name": "Kaveri Nagar",
        "place": "neighbourhood"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.2307619,
          12.9774395
        ]
      },
      "id": "node/4873933576"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4873956207",
        "name": "Vijaya Nagar",
        "place": "neighbourhood"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.2308692,
          12.9811613
        ]
      },
      "id": "node/4873956207"
    }
  ]
};

var source = {
	'type':"geojson",
	'data': data
};

var layer ={
	'id' : "place",
	'type':"circle",
	'source': source,
	'paint': { 
	'circle-radius' : 5,
	'circle-color': '#7e2809'


	}
};
var map = new mapboxgl.Map(obj);

map.on('load', function() {
	map.addLayer(layer);
});

mapboxgl.accessToken = 'pk.eyJ1Ijoib29ybWlsYXZpbm9kIiwiYSI6ImNqMzJqZWxpNjAwNDEyd284djQ5NHp6OTIifQ.DMjNS8_ZqjrZrtnwJI-CsA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/oormilavinod/cj3mtqbqj00022ro92hbijon9',
    center: [78.2368, 12.9791],
    zoom: 14
});

map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-right');

var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([78.2301,12.9746 ])
    .setHTML('<h1>Home</h1>')
    .addTo(map);

    var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([78.2364,12.9794 ])
    .setHTML('<h1>My School</h1>')
    .addTo(map);


 var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}