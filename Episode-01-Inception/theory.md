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
- **root.render(ReactElement)**
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

## Create nested and sibling elements in React
- To create a **nested** element, give another React element in the `children` param of `React.createElement`.
- To create **sibling** elements, give multiple React elements as an array in the `children` property of `React.createElement`.
- While creating above structure, you will get the following error (**Ignore for now**):
```
react.development.js:199 Warning: Each child in a list should have a unique "key" prop.

Check the top-level render call using <div>. See https://reactjs.org/link/warning-keys for more information.
    at h1
```

## JSX Intro
- Although React can be written in JS file (as above), it is recommended to write in JSX.
- It is a file format which React prefers to avoid the mess while manipulating DOM.
- Complex the structure gets, complex the JS code becomes.
- But it is feasible to write React code is a JS file.

---
# Homework

## #1 How does Browser understand the JS commands?
- The **Javascript Engine** is responsible to handle the Javascript code.
- Different browsers have different JS Engines. For example, The name of the Google Chrome browsers Javascript Engine is **V8**.
> V8 is also the main engine for Node.js

**Steps:**
1. **Browser Downloads the JS File**
  - When you visit a website using any browser, your browser makes an HTTP GET request
  - HTML is loaded
  - Browser sees `<script>`
  - Browser makes a separate request to load the script.
  - Browser receives JS source text from the server. (it’s just plain text)
2. **Parsing (Understanding the Code Structure) - `Text > Tokens > AST`**
  - JS Engine **(V8)** reads the text
  - It breaks it into tokens (Keywords, Variables, Symbols) aka Tokenization
  - The engine walks through the code character by character and word by word to classify each of them
  - The engine builds scope chain metadata for variables
  - Builds an **Abstract Syntax Tree (AST)**
  - ```
    # Syntax
    let x = 5 + 3;

    # AST
    Assignment
     ├── x
     └── Addition
           ├── 5
           └── 3
    ```
3. **Convert AST to Bytecode**
  - V8 converts AST into bytecode.
  - Bytecode is:
    - Not CPU code
    - Not human readable
    - Instructions for V8 interpreter (called **Ignition**)
4. **Interpreter executes Bytecode**
  - V8's interpreter Ignition runs the bytecode
  - Code starts executing (but not yet highly optimized)
5. **V8 Watches Which Code Runs Frequently**
  - V8 monitors:
    - Functions called many times
    - Loops running repeatedly
  - Identifies these code parts as **Hot code**
> **Step 4 + Step 5 = Profiling**
> - Profiling is the monitoring process happening while the interpreter executes the code. 
> - Profiling means the Engine collecting runtime feedback like:
>   - How many times a function is called
>   - How many times a loop runs
>   - What types variables usually have
>   - Whether object shapes stay stable
>   - Which code paths are frequent
>   - Type feedback is collected at important execution points like function calls, property accesses (`obj.x`), and operators (`a+b`), comparisons (inline cache style feedback)
> - In V8
>   - Interpreter (Ignition) executes the bytecode
>   - At the same time, it records above statistics
>   - This feedback is stored in **feedback vectors**
> - **Profiling is not a separate step after execution. It is embedded inside execution.**

6. **Optimization**
  - **Turbofan** is the **optimization compiler** inside V8.
  - Optimization Compiler compiles Hot Code
  - Analyzes the runtime feedback collected by Interpreter (Ignition)
  - Takes the bytecode
  - Starts to optimize the functions (hot code), Assumes stable types (as previously analyzed variable types etc.)
  - Generate optimized **Machine Code**
  - Sends it directly to CPU
  - CPU executes directly
  - It increases speed significantly 🚀
  - ```
    # High frequency function
    for (let i = 0; i < 1_000_000; i++) {
       add(2, 3);
    }

    # add() becomes hot
    ```
7. **Deoptimization**
  - If assumptions break ➡️ the optimization becomes invalid ➡️ Deoptimization
  - Like object shape changes or function call types change
  - For example, previously many times, `add()` function added two integers like `add(2, 3)` and later it added a string to an integer like `add(2, "hello")`. The types changed, assumptions break, optimizations becomes invalid.
  - V8:
    - throws away the optimized machine code
    - falls back to interpreter
    - May re-optimize later
    - This is called **speculative optimization**
     
       
      


## What are CDN?
## What is crossorigin? (Used inside script tag)
## What happens if multiple render are there? (experiment)
## What happens to elements above & below the target div? (experiment)
- It can be applied to a small portion of the page.
## Can import script tags be moved in head tag of elements?
## What is difference between development and production level CDN links?
## What is the difference between a Framework and a library?

