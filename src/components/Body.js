import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

// import components
import Dish from "./Dish";
import Restaurant from "./Restaurant";

// import data
import { apiResponse } from "../utils/mockData";

library.add(faCircleArrowLeft, faCircleArrowRight);

// data from API
const foodData = apiResponse.data.cards[0];
const restaurantData = apiResponse.data.cards[3];

const Body = () => {
    return (
        <div className="body-container">
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
                {foodData?.card?.card?.gridElements.infoWithStyle.info.map(
                    dish => <Dish dishInfo={dish} key={dish?.id} />
                )}
            </div>
            <div className="restaurant-container-info">
                <h2>Top restaurants in the city</h2>
            </div>
            <div className="restaurant-container">
                {restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
                    restaurant => <Restaurant restaurantInfo={restaurant} key={restaurant?.info?.id} />
                )};
            </div>
        </div>
    )
}

export default Body;
