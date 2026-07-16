// import React from "react";
// import ReactDOM from "react-dom";

// const fName = "SIJAN";
// const lName ="ADHIKARI";
// const luckyNumber = 4;

// ReactDOM.render(
//     <div>
//         <h1>Hello {fName+" "+lName}</h1>
//         <p>Your lucky number is {luckyNumber}</p>
//     </div>,
//     document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

const name = "Sijan Adhikari";
const date = new Date();

ReactDOM.render(
    <div>
        <p>
            Created by {name}.
        </p>
        <p>
            Copyright {date.getFullYear()}.
        </p>
    </div>,
    document.getElementById("root")
);
