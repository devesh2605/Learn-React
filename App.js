import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">I am H1 heading using JSX</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);