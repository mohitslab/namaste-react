import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { CDN_BASE_URL } from "../utils/constants";

library.add(faStar);


const Restaurant = (props) => {
    const { restaurantInfo } = props;

    // destructure data
    const {
        name,
        avgRating,
        sla,
        cuisines,
        locality,
        cloudinaryImageId
    } = restaurantInfo?.info;

    return (
        <div className="restaurant">
            <div className="restaurant-image-container">
                <img src={CDN_BASE_URL + cloudinaryImageId} />
            </div>
            <div className="restaurant-info">
                <p><strong>{name}</strong></p>
                <span className="star-and-timing"><FontAwesomeIcon icon={faStar} className="star" /><strong>{avgRating} | {sla.slaString}</strong></span>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}</p>
            </div>
        </div>)
}

export default Restaurant;
