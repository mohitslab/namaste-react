import React from "react";
import ReactDOM from "react-dom/client";

// React Component
const HeadingComponent = () => {
    return <h1 id="heading">Namaste React Functional Component 🚀</h1>;
};

// Title Component
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

// Test Component (not rendered because incorect name)
const test = () => {
    return <h2 className="test" id="test">I am a test Component. I have a return statement.</h2>
}

// Component Composition
const ComponentComposition = () => (
    <div id="container">
        <Title />
        <test/>
        <h1 className="heading">Namaste React Component Composition 🚀</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ComponentComposition />);
