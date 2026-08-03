import React from "react";
import {useState} from "react";

function App() {
const [buttonColor, setButtonColor] = useState("white");
const [name, setName] =useState("");
const [headingText, setHeadingText] = useState("Hello");
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" value={name} onChange={(event)=>setName(event.target.value)}/>
      <button style={{backgroundColor:buttonColor}} onMouseOver={()=>setButtonColor("black")} onMouseOut={()=>setButtonColor("white")} onClick={()=>{
            setHeadingText(name)
        }}>Submit</button>
    </div>
  );
}

export default App;
