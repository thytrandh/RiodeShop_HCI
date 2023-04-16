import "../Home/Home.scss";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
 
  return (
    <div className="home-page">
     <TopBanner/>
      <div className="list-products">
        
      </div>
      <div className="advertising advertising-grid"></div>
      <div className="list-products"></div>
      <div className="advertising advertising-banner"></div>
      <div className="blog"></div>
    </div>
  );
};

export default Home;
