import React, {useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ClassNameConfigurator } from '@mui/base';

const NOMINATION_URL = "https://nominatim.openstreetmap.org/search?";
const params ={
  q:"",
  format:'json',
  addressdetails:'addressdetails'
};

export default function Serch(props) {
  const {selectPosition, setselectPosition } = props;
  const [searchtext, setsearchtext] = useState("");
  const [listPlace, setlistPlace] = useState([]);
  return (
     <div style={{display:'flex', flexDirection:'column'}}>
     <div style={{display:'flex'}}>
      <div style={{flex: 1}}>
        <OutlinedInput  style={{width:'100%'}} value={searchtext} onChange={(event)=>{
             setsearchtext(event.target.value)
        }}/>
      </div>
      <div style={{display:'flex', alignItems:'center', padding:'0px 20px'}}>
      <Button variant="contained" onClick={()=>{
       const params ={
           q:searchtext,
          format:'json',
            addressdetails:1,
            polygon_geojson:0
       };
       const queryString = new URLSearchParams(params).toString();
       const requestOption ={
        method: "GET",
        redirect: "follow"
       };
        fetch(`${NOMINATION_URL}${queryString}`,requestOption)
        .then((response)=> response.text())
        .then((result)=>{
          console.log(JSON.parse(result));
          setlistPlace(JSON.parse(result));
        })
        .catch((err)=>console.log("err:", err))
       }}>Search</Button>
      </div>
      </div>
      <div>
       <List component="nav" aria-label='main mailbox folders'>
       {
        listPlace.map((item)=>{
          return(
            <div key={item?.place_id}>
            <ListItem button onClick={()=>{
              setselectPosition(item)
            }}>
       
       <ListItemIcon>
         <img src="./download - Copy.png" alt='placeholder' style={{width:38 , height:38}}/>
       </ListItemIcon>
        <ListItemText primary={item?.display_name}/> 
       </ListItem>
       <Divider/>
            </div>
          );
        })
       }
        
       </List>
      </div>
      </div>
      
      );
}
