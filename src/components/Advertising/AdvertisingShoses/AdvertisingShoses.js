import "../AdvertisingShoses/AdvertisingShoses.scss";
import Carousel from "react-elastic-carousel";
const AdvertisingShoses = () => {
  return (
    <div class="el-banner-03">
      <div class="container">
        <div class="content flex a-center j-between">
          <div class="el-content-01">
            <h3>GET OUR PERFECT GIFT</h3>
            <h6>Special Offer Collection</h6>
            <a href="">
              <button class="btn-shop-now">
                VIEW ALL COLLECTION<i class="bi bi-arrow-right"></i>
              </button>
            </a>
          </div>
          <div class="el-content-02 slider-el-content-02-banner-03">
            <Carousel showArrows={false} pagination={false}>
              <div class="item">
                <h5>ON SHOES</h5>
                <h4>Up to 20% Off</h4>
                <a href="">
                  <button class="btn-shop-now">
                    SHOP NOW<i class="bi bi-arrow-right"></i>
                  </button>
                </a>
              </div>
              <div class="item">
                <h5>ON BAGS</h5>
                <h4>Up to 30% Off</h4>
                <a href="">
                  <button class="btn-shop-now">
                    SHOP NOW<i class="bi bi-arrow-right"></i>
                  </button>
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingShoses;
