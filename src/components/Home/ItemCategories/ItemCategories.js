import "../ItemCategories/ItemCategories.scss";


const ItemCategories = ({imgCategories, categoriesName, numberProduct}) => {
  return (
    <div className="item-categories">
      <div className="img-categories">
        <img src={imgCategories} alt="" />
      </div>
      <div className="content">
        <div className="categories-name">
          <p className="mb-0">{categoriesName}</p>
        </div>
        <div className="number-product">
          <p className="mb-0">{numberProduct} Products</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCategories;
