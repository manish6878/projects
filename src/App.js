import  {useState} from 'react';
import './App.css';
import React from 'react';
import Map from './Map';
import Serch from './Serch';

function App() {
  const [selectPosition, setselectPosition] = useState(null);
  return (
    <div style={{ border:'2px solid red',
     display:'flex',
      flexDirection:'row',
       width:'100vw',
        height:'100vh'}}>
     <div style={{ width:'50vw', height:'100vh'}}> <Map selectPosition={selectPosition}/> </div>
     <div style={{ width:'50vw'}}> <Serch selectPosition={selectPosition} setselectPosition={setselectPosition} /> </div>
    </div>
  );
}

export default App;
