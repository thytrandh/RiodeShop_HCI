import Carousel from "react-elastic-carousel";
import ItemProduct from "../ItemProduct/ItemProduct";
import "../ListProduct/ListProduct.scss";

const ListProduct = ({ listProduct }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const rate = 3;
  const diverse = true;

  return (
    <div className="list-products list-products-render container">
      <Carousel
        itemPadding={[0, 7]}
        breakPoints={breakPoints}
        showArrows={false}
        pagination={false}
      >
        {listProduct &&
          listProduct.map((product) => (
            <ItemProduct
              key={product.id}
              idProduct={product.id}
              imgProduct01={product?.productImage[0]?.imageLink}
              imgProduct02={product?.productImage[1]?.imageLink}
              categoryName={product?.category?.categoryName}
              productName={product?.productName}
              price={product?.price}
              rate={rate}
              diverseProduct={false}
            />
          ))}
      </Carousel>
    </div>
  );
};

export default ListProduct;
