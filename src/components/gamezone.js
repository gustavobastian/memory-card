
import {useEffect,useState} from "react";
import '../styles/gamezone.css'
import ImageCard from "./ImageCard";

const gameZone= (props)=>{
    console.log(props)
    return (
        <div className="container2">
           <ImageCard value={0}/>
           <ImageCard value={3}/>
           <ImageCard value={1}/>
           <ImageCard value={4}/>
           <ImageCard value={5}/>
           <ImageCard value={6}/>
           

        </div>
    )
}
export default gameZone;