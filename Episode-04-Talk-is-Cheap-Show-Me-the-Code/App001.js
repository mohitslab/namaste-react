import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSearch, faCircleArrowLeft, faCircleArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import logo from "./foodie.me-transparent-cropped.png"

library.add(faUser, faShoppingCart, faCircleArrowLeft, faCircleArrowRight, faStar);


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container navbar-left">
                <img className="logo" src={logo} />
            </div>
            <div className="search navbar-center">
                <div className="search-container">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <input type="text" className="search-box" placeholder="Search" />
                </div>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>About Us</li>
                    <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                    <li><FontAwesomeIcon icon={faUser} /></li>
                </ul>
            </div>
        </div>
    )
}

const Dish = () => {
    return (
        <div className="dish">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png" />
        </div>)
}

const Restaurant = () => {
    return (
        <div className="restaurant">
            <div className="restaurant-image-container">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/d11dfc30-3b77-4f98-bcb6-42e5032d7d59_528813.JPG" />
            </div>
            <div className="restaurant-info">
                <p><strong>Bakingo</strong></p>
                <span className="star-and-timing"><FontAwesomeIcon icon={faStar} className="star" /><strong>4.7 | 15-20 mins</strong></span>
                <p>Bakery, Desserts, Beverages, Snacks</p>
                <p>Mansarovar</p>
            </div>
        </div>)
}

const Body = () => {
    return <div className="body-container">
        <div className="dish-container-heading">
            <div className="dish-container-info">
                <h2>Dear, What do you wanna try today?</h2>
            </div>
            <div className="dish-container-silder-arrow">
                <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" />
                <FontAwesomeIcon icon={faCircleArrowRight} size="2xl" />
            </div>
        </div>
        <div className="dish-container">
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
        </div>
        <div className="restaurant-container-info">
            <h2>Top restaurants in the city</h2>
        </div>
        <div className="restaurant-container">
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
        </div>
    </div>
}
const AppLayout = () => {
    return <div className="app">
        {/* Header */}
        <Header />
        <Body />
        {/* Footer */}
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
