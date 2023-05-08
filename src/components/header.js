
import {useEffect,useState} from "react";
import '../styles/header.css'
const myHeader= (props)=>{
    console.log(props)
    return (
        <div className="container">
            <div className="leftHeader">Memory Card Game</div>
            <div className="rightHeader">
                <div className="currentScore">CurrentScore:1</div>
                <div className="maxScore">MaxScore:20</div>
            </div>
        </div>
    )
}
export default myHeader;