import "../AdvertisingSummer/AdvertisingSummer.scss";

const AdvertisingSummer = () => {
  return (
    <div className="advertising-summer">
      <div className="container">
        {/* m-0 p-0 */}
        <div className="row">
          <div className="left col-lg-8 ">
            <div className="img-bg">
              <img src="/images/advertising-summer/img-01.png" alt="" />
            </div>
            <div className="content">
              <p className="categories mb-0">NEW DESIGN</p>
              <p className="subject mb-0">Fashion of Paris</p>
              <p className="event mb-4">Free shipping on all over $99.00</p>
              <div className="btn-shop-now">
                <p className="mb-0">SHOP NOW</p>
              </div>
            </div>
          </div>
          <div className="right col-lg-4 d-none d-lg-inline">
            <div className="img-bg">
              <img src="/images/advertising-summer/img-02.jpg" alt="" />
            </div>
            <div className="content">
              <p className="categories mb-3">END AT SUMMER SALE</p>
              <div className="subject mb-4">
                <p className="sj-01 mb-0">UP TO</p>
                <div className="item-text-custom">
                    70
                </div>
                <p className="sj-03 mb-0">DISCOUNT</p>
              </div>
              <div className="btn-shop-now">
                <p className="mb-0">SHOP NOW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingSummer;
