import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../media/foodie.me-transparent-cropped.png";

library.add(faUser, faShoppingCart);


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

export default Header;
