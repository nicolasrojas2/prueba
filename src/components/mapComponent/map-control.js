import 'leaflet/dist/leaflet.css';
import './map.scss';
const L =require ('leaflet');
import 'leaflet.polylinemeasure'
import 'leaflet-wfst'
import {googleSat} from './layers/control-layers'
import {minimap} from './controls/minimap'
import {dynamicMarker} from './controls/markers'
import {myIcon} from './controls/markers'
import swal from 'sweetalert2';

var map = L.map('map', {
    center: [5.33394890029843, -72.39580774069469],
    zoom: 14,
    layers: [googleSat]
});
map.addControl(minimap);

const marker = dynamicMarker((map.getBounds()).getCenter(),45);
marker.setIcon(myIcon)
marker.addTo(map)

L.control.zoom({position: 'topright'}).addTo(map);
new L.control.scale({imperial: false}).addTo(map)
new L.control.polylineMeasure().addTo(map);

const r_perimetro = L.tileLayer.wms('http://34.132.27.64:8080/geoserver/wms?service=WMS',{
    layers: 'yopal:r_perimetro',
    attribution: 'Creditos de la capa',
    crs:L.CRS.EPSG4326,
    format: 'image/png',
    transparent: true
}).addTo(map);

const terrenoOptions = {
    crs: L.CRS.EPSG4326,
    showExisting: true,
    geometryField: 'geom',
    url: `http://34.132.27.64:8080/geoserver/wfs`,
    typeNS: 'yopal',
    typeName: 'u_terreno',
    opacity: 1,
    style: function(layer) {
      return {
        color: 'gray',
        weight: 2
      }
    },
};

const u_terreno = new L.WFST(terrenoOptions, new L.Format.GeoJSON({
    crs: L.CRS.EPSG4326
})).addTo(map);
    
u_terreno.on('click',function(e){
  let content = `
  Código: ${e.layer.feature.properties.codigo}<br>
  Área: ${e.layer.feature.properties.shape_area}
  `
  swal.fire({
      html: content,
  })
})