import React, {useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from "leaflet";


const icon = L.icon({
    iconUrl:"./download - Copy.png",
    iconSize:[38, 38]
});

const position = [51.505, -0.09]
 function RestCenterView (props){
  const {selectPosition } =props;
  const map = useMap();

   useEffect(()=>{
    if (selectPosition){
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate:true
        }
      )
    }
   },[selectPosition]);
  
  return null;
 }
 export default function Map(props){
  const {selectPosition}= props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
 return(
  <MapContainer center={position} zoom={13} style={{width:'100%', height:'100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=9WFebKyo4SzKO0H6sXG3"
    />
    {
      selectPosition && (

    <Marker position={locationSelection} icon={icon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    )}
    <RestCenterView selectPosition={selectPosition}/>
  </MapContainer>
);
}