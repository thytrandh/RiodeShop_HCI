import "../SearchBar/SearchBar.scss";
import ItemSearchResult from "./ItemSearchResult/ItemSearchResult";

const SearchBar = () => {
  const imgProduct = "/images/product.jpg";
  const productName = "Fashionable Hooded Coat";
  const price = "$140.00 – $340.00";
  return (
    <div className="searchbar">
      <div className="btn-search">
        <i class="fa-regular fa-magnifying-glass"></i>
        <div className="search-box">
          <form action="" className="searchbox">
            <input
              type="text"
              className="search-input"
              placeholder="Type here to search..."
            />
            <i class="fa-regular fa-magnifying-glass"></i>
          </form>
          <div className="box-result mt-1">
            <ItemSearchResult
              imgProduct={imgProduct}
              productName={productName}
              price={price}
            />
              <ItemSearchResult
              imgProduct={imgProduct}
              productName={productName}
              price={price}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
