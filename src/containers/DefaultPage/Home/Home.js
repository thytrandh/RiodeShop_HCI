import { useEffect } from "react";
import Advertising01 from "../../../components/Advertising/Advertising01/Advertising01";
import "../Home/Home.scss";
import TopBanner from "./TopBanner/TopBanner";
import ListProduct from "../../../components/Product/ListProduct/ListProduct";

const Home = () => {
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

      <div className="advertising advertising-grid"></div>
      <div className="list-products"></div>
      <div className="advertising advertising-banner"></div>
      <div className="blog"></div>
    </div>
  );
};

export default Home;
