import { CDN_BASE_URL } from "../utils/constants";

const Dish = (props) => {
    const { dishInfo } = props;

    // destructure data
    const { imageId } = dishInfo;

    return (
        <div className="dish">
            <img src={CDN_BASE_URL + imageId} />
        </div>)
}

export default Dish;
