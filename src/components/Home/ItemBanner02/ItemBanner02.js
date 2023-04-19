import "../ItemBanner02/ItemBanner02.scss";

const ItemBanner02 = () => {
  return (
    <div className="item-banner-02">
      <img src="/images/TopBanner/banner-02.jpg" alt="" />
      <div className="container">
        <div className="content">
          <h2 className="categories mb-3">2023 NEW COLLECTION</h2>
          <h1 className="subject mb-2">
            <span className="custom-subject mr-3">SPRING</span>
            LIFECHIC
          </h1>
          <h4 className="event mb-4">
            From 9th January from 19th February 2023
          </h4>
          <div className="btn-shop-now">
            <p className="mb-0 mr-3">SHOP NOW</p>
            <i class="fa-light fa-arrow-right"></i>
          </div>
        </div>
      </div>

      {/* <div className="blur"></div> */}
    </div>
  );
};

export default ItemBanner02;
