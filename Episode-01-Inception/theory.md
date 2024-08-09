# Notes:

## Why React has two files React & React-DOM?
- React.js has the core code of the React.
- React-DOM has code for performing DOM operations i.e. to modify DOM.
- Why not club both in single file?
    - Because React is used in many devices.
    - As device change the ReactDOM should change.
    - The Core React functions like `createElement` are part of *React* library.
    - The DOM manipulation functions are `createRoot` are part of *ReactDOM* library.

## React.createElement(type, attrs, children)
- `createElement` function takes 3 params viz. **type**, **attrs** and **children**.
- **type**
    - It defines the type of element e.g. h1, div etc.
- **attrs**
    - It defines the attributes of the tag which you have defined in the **type** parameter.
    - E.g. {id: :"heading"}
- **children**
    - It defines the children for this tag i.e. what should inside the tag. It could be a text or even other tags.
- **Returns**
    - It returns a React Element which is nothing but a Javascript Object.
    - It **does not** return an HTML element.
    - _Try to print it using `console.log`._
    - This Object has an attribute named `props` which contain **_children + attributes_**.

## ReactDOM.createRoot(container, options)

## Render Element
- Note: The DOM manipulation is one of the most costly operation.
- E.g. Add or remove a node from the DOM tree.
- Every Javscript library including **React** tries to improve the DOM manipulation.
- React does the DOM manipulation using the `render()` method of the **ReactDOM**.
- root.render(ReactElement)
    - It takes the ReactElement
    - Convert it to a DOM Element.
    - Put in on the DOM.

## Proper way of writing React code
- Instead of writing React code in script tag of the html.

```
<script>
    const heading = React.createElement("h1", {}, "Hello World from React!");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);
</script>
```
- Write the code in a separate file E.g. `App.js`.
- Include the JS file in the html.


# Homework

## How does Browser understand the JS commands?
## What are CDN?
## What is crossorigin? (Used inside script tag)
