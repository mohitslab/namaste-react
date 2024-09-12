## What makes React so special?
- Everything React do can be done by HTML, CSS and JS.
- React makes the development experience easy, Enables you to do more with less effort.

## Clean up the code
- It is not a good practice to put all your code in a single file.
- Recommended way is to put separate components in separate files.
- Create one main folder. (`src`)
- Create separate file for separate components.
- It is a convention to to create a main folder of Components. (`components`)
- **Note:** React doesn't have opinions about the folder structure.
- But there are some conventions followed throughtout the industry.
  - Grouping by features or routes.
  - Grouping by file type.
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
- Steps"
  1. Create a src folder.
  2. Create a components folder.
  3. Create a utils folder.
  4. Move the constants, hardcoded data etc. inside the utils folder.
  5. Update the imports & exports.

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

## React Hooks
- 

