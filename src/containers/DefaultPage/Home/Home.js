import { useEffect } from "react";
import Advertising01 from "../../../components/Advertising/Advertising01/Advertising01";
import "../Home/Home.scss";
import TopBanner from "./TopBanner/TopBanner";
import ListProduct from "../../../components/Product/ListProduct/ListProduct";
import Carousel from "react-elastic-carousel";
import ItemCategories from "../../../components/Home/ItemCategories/ItemCategories";
import AdvertisingShoses from "../../../components/Advertising/AdvertisingShoses/AdvertisingShoses";
import AdvertisingSummer from "../../../components/Advertising/AdvertisingSummer/AdvertisingSummer";

const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <div className="home-page">
      <TopBanner />
      <div className="advertising">
        <Advertising01 />
      </div>
      <div className="list-product-best-sellers">
        <h2 class="main-title mb-4">
          <b>Best Sellers</b>
          <em>Best Sellers</em>
        </h2>
        <ListProduct />
      </div>
      <div className="list-product-categories">
        <div className="list-categories container">
          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            pagination={false}
          >
            <ItemCategories
              imgCategories={"/images/categories/bg-01.jpg"}
              categoriesName={"SHOSES"}
              numberProduct={5}
            />
            <ItemCategories
              imgCategories={"/images/categories/bg-02.jpg"}
              categoriesName={"BAGS"}
              numberProduct={15}
            />
            <ItemCategories
              imgCategories={"/images/categories/bg-03.jpg"}
              categoriesName={"ACCESSORIES"}
              numberProduct={20}
            />
            <ItemCategories
              imgCategories={"/images/categories/bg-04.jpg"}
              categoriesName={"CLOTHING"}
              numberProduct={8}
            />
          </Carousel>
        </div>
      </div>
      <div className="list-product-our-featured">
        <h2 class="main-title mb-4">
          <b>Our Featured</b>
          <em>Our Featured</em>
        </h2>
        <ListProduct />
      </div>
      <div className="advertising">
        <AdvertisingSummer />
      </div>
      <div className="list-product-our-featured">
        <h2 class="main-title mb-4">
          <b>Trends 2023</b>
          <em>Trends 2023</em>
        </h2>
        <ListProduct />
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
