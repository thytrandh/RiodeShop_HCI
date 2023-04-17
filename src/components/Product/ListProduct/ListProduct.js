import Carousel from "react-elastic-carousel";
import ItemProduct from "../ItemProduct/ItemProduct";
import "../ListProduct/ListProduct.scss";

const ListProduct = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];


  const listImgUrl = [
    "/images/product-test/01/item-product-1.jpg",
    "/images/product-test/01/item-product-2.jpg",
  ];

  const listImgUrl2 = [
    "/images/product-test/02/img-01.jpg",
    "/images/product-test/02/img-02.jpg",
  ];
  const listImgUrl3 = [
    "/images/product-test/03/img-01.jpg",
    "/images/product-test/03/img-02.jpg",
  ];
  const listImgUrl4 = [
    "/images/product-test/04/img-01.jpg",
    "/images/product-test/04/img-02.jpg",
  ];

  const listImgUrl5 = [
    "/images/item-product-1.jpg",
    "/images/item-product-2.jpg",
  ];

  const discount = 30;
  const productName = "Fashion Sports Bag";
  const price = "$99.00";
  const rate = 3;
  const diverse = true;

  return (
    <div className="list-products container">
      <Carousel breakPoints={breakPoints} showArrows={false} pagination={false}>
        <ItemProduct
          listImgUrl={listImgUrl}
          discount={discount}
          productName={productName}
          price={price}
          rate={rate}
          diverseProduct={false}
        />
        <ItemProduct
          listImgUrl={listImgUrl2}
          discount={discount}
          productName={productName}
          price={"$72.00 - $89.00"}
          rate={4}
          diverseProduct={diverse}
        />
         <ItemProduct
          listImgUrl={listImgUrl3}
          discount={discount}
          productName={productName}
          price={price}
          rate={2}
          diverseProduct={diverse}
        />
         <ItemProduct
          listImgUrl={listImgUrl4}
          discount={discount}
          productName={productName}
          price={price}
          rate={5}
          diverseProduct={false}
        />
         <ItemProduct
          listImgUrl={listImgUrl5}
          discount={discount}
          productName={productName}
          price={price}
          rate={4}
          diverseProduct={diverse}
        />
      </Carousel>
    </div>
  );
};

export default ListProduct;
