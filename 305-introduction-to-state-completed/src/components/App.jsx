import React from "react";

var isDone = true ;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

//  THIS DOESN'T WORK SINCE STATE IS NOT HOOKED ON THE CHANGES MADE SO WE NEED HOOKS TO CAPTURE THE STATE .

export default App;
