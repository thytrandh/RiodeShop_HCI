import { useState } from "react";
import "../SearchBar/SearchBar.scss";
import ItemSearchResult from "./ItemSearchResult/ItemSearchResult";

const SearchBar = () => {
  const listProduct = JSON.parse(localStorage.getItem("productData"));
  const [productData, setProductData] = useState(listProduct);
  const [searchResult, setSearchResult] = useState(productData);

  console.log(productData);

  //const [keyWord, setKeyWord] = useState();
  const handleSearch = (e) => {
    const key = e.target.value;
    // setKeyWord(key);
    // console.log(key);

    const handleFilterProduct = productData.filter((val) =>
      val.productName.toLocaleLowerCase().includes(key.toLocaleLowerCase()) 
    );
    //const searchResult = [...handleFilterProduct];
    setSearchResult(handleFilterProduct);
  };

  // setSearchResult(handleFilterProduct);

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
              onChange={(e) => handleSearch(e)}
            />
            <i class="fa-regular fa-magnifying-glass"></i>
          </form>
          <div className="box-result mt-1">
            {searchResult &&
              searchResult.map((product) => (
                <ItemSearchResult
                  key={product.id}
                  idProduct={product.id}
                  imgProduct={product?.productImage[0]?.imageLink}
                  productName={product?.productName}
                  price={product?.price}
                />
              ))}

            {/* <ItemSearchResult
              imgProduct={imgProduct}
              productName={productName}
              price={price}
            />
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
              <ItemSearchResult
              imgProduct={imgProduct}
              productName={productName}
              price={price}
            />
              <ItemSearchResult
              imgProduct={imgProduct}
              productName={productName}
              price={price}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
