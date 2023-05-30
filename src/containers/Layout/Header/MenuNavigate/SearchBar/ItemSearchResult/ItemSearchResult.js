import { useNavigate } from "react-router-dom";
import "../ItemSearchResult/ItemSearchResult.scss";

const ItemSearchResult = ({ idProduct, imgProduct, productName, price }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/products/${idProduct}`, { replace: true });
  };

  return (
    <div
      className="item-search-result"
      onClick={() => {
        handleNavigate();
      }}
    >
      <div className="img-product mr-2">
        <img src={imgProduct} alt="" />
      </div>
      <div className="content">
        <div className="product-name">
          <p className="mb-1">{productName}</p>
        </div>
        <div className="price">
          <p className="mb-0">{price}.00 VND</p>
        </div>
      </div>
    </div>
  );
};

export default ItemSearchResult;
