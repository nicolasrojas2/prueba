import L from 'leaflet'

//BASEMAPS 
export var standard_osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '©OpenStreetMap, ©Standard',minZoom: 0, maxZoom: 24});
export var standard_osm_mm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '©OpenStreetMap, ©Standard',minZoom: 0, maxZoom: 24});

export var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

export var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{maxZoom: 24, minZoom:0, subdomains:['mt0','mt1','mt2','mt3']});
