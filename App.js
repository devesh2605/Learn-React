import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1 id="heading">I am H1 heading using JSX</h1>;
console.log(jsxHeading);

const Title = () => {
    return <h1 className="heading">React Title</h1>
};

// React Functional Component - A function that returns React Element
// Component composition
// Pass the React Element inside the Functional Component -> {jsxHeading}
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}
        {jsxHeading}
        <h1 className="heading">React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<HeadingComponent />)