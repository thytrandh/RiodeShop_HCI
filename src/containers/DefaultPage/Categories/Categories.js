import { useEffect, useState } from "react";
import "../Categories/Categories.scss";
import ItemCategories from "../../../components/Home/ItemCategories/ItemCategories";
import ItemFilterCategories from "./FilterProduct/ItemFilterCategories/ItemFilterCategories";
import ItemFilterSize from "./FilterProduct/ItemFilterSize/ItemFilterSize";
import ItemFilterPrice from "./FilterProduct/ItemFilterPrice/ItemFilterPrice";
import AdvertisingDiscountJacket from "../../../components/Advertising/AdvertisingDiscountJacket/AdvertisingDiscountJacket";
import ItemProduct from "../../../components/Product/ItemProduct/ItemProduct";
import TopBanner from "../../../components/TopBanner/TopBanner";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../redux/slice/Product/productSlice";
import { useParams } from "react-router-dom";
import { PriceContext } from "./context/priceContext";

const Categories = () => {
  const discount = 30;
  const rate = 3;
  const diverse = true;

  const productSuggest = useSelector(
    (state) => state.product.listProductSuggest
  );
  const productSuggestData = [];
  productSuggestData.push(productSuggest[0]);
  productSuggestData.push(productSuggest[1]);
  productSuggestData.push(productSuggest[2]);
  productSuggestData.push(productSuggest[3]);

  const listProduct = JSON.parse(localStorage.getItem("productData"));
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(listProduct);
  const [filterProductData, setFilterProductData] = useState([]);

  const params = useParams();

  const handleFilterByCategoryName = (categoryName) => {
    if (categoryName != "allProduct") {
      const arrFilterCategory = productData.filter(
        (val) => val.category.categoryName === categoryName
      );

      const arrFilterPrice = arrFilterCategory.filter(
        (val) =>
          val.price >= Number(params.price1) &&
          val.price <= Number(params.price2)
      );

      setFilterProductData(arrFilterPrice);
    } else {
      const arrFilterPrice = productData.filter(
        (val) =>
          val.price >= Number(params.price1) &&
          val.price <= Number(params.price2)
      );
      setFilterProductData(arrFilterPrice);
    }

    console.log("filter", filterProductData);
  };

  const handleFilterByPrice = () => {
    const arrFilterPrice = filterProductData.filter(
      (val) =>
        val.price >= Number(params.price1) && val.price <= Number(params.price2)
    );
    setFilterProductData(arrFilterPrice);
  };

  useEffect(() => {
    handleFilterByCategoryName(params.category);
  });

  return (
    <div className="categories-page">
      <TopBanner page={"CATEGORIES"} />
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
              {/* <ItemFilterSize /> */}
            </div>
            <div className="list-product-recommend">
              <div className="title">
                <p className="mb-0">Recommend</p>
              </div>
              <div className="list-product mt-4">
                {productSuggestData &&
                  productSuggestData.map((product) => (
                    <ItemProduct
                      key={product.id}
                      idProduct={product.id}
                      imgProduct01={product?.productImage[0]?.imageLink}
                      imgProduct02={product?.productImage[1]?.imageLink}
                      categoryName={product?.category?.categoryName}
                      productName={product?.productName}
                      price={product?.price}
                      rate={rate}
                      diverseProduct={false}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="right col-md-12 col-lg-9">
            {/* <AdvertisingDiscountJacket /> */}
            <div className="list-products">
              {/* <input type="radio" name="grid" id="grid-1" value="1" />
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
              </div> */}
              <div className="render-list-products">
                {filterProductData &&
                  filterProductData.map((product) => (
                    <ItemProduct
                      key={product.id}
                      idProduct={product.id}
                      imgProduct01={product?.productImage[0]?.imageLink}
                      imgProduct02={product?.productImage[1]?.imageLink}
                      categoryName={product?.category?.categoryName}
                      productName={product?.productName}
                      price={product?.price}
                      rate={rate}
                      diverseProduct={false}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
