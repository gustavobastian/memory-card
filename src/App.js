import './App.css';
import { useEffect, useState, useReducer } from 'react';
import MyHeader from './components/header'
import GameZone from './components/gamezone';

function App() {
  
  
  const [rate,setRate]=useState(0)  
  const [maxScore,setMaxScore]=useState(0)  

  const [ignored,forceupdate]=useReducer(x=>x+1,0);
  
  useEffect(()=>{
    forceupdate();
  },[setRate,setMaxScore])

  const handleIncreaseRate=()=>{
    
    if((rate+1) > maxScore){
      setMaxScore(rate+1);
    }
    setRate(rate+1);
    forceupdate();
    console.log("increasing:"+rate)
    
  }
  const handleResetRate=()=>{
    setRate(0);
    forceupdate();
  }

  return (
    <div className="App">
      <MyHeader value="values" 
        rating={rate}
        maxScore={maxScore}
      />        
      <GameZone value={[0,1,2,3,4,5,6,7,8]}         
        rating={rate} 
        setRate={handleIncreaseRate.bind(this,'')} 
        resetRate={handleResetRate.bind(this,'')}/>
    </div>
  );
};

export default App;
