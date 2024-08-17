import React from "react";
import ReactDOM from "react-dom/client";

// heading using core React
const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");
console.log("heading");
console.log(heading);

// heading using JSX
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;
console.log("jsxHeading");
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
