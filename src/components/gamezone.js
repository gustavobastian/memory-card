
import {useEffect,useReducer,useState} from "react";
import '../styles/gamezone.css'
import ImageCard from "./ImageCard";



const GameZone= (props)=>{    

    const [state,setState]=useState(props.value);
    const [ignored,forceupdate]=useReducer(x=>x+1,0)
    const [value,setValue]=useState(0)
    const [count,setCount]=useState(props.rating)

    const handlerClick=(e)=>{     

        if(value!=parseInt(e)){
            setCount(count+1);
            props.setRate();
        }
        else{
            setCount(0);
            props.resetRate();
        }
        

        setValue(e)
        let shuffled = state.sort(() => Math.random() - 0.5);
        setState(shuffled);                
        forceupdate();
        
    }


    useEffect(()=>{
        console.log("inside useEffect");        
    },[setState]);

    return (
        <div className="container2">
           {state.map((i)=>{
            return (<ImageCard id={i} handlerClick={(event)=>{handlerClick(event)}} value={i}/>)
           })}

        </div>
    )
}
export default GameZone;