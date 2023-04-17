import "../Advertising01/Advertising01.scss";
import Carousel from "react-elastic-carousel";

const Advertising01 = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div class="collection-banner slider-collection-banner owl-carousel owl-theme">
      <Carousel breakPoints={breakPoints} pagination={false} showArrows={false}>
        <div class="item-1">
          <a href="">
            <img src="images/Page Home/Collection Banner/img-01.jpg" alt="" />
          </a>
          <div class="content-type01">
            <h4>FOOTWEAR</h4>
            <h3>NEW DESIGN</h3>
            <p>From $16.00</p>
            <a href="" class="btn-shop-now a-center flex">
              SHOP NOW
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="item-2">
          <a href="">
            <img src="images/Page Home/Collection Banner/img-02.jpg" alt="" />
          </a>
          <div class="content-type02">
            <h3>NEW ARRIVALS</h3>
            <p>11 PRODUCTS</p>
            <a href="" class="btn-shop-now a-center flex">
              SHOP NOW
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="item-3">
          <a href="">
            <img src="images/Page Home/Collection Banner/img-03.jpg" alt="" />
          </a>
          <div class="content-type01">
            <h4>BIG SALE</h4>
            <h3>MID SEASON'S</h3>
            <p>Up to 70% Off</p>
            <a href="" class="btn-shop-now a-center flex">
              SHOP NOW
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="item-4">
          <a href="">
            <img src="images/Page Home/Collection Banner/img-04.jpg" alt="" />
          </a>
          <div class="content-type02">
            <h3>TOPS & JACKET</h3>
            <p>0 PRODUCTS</p>
            <a href="" class="btn-shop-now a-center flex">
              SHOP NOW
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Advertising01;
