import './App.css';
import { useEffect, useState, useReducer } from 'react';
import MyHeader from './components/header'
import GameZone from './components/gamezone';

function App() {
  let rate=0;
  const [ignored,forceupdate]=useReducer(x=>x+1,0);
  
  useEffect(()=>{
    forceupdate();
  },[rate])

  return (
    <div className="App">
      <MyHeader value="values" rating={rate}/>        
      <GameZone value={[0,1,2,3,4,5,6,7,8]} rating={rate}/>
    </div>
  );
};

export default App;
