import { useEffect, useState } from "react";
import "../ItemProduct/ItemProduct.scss";

const ItemProduct = ({
  listImgUrl,
  discount,
  productName,
  price,
  rate,
  diverseProduct,
}) => {

  const arrRate = [];
  for (let i = 0; i < rate; i++) {
    arrRate.push(arrRate[i]);
  }

  const arrStar = [1, 2, 3, 4, 5];
  arrStar.splice(0, rate);
  return (
    <div className="item-product">
      <div className="img-product mb-3">
        <img className="img-01" src={listImgUrl?.[0]} alt="" />
        <img className="img-02" src={listImgUrl?.[1]} alt="" />
        <div className="badge">
          <p className="mb-0">{discount}% OFF</p>
        </div>
      </div>
      <div className="content">
        <div className="product-name mb-1">
          <p className="mb-0">{productName}</p>
        </div>
        <div className="price ">
          <p className="mb-0">{price}</p>
        </div>
        <div className="point mb-3">
          <div className="rate mr-3">
            {arrRate.map(() => (
              <i className="fa-solid fa-star" style={{ color: "#d26e4b" }}></i>
            ))}
            {arrStar.map(() => (
              <i
                className="fa-duotone fa-star"
                style={{ color: "#a09e9e" }}
              ></i>
            ))}
          </div>
          <div className="reviews-number">
            <p className="mb-0">({rate} Reviews)</p>
          </div>
        </div>
        <div className="box-option">
          {diverseProduct ? (
            <div className="btn-select-options">
              <p className="mb-0">SELECT OPTIONS</p>
            </div>
          ) : (
            <div className="btn-add-to-cart">
              <i class="fal fa-shopping-bag mr-2"></i>
              <p className="mb-0">ADD TO CART</p>
            </div>
          )}
          <div className="like mr-3">
            <i class="fal fa-heart"></i>
          </div>
          <div className="quick-view">
            <i class="fal fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
