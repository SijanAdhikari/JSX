import React from "react";
import {useState} from "react";

function App() {
  setInterval(currTime, 1000);
  
  const [currentTime, setTime] = useState("");


  function currTime(){
    let time = new Date().toLocaleTimeString();
    console.log(time);
    setTime(time);
  }
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={currTime} >Get Time</button>
    </div>
  );
}

export default App;
