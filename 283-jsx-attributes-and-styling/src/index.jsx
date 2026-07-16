import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className = "heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
    <div>
      <img alt="random image" src={img}></img>
      <img alt ="nepal nature" className="nature-img" src="https://i.pinimg.com/originals/c9/82/a9/c982a97e2f40645afc4c6ea3da3ad4f4.jpg" ></img>
      <img alt ="nepal nature" className="nature-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho-ctBBmKPhaDAWu01L2K-NuMN-OYY04J_Vl2iLnSRICFIbuV-HQ6bbI&s=10" ></img>
      <img alt ="nepal nature" className="nature-img" src="https://media.assettype.com/outlooktraveller/2025-05-13/p94ag8mz/Nepal?w=1024&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" ></img>
      
    </div>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
