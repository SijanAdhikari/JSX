import React from "react";
import {useState} from "react";

function App() {
  const [todo,setTodo] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
      setTodo(event.target.value);
     
  }
  
  function addTodo(){
    if(todo !== ""){
    setItems(prevItems=>[...prevItems,todo]);
    setTodo("");}
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={todo} onChange={handleChange}/>
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item=>(
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
