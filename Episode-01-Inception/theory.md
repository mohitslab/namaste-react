# How Does Browser understand the JS commands?
# What are CDN?
# What is crossorigin? (Used inside script tag)
# Why React has two files React & React-DOM?
- React.js has the core code of the React.
- React-DOM has code for performing DOM operations i.e. to modify DOM.
- Why not club both in single file?
    - Because React is used in many devices.
    - As device change the ReactDOM should change.
    - The Core React functions like `createElement` are part of *React* library.
    - The DOM manipulation functions are `createRoot` are part of *ReactDOM* library.
## React.createElement(type, props, children)
- `createElement` function takes 3 params viz. *type*, *props* and *children*.
## ReactDOM.createRoot(container, options)
