
import {useEffect,useState} from "react";
import '../styles/imageCard.css'

const names=["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"]

const ImageCard= (props)=>{   
    
    let value=parseInt(props.value);
    
    const handlerClick=(i)=>{        
        
        props.handlerClick(i)
    }

    return (
        <div className="imageHolder" onClick={handlerClick.bind(this,value)}>
            <p>{names[value]}</p>
           <img src={require("../img/fig_"+value+".jpg")} alt="not found">           
           </img>
           
        </div>
    )
}
export default ImageCard;