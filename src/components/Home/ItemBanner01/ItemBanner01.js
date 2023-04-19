import "../ItemBanner01/ItemBanner01.scss";

const ItemBanner01 = () => {
  return (
    <div className="item-banner-01">
      <img src="/images/TopBanner/banner-01.jpg" alt="" />
      <div className="container">
        <div className="content">
          <h2 className="categories mb-3">WOMEN'S CLOTHING</h2>
          <h1 className="subject mb-2">
            <span className="fw-8">Fashionable</span> Collection
          </h1>
          <h4 className="event mb-4">FREE SHIPPING & 60-DAY FREE RETURNS</h4>
          <div className="btn-shop-now">
            <p className="mb-0 mr-3">SHOP NOW</p>
            <i class="fa-light fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="blur"></div>
    </div>
  );
};

export default ItemBanner01;
