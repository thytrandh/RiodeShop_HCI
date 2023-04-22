import { useState } from "react";
import "../Categories/Categories.scss";
import ItemCategories from "../../../components/Home/ItemCategories/ItemCategories";
import ItemFilterCategories from "./FilterProduct/ItemFilterCategories/ItemFilterCategories";
import ItemFilterSize from "./FilterProduct/ItemFilterSize/ItemFilterSize";
import ItemFilterPrice from "./FilterProduct/ItemFilterPrice/ItemFilterPrice";
import AdvertisingDiscountJacket from "../../../components/Advertising/AdvertisingDiscountJacket/AdvertisingDiscountJacket";
import ItemProduct from "../../../components/Product/ItemProduct/ItemProduct";

const Categories = () => {
  const listImgUrl = [
    "/images/product-test/01/item-product-1.jpg",
    "/images/product-test/01/item-product-2.jpg",
  ];

  const listImgUrl2 = [
    "/images/product-test/02/img-01.jpg",
    "/images/product-test/02/img-02.jpg",
  ];
  const listImgUrl3 = [
    "/images/product-test/03/img-01.jpg",
    "/images/product-test/03/img-02.jpg",
  ];
  const listImgUrl4 = [
    "/images/product-test/04/img-01.jpg",
    "/images/product-test/04/img-02.jpg",
  ];

  const listImgUrl5 = [
    "/images/item-product-1.jpg",
    "/images/item-product-2.jpg",
  ];

  const discount = 30;
  const productName = "Fashion Sports Bag";
  const price = "$99.00";
  const rate = 3;
  const diverse = true;

  return (
    <div className="categories-page">
      <div className="top-banner">
        <div className="img-banner">
          <img src="/images/page-categories/top-banner/img-01.jpg" alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h2>RIODE SHOP</h2>
          </div>
          <div className="categories">
            <p className="mb-0">CATEGORIES</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0 p-0 body-content container">
          <div className="left slider-bar col-lg-3">
            <div className="path">
              <i class="fa-regular fa-house-blank mr-2"></i>
              <i class="fa-solid fa-chevron-right mr-2"></i>
              <p className="mb-0 title mr-2">Riode Shop</p>
              <i class="fa-solid fa-chevron-right mr-2"></i>
              <p className="mb-0 categories mr-2">Categories</p>
            </div>
            <div className="filter-product">
              <ItemFilterCategories />
              <ItemFilterPrice />
              <ItemFilterSize />
            </div>
            <div className="list-product-recommend">
              <div className="title">
                <p className="mb-0">Recommend</p>
              </div>
              <div className="list-product mt-4">
                <ItemProduct
                  listImgUrl={listImgUrl}
                  discount={discount}
                  productName={productName}
                  price={price}
                  rate={rate}
                  diverseProduct={false}
                />
                <ItemProduct
                  listImgUrl={listImgUrl2}
                  discount={discount}
                  productName={productName}
                  price={price}
                  rate={rate}
                  diverseProduct={false}
                />
                <ItemProduct
                  listImgUrl={listImgUrl3}
                  discount={discount}
                  productName={productName}
                  price={price}
                  rate={rate}
                  diverseProduct={false}
                />
              </div>
            </div>
          </div>
          <div className="right col-md-12 col-lg-9">
            <AdvertisingDiscountJacket />
            <div className="list-products">
              <input type="radio" name="grid" id="grid-1" value="1" />
              <input type="radio" name="grid" id="grid-3" value="3" />
              <input type="radio" name="grid" id="grid-4" value="4" checked />
              <div className="filter-grid">
                <label for="grid-1">
                  <i class="fa-sharp fa-solid fa-list"></i>
                </label>
                <label for="grid-3">
                  <i class="fa-sharp fa-solid fa-grid"></i>
                </label>
                <label for="grid-4">
                  <i class="fa-sharp fa-solid fa-grid-4"></i>
                </label>
              </div>
              <div className="render-list-products">
                <ItemProduct
                  listImgUrl={listImgUrl}
                  discount={discount}
                  productName={productName}
                  price={price}
                  rate={rate}
                  diverseProduct={false}
                />
                <ItemProduct
                  listImgUrl={listImgUrl2}
                  discount={discount}
                  productName={productName}
                  price={"$72.00 - $89.00"}
                  rate={4}
                  diverseProduct={diverse}
                />
                <ItemProduct
                  listImgUrl={listImgUrl3}
                  discount={discount}
                  productName={productName}
                  price={price}
                  rate={2}
                  diverseProduct={diverse}
                />
                <ItemProduct
                  listImgUrl={listImgUrl4}
                  discount={discount}
                  productName={productName}
                  price={"$72.00 - $89.00"}
                  rate={4}
                  diverseProduct={diverse}
                />
                <ItemProduct
                  listImgUrl={listImgUrl5}
                  discount={discount}
                  productName={productName}
                  price={price}
                  rate={2}
                  diverseProduct={diverse}
                />
                <ItemProduct
                  listImgUrl={listImgUrl}
                  discount={discount}
                  productName={productName}
                  price={price}
                  rate={rate}
                  diverseProduct={false}
                />
                <ItemProduct
                  listImgUrl={listImgUrl2}
                  discount={discount}
                  productName={productName}
                  price={"$72.00 - $89.00"}
                  rate={4}
                  diverseProduct={diverse}
                />
                <ItemProduct
                  listImgUrl={listImgUrl3}
                  discount={discount}
                  productName={productName}
                  price={price}
                  rate={2}
                  diverseProduct={diverse}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
