
import {useEffect,useState,useReducer} from "react";
import '../styles/header.css'
const MyHeader= (props)=>{
    console.log(props)
    const [count,setCount]=useState(props.rating);
    const [ignored,forceupdate]=useReducer(x=>x+1,0);

    useEffect(()=>{
        forceupdate();
    },[count])


    return (
        <div className="container">
            <div className="leftHeader">Memory Card Game</div>
            <div className="rightHeader">
                <div className="currentScore">CurrentScore:{count}</div>
                <div className="maxScore">MaxScore:20</div>
            </div>
        </div>
    )
};
export default MyHeader;