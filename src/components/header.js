
import {useEffect,useState,useReducer} from "react";
import '../styles/header.css'
const MyHeader= (props)=>{
    
    const [count,setCount]=useState(props.rating);
    const [scores,setScores]=useState(props.maxScores);
    
    const [ignored,forceupdate]=useReducer(x=>x+1,0);

    useEffect(()=>{        
        forceupdate();
    },[count,scores])


    return (
        <div className="container">
            <div className="leftHeader">
                <h1>Memory Card Game: </h1>                
                <p> (if you repeat the card, you loose)</p>
            </div>
            <div className="rightHeader">
                <div className="currentScore">CurrentScore:{props.rating}</div>
                <div className="maxScore">MaxScore: {props.maxScore}</div>
            </div>
        </div>
    )
};
export default MyHeader;