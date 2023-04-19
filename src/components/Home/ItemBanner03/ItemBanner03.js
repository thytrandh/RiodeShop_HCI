import "../ItemBanner03/ItemBanner03.scss";
import videoBg from "../../../assets/videos/video.mp4";

const ItemBanner03 = () => {
  return (
    <div className="item-banner-03">
      <video src={videoBg} loop autoplay="" muted />
      <div className="blur"></div>
      {/* <img src="/images/TopBanner/banner-03.jpg" alt="" /> */}
      <div className="container">
        <div className="content">
          <h2 className="categories mb-3">CHECK OUT OUR</h2>
          <h1 className="subject mb-3">SUMMER SEASON'S</h1>
          <h4 className="event mb-4">
            Up to 50% Off this Season’s & Get free shipping on all orders over $199.00
          </h4>
          <div className="btn-shop-now">
            <p className="mb-0">SHOP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBanner03;
