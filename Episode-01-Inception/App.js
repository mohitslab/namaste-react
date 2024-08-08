const heading = React.createElement(
    "h1",
    {
        id: "heading",
        "data-test": "test123"
    },
    "Hello World! from React..."
);

/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *   </div>
 * </div>
 */
// const parent = React.createElement(
//     "div",
//     {
//         id: "parent"
//     },
//     React.createElement(
//         "div",
//         {
//             id: "child"
//         },
//         React.createElement(
//             "h1",
//             {
//                 id: "heading1"
//             },
//             "I am an h1 tag"
//         )
//     )
// );

/**
 * <div id="parent1">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h3 tag</h1>
 *     <h2>I am an h4 tag</h2>
 *   </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    {
        id: "parent"
    },
    [
        React.createElement(
            "div",
            {
                id: "child1"
            },
            [
                React.createElement(
                    "h1",
                    {
                        id: "heading1"
                    },
                    "I am an h1 tag"
                ),
                React.createElement(
                    "h2",
                    {
                        id: "heading2"
                    },
                    "I am an h2 tag"
                )
            ]
        ),
        React.createElement(
            "div",
            {
                id: "child2"
            },
            [
                React.createElement(
                    "h3",
                    {
                        id: "heading1"
                    },
                    "I am an h3 tag"
                ),
                React.createElement(
                    "h4",
                    {
                        id: "heading2"
                    },
                    "I am an h4 tag"
                )
            ]
        )
    ]
);

// console.log(heading);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
