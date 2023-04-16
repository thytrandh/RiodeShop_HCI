import { Link } from "react-router-dom";
import {
  CATEGORIES_PAGE,
  HOME_PAGE,
  MY_ACCOUNT_PAGE,
  PRODUCTS_PAGE,
} from "../../../../../settings/constant";
import "../Menu/Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="mb-0 pl-0">
        <li className="item-navigate">
          <Link to={HOME_PAGE} replace={false}>
            <p className="mb-0">HOME</p>
          </Link>
        </li>
        <li className="item-navigate item-menu-dropdown">
          <div className="title">
            <Link to={CATEGORIES_PAGE} replace={false}>
              <p className="mb-0">CATEGORIES</p>
            </Link>
            <i class="fa-light fa-chevron-down"></i>
          </div>
          <div className="box-dropdown width-13">
            <div className="row-dropdown">
              <div className="column">
                <ul className="mb-0">
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Shoses</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Bags</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Accesories</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Clothing</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="item-navigate item-menu-dropdown">
          <div className="title">
            <Link to={PRODUCTS_PAGE} replace={false}>
              <p className="mb-0">PRODUCTS</p>
            </Link>
            <i class="fa-light fa-chevron-down"></i>
          </div>
          <div className="box-dropdown width-48">
            <div className="row-dropdown">
              <div className="column mr-3">
                <ul className="mb-0">
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0 title">Shoses</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Sneaker</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Boots</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">High Heels</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column mr-3">
                <ul className="mb-0">
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0 title">Bags</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Backpacks</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Fashion Bags</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Wallet</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column mr-3">
                <ul className="mb-0">
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0 title">Accesoriess</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Watches</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Glasses</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column mr-3">
                <ul className="mb-0">
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0 title">Clothing</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Tops</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Bottoms</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Jackets</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={CATEGORIES_PAGE} replace={false}>
                      <p className="mb-0">Dresses</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column ml-4">
                <div className="banner-advertise">
                  <img src="/images/bg-menu.jpg" alt="" />
                  <div className="content">
                    <h1 className="mb-1">Sale.</h1>
                    <div className="d-flex">
                      <p className="mb-0">UP TO</p>
                      <h2 className="mb-0">70% Off</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="item-navigate">
          <Link to={MY_ACCOUNT_PAGE} replace={false}>
            <p className="mb-0">MY ACCOUNT</p>
          </Link>
        </li>
        <li className="item-navigate">
          <Link to={MY_ACCOUNT_PAGE} replace={false}>
            <p className="mb-0">CONTACT</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
