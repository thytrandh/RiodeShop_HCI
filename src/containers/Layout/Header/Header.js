import "../Header/Header.scss";
import Logo from "../../../components/UI/Logo/Logo";
import MenuNavigate from "./MenuNavigate/MenuNavigate";
import { Link } from "react-router-dom";
import { LOGIN_PAGE, CART_PAGE } from "../../../settings/constant";
import SearchBar from "./MenuNavigate/SearchBar/SearchBar";

const Header = () => {
  return (
    <div class="slider-header">
      <Logo imgLogo={"/images/logoSecond.png"} />
      <MenuNavigate />

      <div className="user-menu menu-right">
        <div className="box">
          <div className="item-searchbar mr-3">
            <SearchBar />
          </div>
          <Link to={LOGIN_PAGE} replace={true}>
            <div className="item-user mr-3">
              <i class="fal fa-user"></i>
            </div>
          </Link>
          {/* <div className="item-like mr-4">
            <i class="fal fa-heart"></i>
          </div> */}
        </div>
        <div className="box">
          <div className="division mr-3"></div>
          <Link to={CART_PAGE} replace={true} className="item-cart">
            <div className="content mr-3">
              <p className="title mb-0">Shopping Cart:</p>
              <h5 className="mb-0 total">$0.00</h5>
            </div>
            <div className="btn-cart-dropdown">
              <i class="fal fa-shopping-bag"></i>
              <div className="badge">
                <div className="badge-total">
                  <p className="mb-0">0</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
