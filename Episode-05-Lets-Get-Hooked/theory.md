# Part-1

## What makes React so special?
- Everything React do can be done by HTML, CSS and JS.
- React (or any other Framework) makes the development experience easy, Enables you to do more with less effort.

## Clean up the code
- It is not a good practice to put all your code in a single file.
- Recommended way is to put separate components in separate files.
- Create one main folder. (`src`)
- Create separate file for separate components.
- It is a convention to to create a main folder of Components. (`components`)
- **Note:** React doesn't have opinions about the folder structure. (https://legacy.reactjs.org/docs/faq-structure.html)
- But there are some conventions followed throughtout the industry.
  - Grouping by features or routes.
  - Grouping by file type.
  - All components together.
  - Mix of approaches.
- **Note:** Avoid too much nesting.
- Try to give the component file name with the exact name of component.
- File extensions: Some people use the js, jsx or tsx file extension. (It does not matter)
- Once you restructure, you need to update the imports.
- You need to export the components from their respective files also. (`export default Header;`)
- During import you may or may not provide file extension.
- You can do import / export anywhere in the entire app.
- **Note:** Never keep your hardcoded data (if any) in the components file.
- **Note:** Never keep your constants in the components file.
- Keep your constants in all-caps-snakecase format.
- Keep your components small.
- There are two types of exports:
  - **Default Export**
    - There will be always one `default export` in the file.
    - You cannot have multiple default exports.
    - To import, just write import like all other regular imports.
    - Example:
```
import restaurantData from ".utils/mockData";
```
  - **Named Export**
    - Is is used when multiple files are to be exported.
    - just write `export` before all the elements which you want to export.
    - To import, you need to write a curly-brases `{ CONST_NAME }` for importing.
    - These constants will be used a js code i.e. `{CDN_BASE_URL}`
```
import { CDN_BASE_URL } from ".utils/constants";
```


## Folder Structure
Steps:
1. Create a src folder.
2. Create a components folder.
3. Create a utils folder.
4. Move the constants, hardcoded data etc. inside the utils folder.
5. Update the imports & exports.
```
.
├── media
│   ├── basicWireframe.png
│   ├── foodie.me-transparent-cropped.png
│   └── foodie.me-transparent.png
└── src
│   ├── App.js
│   ├── components
│   │   ├── Body.js
│   │   ├── Dish.js
│   │   ├── Header.js
│   │   └── Restaurant.js
│   ├── index.html
│   ├── style.css
│   └── utils
│       ├── constants.js
│       └── mockData.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
```

## Can you use a default export alongwith a named export? [Homework]
- Yes, You can use these individually or together in a file depending on your needs.
- This can be useful if your module has a primary value (**default export**) and also additional related values (**named exports**).
- Example:
```
// calculations.js
export const PI = 3.14;
export function add(a, b) {
    return a + b;
}

export default function multiply(a, b) {
    return a * b;
}
```
- Importing Combined Exports:
```
// main.js
import multiply, { PI, add } from './calculations.js';

console.log(PI); // 3.14
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
```

# Part-2

## Making the site dynamic
- In this part you will learn the React concepts by creating a filter.
- Filter will show all the 'Top rated restaurants'.
- You need to create a button and attach click handlers.
- **Logic**
  - A logic which can be thought is to filter the Restaurants having `rating > 4`.
  - On click of the button we can modify the variable containing the list of restaurants.
```
// filter logic for `restaurantData`
<button
    className="top-rated-btn btn"
    onClick={
      () => {
        restaurantData = restaurantData.filter(
          restaurant => restaurant.avgRating > 4;
        );
      }
    }
    >
    Top Rated
</button>
```
- Even if the variable is updated the UI is not updated.
- What if the UI automatically gets updated when the source variable changes?
- React provides you this power.

## State Variable & React Hooks
- React solves the dynamic UI manipulation problem.
- **React keeps the data layer entact with the UI layer.**
- All other frameworks also try to solve this problem.
- React powers:
  - Efficient DOM manipulation
  - Virtual DOM
  - Diff Algorithm
  - Reconciliation
- To make it possible React provide some powers and if those powers are given to the variable holding the restaurant lists then the UI layer will be updated dynamically.
- This powerful variable is known as **State Variable**.
- For creating these state variables we use one of the **React Hooks** named `useState`.
- **Revision:**
  - **_Functional Component:_** A normal Javascript function returing JSX.
  - **_React Element:_** A plain Javascript object.
  - Similarly, **_React Hook:_** A normal Javascript function.
    - These are utility functions written by Facebook developers.
- Two major React hooks:
  - `useState()`
  - `useEffect()`
- You need to import these functions as **named imports** from the react library (`import { useSate } from "react";`)

### useState
- Used to create state variables.
- It maintains the state of the component.
- The scope of the state variable in inside the component.
- **How create a state variable using useState?**

```
// Normal JS variable
let normalVariable;

// State variable
let [stateVariable] = useState();
```
  - How to initialize a state variable?
```
// init with an empty array

// init normal js variable
let normalVariable = [];

// init state variable
let stateVariable = useState([]);


// init with null

// normal variable
let normalVariable = null;

// state variable
let [stateVariable] = useState(null);

// init with object

// normal variable
let normalVariable = {
  firstName: "John",
  lastName: "Doe"
};

// state variable
let [stateVariable] = useState({
  firstName: "John",
  lastName: "Doe"
});
```
- **Note:** The state variable must be created inside your functional component.
- **How to use a state variable?**
  - Use it just like regular variable.
- **How to modify a state variable?**
  - **Note:** You cannot modify a state variable like a normal javascript variable.
  - This only can be modified using a function (a **setter**).
  - This function shall be provided as the **second argument** while defining the state variable.
  - **Note:** The convention is use the **prefix** `set` before the state variable name, use this as second argument.

```
let [myStateVariable, setMyStateVariable] = useState({
firstName: "John",
lastName: "Doe"
});
```
  - Whenever you need to update the state variable, just call the setter function and pass the updated data.
  - Example:
```
setMyStateVariable({
  firstName: "Jane",
  lastName: "Doe"
})
```
  - Therefore, for the used case of the filter button, you can define the Restaurants in a state variable, initialize with all the data and then update the state variable on the click of the button.

```
// init state variable and its setter
const [restaurantList, setRestaurantList] = useState(restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants);

// filter on button click
<button
  className="top-rated-btn btn"
  onClick={
    () => {
      const filteredRestaurantList = restaurantList.filter(
        (restaurant) => restaurant?.info?.avgRating > 4
      )
      setRestaurantList(filteredRestaurantList);
  }
}>Top Rated</button>
```
## Render
- The act of automatically refreshing the UI as soon as the state variable changes is known as **render**.
- Whenever a state variable updates React re-renders the component.
- React keeps the state variable of the component entact with the UI.
- React keeps the data-layer in-sync with the UI-layer.
- React does this re-rendering very fast making it the most used UI library in the world.

## How React does it?
- React uses the **Reconiliation algorithm** also known as **React Fiber**. (https://github.com/acdlite/react-fiber-architecture)
- React creates a **Virtual DOM**, a representation of the actual DOM.
- The object (React Element) which is created by the React.createElement is actually a Virtual DOM.
- The Diff algorithm evaluates the difference between the actual Virtual DOM and the updated Virtual DOM.
- Once calculated, React re-renders the component as per the Diff algorithm.
- Therefore, whenever a setter function of the state variable is called this reconciliation algorithm tiggers and the Diff algorith evaluates the difference between the actual Virtual DOM and the updated Virtual DOM and then finally updates the actual DOM.
