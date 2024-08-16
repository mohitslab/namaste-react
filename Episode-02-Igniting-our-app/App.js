import React from "react";
import ReactDOM from "react-dom/client";
// nested elements

/**
 * <div id="parent1">
 *     <div id="child1">
 *         <h1>I'm an h1 tag.</h1>
 *     </div>
 * </div>
 */
const parent = React.createElement(
    "div",
    { id: "parent1" },
    React.createElement(
        "div",
        { id: "child1" },
        React.createElement(
            "h1",
            {},
            "I'm an h1 tag."
        )
    )
);

// sibling elements

/**
 * <div id="parent">
 *     <div id="child1">
 *         <h1>I'm an h1 tag of 'child1' div.</h1>
 *         <h2>I'm an h2 tag of 'child1' div.</h2>
 *     </div>
 *     <div id="child2">
 *         <h1>I'm an h1 tag of child2 div.</h1>
 *         <h2>I'm an h2 tag of child2 div.</h2>
 *     </div>
 * </div>
 */
const parentWithSiblings = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement(
                    "h1",
                    {},
                    "Hey there, I'm an h1 tag of 'child1' div."
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm an h2 tag of 'child1' div."
                )
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement(
                    "h1",
                    {},
                    "I'm an h1 tag of child2 div."
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm an h2 tag of child2 div."
                )
            ]
        )
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  // firstly this will render
root.render(parentWithSiblings);  // this will immediately override above