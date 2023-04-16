import "../ItemSearchResult/ItemSearchResult.scss";

const ItemSearchResult = ({imgProduct, productName, price}) => {
  return (
    <div className="item-search-result">
      <div className="img-product mr-2">
        <img src={imgProduct} alt="" />
      </div>
      <div className="content">
        <div className="product-name">
          <p className="mb-1">{productName}</p>
        </div>
        <div className="price">
          <p className="mb-0">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemSearchResult;
