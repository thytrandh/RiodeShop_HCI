import React from "react";
import "../../../assets/css/product.css";
// import "../css/owl.theme.default.min.css";
// import "../css/owl.theme.default.min.css";
import "../../../assets/css/style.css";
import "../../../assets/css/reset.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  addToCart,
  increment,
  decrement,
  addCart,
  listOrder,
} from "../../../redux/slice/Cart/cartSlice";
const Products = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.count);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  // const handleAddToCart = (product) => {
  //   const productCart = {
  //     productId: product.id,
  //     quantity: count,
  //   };
  //   if (token) {
  //     dispatch(addCart(productCart));
  //   } else {
  //     dispatch(addToCart(product));
  //   }
  // };
  const [active, setActive] = useState("description");

  return (
    <div className="mx-5">
      <div data-id="" className="product-id render-info-product">
        <div className="container flex">
          <div className="product-img flex">
            <div className="product-img-list flex-column j-between">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="img-widget-01 drop-shadow-lg "
              />
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="img-widget-02 drop-shadow-lg "
              />
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="img-widget-03 drop-shadow-lg "
              />
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="img-widget-04 drop-shadow-lg "
              />
            </div>
            <div className="product-img-slider drop-shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="img-widget-01 "
              />
            </div>
          </div>
          <Fade clear duration={1500}>
            <div className="product-info">
              <p className="product-navigation">
                <i className="fal fa-home-alt"></i> Home {">"} Products {">"}
                <span className="ctgry">Dresses</span> {">"}
                <span className="name-prod">
                  Solid pattern in fashion summer dress
                </span>
              </p>
              <div className="product-info-content">
                <div className="product-title text-2xl font-semibold">
                  Solid pattern in fashion summer dress
                </div>
                <div className="product-meta">
                  <span className="sku-wrapper">
                    SKU:
                    <span className="sku ml-2">987612347</span>
                  </span>
                  <span className="posted_in">
                    CATEGORY:
                    <a className="posted_in_text ml-2" href="/">
                      Fashionable Women's
                    </a>
                  </span>
                </div>

                <p className="range-price">$140.00 – $340.00</p>

                <div className="product-rating flex a-center">
                  <div className="star-rating">
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="rating">( 3 Reviews )</span>
                </div>

                <div className="product-details">
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus
                    liberpuro ate vol faucibus adipiscing.
                  </p>
                </div>

                <table className="variations">
                  <tr className="product-color flex a-center j-between">
                    <th className="label">Color: </th>
                    <th>
                      <div className="el-color"></div>
                    </th>
                  </tr>
                  <tr className="product-size flex a-center j-between">
                    <th className="label">Size: </th>
                    <th>
                      <div className="el-size"></div>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <button className="btn-clean">Clean All</button>
                    </th>
                  </tr>
                </table>

                <p className="price">
                  $<span className="into-price">340</span>.00
                </p>

                <div className="varication-add-to-cart flex a-center">
                  <div className="quanity flex a-center rounded-xl">
                    <button
                      className="quanity-minus w-10"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <div className="mx-4 w-8 text-center">{count}</div>
                    <button
                      className="quanity-plus w-10"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                  <button className="btn-add-to-cart btn-add-cart flex a-center">
                    <i className="fal fa-shopping-bag"></i>
                    <div>Add to cart</div>
                  </button>
                </div>

                <div className="footer-popup flex a-center">
                  <ul className="contact flex a-center">
                    <li>
                      <a href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="divider"></div>
                  <div className="wishlist flex a-center">
                    <a href="">
                      <i className="fal fa-heart"></i>
                    </a>
                    <p>Add to wishlist</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="detailed-product-description-tabs">
        <div className="container">
          <nav className="tabs">
            <ul className="flex a-center j-between">
              <li
                className={`description ${
                  active === "description" ? "active" : ""
                }`}
                onClick={() => setActive("description")}
              >
                Description
              </li>
              <li
                className={`additional-infomation ${
                  active === "add-info" ? "active" : ""
                }`}
                onClick={() => setActive("add-info")}
              >
                Additional infomation
              </li>
              <li
                className={`size-guide ${
                  active === "size-guide" ? "active" : ""
                }`}
                onClick={() => setActive("size-guide")}
              >
                Size Guide
              </li>
              <li
                className={`review ${active === "review" ? "active" : ""}`}
                onClick={() => setActive("review")}
              >
                Review (2)
              </li>
            </ul>
          </nav>
          <div className="detailed-product-box render-detailed-product-box mb-10">
            {active === "description" && (
              <Fade top distance="10%" duration={1500}>
                <div className="detailed-description flex j-between gap-20">
                  <div className="description-content">
                    <div className="features">
                      <h5>Features</h5>
                      <p>
                        Praesent id enim sit amet.Tdio vulputate eleifend in in
                        tortor. ellus massa. siti iMassa ristique sit amet
                        condim vel, facilisis quimequistiqutiqu amet condim
                        Dilisis Facilisis quis sapien. Praesent id enim sit
                        amet.
                      </p>
                      <ul className="list-type-check">
                        <li>
                          <i className="far fa-check"></i>Praesent id enim sit
                          amet.Tdio vulputate
                        </li>
                        <li>
                          <i className="far fa-check"></i>Eleifend in in tortor.
                          ellus massa.Dristique sitii
                        </li>
                        <li>
                          <i className="far fa-check"></i>Massa ristique sit
                          amet condim vel
                        </li>
                        <li>
                          <i className="far fa-check"></i>Dilisis Facilisis quis
                          sapien. Praesent id enim sit amet
                        </li>
                      </ul>
                    </div>
                    <div className="specifications">
                      <h5>Specifications</h5>
                      <table>
                        <tr>
                          <th>Material</th>
                          <td>Praesent id enim sit amet.Tdio</td>
                        </tr>
                        <tr>
                          <th>Claimed Size</th>
                          <td>Praesent id enim sit</td>
                        </tr>
                        <tr>
                          <th>Recommended Use</th>
                          <td>
                            Praesent id enim sit amet.Tdio vulputate eleifend in
                            in tortor. ellus massa. siti
                          </td>
                        </tr>
                        <tr>
                          <th>Manufacturer</th>
                          <td>Praesent id enim</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="description-video">
                    {/* <h5>Video Description</h5>
                <div className="features-img">
                  <img src="images/Video/img.jpg" alt="" />
                  <button className="btn-play-video">
                    <i className="fal fa-play"></i>
                  </button>
                </div> */}
                    <div className="warranty-shipping-box a-center ">
                      <div className="icon-box flex a-center mb-5">
                        <button className="btn-click btn-lock flex">
                          <i className="fal fa-lock-alt"></i>
                        </button>
                        <div className="content">
                          <h4>2 year warranty</h4>
                          <p>Guarantee with no doubt</p>
                        </div>
                      </div>
                      <div className="icon-box flex a-center">
                        <button className="btn-click btn-truck flex">
                          <i className="fal fa-truck-moving"></i>
                        </button>
                        <div className="content">
                          <h4>Free shipping</h4>
                          <p>On orders over $50.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            )}
            {active === "add-info" && (
              <Fade
                top
                distance="10%"
                duration={1500}
                className="detailed-additional-information"
              >
                <div>
                  <div className="grid grid-cols-8 gap-5 mb-3">
                    <p className="font-bold">Size</p>
                    <div className="col-span-7">Large, Medium, Small</div>
                  </div>
                  <div className="grid grid-cols-8 gap-5 mb-3">
                    <p className="font-bold">Color:</p>
                    <div className="col-span-7">Blue, Green</div>
                  </div>
                  <div className="grid grid-cols-8 gap-5 mb-3">
                    <p className="font-bold">Brands:</p>
                    <div className="col-span-7">SLS</div>
                  </div>
                </div>
              </Fade>
            )}
            {active === "size-guide" && (
              <Fade
                top
                distance="10%"
                duration={1500}
                className="detailed-size-guide flex a-center j-between"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0399/0231/4646/files/sassafras-fashion-1639565960817_600x600.png?v=1657862521"
                  alt="aaaa"
                  className="img-01 w-full"
                />
                {/* <img
                src="https://cdn.shopify.com/s/files/1/1357/0471/files/Size_Chart_IN_.001.jpg?v=1591334889"
                alt="aa"
                className="img-02"
              /> */}
              </Fade>
            )}

            <div className="detailed-review"></div>
          </div>
        </div>
      </div>

      <Fade top distance="10%" duration={1500} className="related-products">
        <div className="container w-[90%]">
          <h2 className="main-title animateFadeFromBottom">
            <span className="text-3xl text-center font-bold text-slate-900 items-center">
              Related Products
            </span>
          </h2>
          <div className="grid grid-cols-5 gap-5 h-72 place-items-center my-7">
            <div className="h-full w-full">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="w-full h-56 rounded-sm drop-shadow-lg"
              ></img>
              <div className="font-semibold w-[90%] text-slate-700 text-center text-sm pt-2 mx-auto">
                Solid pattern in fashion
              </div>
              <p className="font-bold text-center text-slate-900">$ 140.00</p>
            </div>
            <div className="h-full w-full">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="w-full h-56 rounded-sm drop-shadow-lg"
              ></img>
              <div className="font-semibold w-[90%] text-slate-700 text-center text-sm pt-2 mx-auto">
                Solid pattern in fashion
              </div>
              <p className="font-bold text-center text-slate-900">$ 140.00</p>
            </div>
            <div className="h-full w-full">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="w-full h-56 rounded-sm drop-shadow-lg"
              ></img>
              <div className="font-semibold w-[90%] text-slate-700 text-center text-sm pt-2 mx-auto">
                Solid pattern in fashion
              </div>
              <p className="font-bold text-center text-slate-900">$ 140.00</p>
            </div>
            <div className="h-full w-full">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="w-full h-56 rounded-sm drop-shadow-lg"
              ></img>
              <div className="font-semibold w-[90%] text-slate-700 text-center text-sm pt-2 mx-auto">
                Solid pattern in fashion
              </div>
              <p className="font-bold text-center text-slate-900">$ 140.00</p>
            </div>
            <div className="h-full w-full">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="w-full h-56 rounded-sm drop-shadow-lg"
              ></img>
              <div className="font-semibold w-[90%] text-slate-700 text-center text-sm pt-2 mx-auto">
                Solid pattern in fashion
              </div>
              <p className="font-bold text-center text-slate-900">$ 140.00</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Products;
