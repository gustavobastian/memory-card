
import {useEffect,useState} from "react";
import '../styles/gamezone.css'
import ImageCard from "./ImageCard";

let array=[0,1,2,3,4,5,6,7,8]

const handlerClick=(e)=>{
    console.log("here:"+e);
}

const gameZone= (props)=>{
    console.log(props)
    return (
        <div className="container2">
           {array.map(function(i){
            return (<ImageCard id={i} handlerClick={(event)=>{handlerClick(event)}} value={i}/>)
           })}

        </div>
    )
}
export default gameZone;