import React from "react";
import ReactDOM from "react-dom";

const now = new Date();
const time =now.getHours();
const customColor ={
    color:"red"
}


function timeTracker(){

    if(time>=0 && time<12){
        customColor.color="red";
        return("Good morning");
    }else if(time>=12 && time<18){
        customColor.color="green";
        return("Good Afternoon");
    }else if(time>=18 && time<24){
        customColor.color="blue";
        return("Good evening");
    }else{
        return("Invalid time")}
    }

ReactDOM.render(
    <div>
        <h1 className="heading" style={customColor}>{timeTracker()}</h1>
    </div>,
    document.getElementById("root")
)