import { useEffect, useState } from "react";
import Advertising01 from "../../../components/Advertising/Advertising01/Advertising01";
import "../Home/Home.scss";
import TopBanner from "./TopBanner/TopBanner";
import ListProduct from "../../../components/Product/ListProduct/ListProduct";
import Carousel from "react-elastic-carousel";
import ItemCategories from "../../../components/Home/ItemCategories/ItemCategories";
import AdvertisingShoses from "../../../components/Advertising/AdvertisingShoses/AdvertisingShoses";
import AdvertisingSummer from "../../../components/Advertising/AdvertisingSummer/AdvertisingSummer";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux/slice/Product/productSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  });

  const listProduct = JSON.parse(localStorage.getItem("productData"));
  const [productData, setProductData] = useState(listProduct);
  const [clothingData, setClothingData] = useState([]);
  const [bagsData, setBagsData] = useState([]);
  const [accessoriesData, setAccessoriesData] = useState([]);
  const [shoesData, setShoesData] = useState([]);

  useEffect(() => {
    const filterClothing = productData.filter(
      (val) => val.category.categoryName === "Clothing"
    );
    setClothingData(filterClothing);

    const filterBags = productData.filter(
      (val) => val.category.categoryName === "Bags"
    );
    setBagsData(filterClothing);

    const filterAccessories = productData.filter(
      (val) => val.category.categoryName === "Accessories"
    );
    setAccessoriesData(filterAccessories);

    const filterShoes = productData.filter(
      (val) => val.category.categoryName === "Shoes"
    );
    setShoesData(filterShoes);
  });

  return (
    <div className="home-page">
      <TopBanner />
      <div className="advertising">
        <Advertising01 />
      </div>
      <div className="list-product-best-sellers">
        <h2 class="main-title mb-4">
          <b>Clothing</b>
          <em>Clothing</em>
        </h2>
        <ListProduct listProduct={clothingData} />
      </div>
      <div className="list-product-categories">
        <div className="list-categories container">
          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            pagination={false}
          >
            <Link to={"/categories/Shoes/0/400"} replace={true}>
              <ItemCategories
                imgCategories={"/images/categories/bg-01.jpg"}
                categoriesName={"SHOSES"}
                numberProduct={shoesData.length}
              />
            </Link>
            <Link to={"/categories/Bags/0/400"} replace={true}>
              <ItemCategories
                imgCategories={"/images/categories/bg-02.jpg"}
                categoriesName={"BAGS"}
                numberProduct={bagsData.length}
              />
            </Link>
            <Link to={"/categories/Accessories/0/400"} replace={true}>
              <ItemCategories
                imgCategories={"/images/categories/bg-03.jpg"}
                categoriesName={"ACCESSORIES"}
                numberProduct={accessoriesData.length}
              />
            </Link>
            <Link to={"/categories/Clothing/0/400"} replace={true}>
              <ItemCategories
                imgCategories={"/images/categories/bg-04.jpg"}
                categoriesName={"CLOTHING"}
                numberProduct={clothingData.length}
              />
            </Link>
          </Carousel>
        </div>
      </div>
      <div className="list-product-our-featured">
        <h2 class="main-title mb-4">
          <b>Shoes</b>
          <em>Shoes</em>
        </h2>
        <ListProduct listProduct={shoesData} />
      </div>
      <div className="advertising">
        <AdvertisingSummer />
      </div>
      <div className="list-product-our-featured">
        <h2 class="main-title mb-4">
          <b>Accessories</b>
          <em>Accessories</em>
        </h2>
        <ListProduct listProduct={accessoriesData} />
      </div>

      <div className="list-products"></div>
      <div className="advertising advertising-banner">
        <AdvertisingShoses />
      </div>
      <div className="blog"></div>
    </div>
  );
};

export default Home;
