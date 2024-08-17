## Write script to start the project
- Use the package.json to start the project.
- This is a industry standard.
- Therefore, in any new project to find the commands check the package.json and find the scripts key.
- Create two scripts `start` & `build` and write the commands.
- Updated package.json:
```
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
```
- Command (Development build and local server)
```
npm run start
```
- Command (Production build)
```
npm run build
```
- Shorthand for `npm run start` is `npm start`. This shorthand is not valid of other commands.

## Foundations
- Delete everything from App.js.
- There are React elements which are like to DOM elements but not equivalent.
- React elements are Objects while DOM elements are HTML.
- React Element:
```
React.createElement("h1", { "id": "heading"}, "Namaste React 🚀");
```
- HTML Element:
```
<h1 id="heading">Namaste React 🚀</h1>
```
- React Element > Object > HTML Element (render)
- There is a common practice to display `Not Rendered` on the HTML, in-case React code doesn't work.

## JSX
- `React.createElement` can make the code clumsy.
- To make the code clean JSX was used in React.
- JSX is seprate from React, it is not a part of React.
- Frameworks like React tries to merge all the files viz. Markup files, logic etc.

## Create heading (JSX)
- JSX is not HTML inside Javascript.
- JSX is a HTML-like or XML-like syntax.
- Command:
```
const jsxHeading = <h1>Namaste React using JSX.</h1>;
```
- Elements created using `JSX` is equivalent to elements created using `React.createElement`.
- `console.log` of `JSX` & `React.createElement`
- ![alt text](image.png)
- ![alt text](/home/ranosys/Pictures/Screenshots/namaste_react_001.png)
- file:///home/ranosys/Pictures/Screenshots/namaste_react_001.png
- Therefore, JSX is just an optimized syntax to write React elements.
- JSX is not pure javascript.
- JS Engine does not understand the JSX.
- JS Engine understands ECMAScript.
- To render JSX code, under the hood **parcel** is `transpiling` the code.
- Transpile means to convert the code before it reaches JS Engine.
- Parcel also does not do it itself. Parcel is just a manager.
- It uses a package named `Babel`.

## Babel
- JS compiler and transpiler
- `JSX` => Babel transpiles to core React i.e. `React.createElement` => ReactElement-JS Object => HTMLElement(render)
- Apart from this Babel also converts older JS code to ES6 etc.
- Read docs
- Babel reads the code one-by-one.
- It creates an AST (Abstract Syntax Tree).
- Attributes in the JSX are given in **camelCase**.
- Example:
- class in HTML element: `class="root"`
- class in JSX element: `className="root"`

## Single line vs. Multi-line JSX
- Single line JSX is valid.
- Multi line JSX require parenthesis wrapper.
- Because Babel need to understand the start and end of JSX code.

## Assignment
- Explore various attributes of various tags
- Anchor tags
- Image tag
etc.


## VSCode extensions
- Prettier
- Bracket Pair colorizer
- ES Lint
- Better comments
