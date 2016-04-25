// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'elmabish.pp97g5m7';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoiZWxtYWJpc2giLCJhIjoiY2luZzBjcHN6MTlubnYwa3E2MHpudDZ5bSJ9.koZuc1tyyFQMVVNAjvPFuA';

// Create the map object with your mapId and token, 
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!

var dataFileToAdd = 'data/parks.geojson';

var featureLayer = L.mapbox.featureLayer();
    featureLayer.loadURL(dataFileToAdd);
    featureLayer.addTo(map);

featureLayer.on('ready', function(){
  this.setStyle({
    "color":"#228B22",
    "fillColor":"#8FBC8F",
    "weight": .5, 
    "opacity": 0.65
  })
  map.fitBounds(featureLayer.getBounds());
})