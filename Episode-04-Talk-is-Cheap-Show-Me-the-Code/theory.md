## Steps to build a production ready app
- First step to build any application should be **Planning**.
- Planning is important and mandatory.
- Step 1: Create rough mockups or wireframe
    - Mockups are rough sketches which show a basic layout of your app.
    - Purpose of wireframe is to know the exact placement of components before starting to code.
- Step 2: Once basic wireframe is ready, try to identify components which should be created to build the proposed wireframe.
    - Generally there will be major 3 components viz. Header, Body and Footer.
    - Everything will be inside either of these three components.
- Components:
    - App
        - Header
            - Logo
            - CustomerLocation
            - Search
            - NavBar
                - NavItems
                - UserIcon
                - Cart
        - Body
            - DishIntro
            - DishContainer
                - DishCard
            - RestaurantIntro
            - RestaurantContainer
                - RestaurantCard
        - Footer
            - MiniLogo
            - Copyright
            - Address
            - ContactUs
            - ServiceLocations
- Mockup
![planning and basic wireframe](../basicWireframe.png)
- We need to create the various components and use the Component composition to structure the app.
- You can give style to components by targeting classes of the components or you can also use inline style tag.
    - The inline style tag expects a javascript object.
    - Provide inline css in an attribute named **style**.
    - You need to give double-curly-brases.
    - The outer curly brases indicates that a Javascript code is expected.
    - Inner curly brases indicates the actual JSON.
    - **Note:** Inline styles are not recommended.
    - Example:
```
const RestaurantCard = () => {
    return (
        <div className="restaurant-card" style={ {
            backgroundColor: "#ddd"
        } }></div>
    );
}
```
