import "../ItemBanner02/ItemBanner02.scss";

const ItemBanner02 = () => {
  return (
    <div className="item-banner-02">
      <img src="/images/TopBanner/banner-02.jpg" alt="" />
      <div className="content">
        <h2 className="categories mb-3">MEN'S CLOTHING</h2>
        <h1 className="subject mb-2">Great collection of accessories</h1>
        <h4 className="event mb-4">FREE SHIPPING & 60-DAY FREE RETURNS</h4>
        <div className="btn-shop-now">
          <p className="mb-0 mr-3">SHOP NOW</p>
          <i class="fa-light fa-arrow-right"></i>
        </div>
      </div>
      <div className="blur"></div>
    </div>
  );
};

export default ItemBanner02;
