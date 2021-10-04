const L =require ('leaflet');
import 'leaflet-marker-rotation/src/rotatedMarker';
import markerImage from '../../../assets/img/marker.png'

export var dynamicMarker=(coords,angle)=>{
    return new L.rotatedMarker(coords, {
        rotationOrigin:'center',
        rotationAngle: angle
    });
}

export var myIcon = L.icon({
    iconUrl: markerImage,
    iconSize: [25, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
