import "../Header/Header.scss";
import Logo from "../../../components/UI/Logo/Logo";
import MenuNavigate from "./MenuNavigate/MenuNavigate";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "../../../settings/constant";

const Header = () => {
  return (
    <div class="slider-header container">
      <div className="left">
        <Logo />
        <MenuNavigate />
      </div>
      <div className="right">
        <div className="user-menu menu-right">
          <div className="box">
            <Link to={LOGIN_PAGE} replace={true}>
              <div className="item-user mr-4">
                <i class="fal fa-user"></i>
              </div>
            </Link>
            <div className="item-like mr-4">
              <i class="fal fa-heart"></i>
            </div>
          </div>
          <div className="box">
            <div className="division mr-4"></div>
            <div className="item-cart mr-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
