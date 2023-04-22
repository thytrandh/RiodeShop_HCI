import "../AdvertisingDiscountJacket/AdvertisingDiscountJacket.scss";

const AdvertisingDiscountJacket = () => {
    
  return (
    <div className="advertising-discount-jacket">
      <div className="img-banner">
        <img src="/images/page-categories/top-banner/img-02.jpg" alt="" />
      </div>
      <div className="content">
        <h4>FLASH SALES</h4>
        <h1>Jackets Collection</h1>
        <p className="mb-3">
          <strong>UP TO 70%</strong> DISCOUNT
        </p>
        <div className="btn-shop-now">
          <p className="mb-0">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingDiscountJacket;
