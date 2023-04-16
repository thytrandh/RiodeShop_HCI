import "../ItemBanner01/ItemBanner01.scss";

const ItemBanner01 = () => {
  return (
    <div className="item-banner">
      <img src="/images/TopBanner/banner-01.jpg" alt="" />
      <div className="content">
        <h4 className="event mb-0">Fashion Trending 2023</h4>
        <h1 className="subject mb-2">LOOKBOOK</h1>
        <h2 className="categories mb-4">SPORT WEAR COLLECTION</h2>
        <div className="btn-shop-now">
          <p className="mb-0 mr-3">SHOP NOW</p>
          <i class="fa-light fa-arrow-right"></i>
        </div>

      </div>
      <div className="blur"></div>
    </div>
  );
};

export default ItemBanner01;
