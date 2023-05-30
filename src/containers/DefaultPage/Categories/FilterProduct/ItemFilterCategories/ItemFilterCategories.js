import { useState } from "react";
import "../ItemFilterCategories/ItemFilterCategories.scss";
import { Link, useParams } from "react-router-dom";

const ItemFilterCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Accessories" },
    { id: 2, name: "Bags" },
    { id: 3, name: "Shoes" },
    { id: 4, name: "Clothing" },
    // { id: 5, name: "Best Seller" },
    // { id: 6, name: "New Collection" },
    // { id: 7, name: "Trend 2023" },
    // { id: 8, name: "Our Featured" },
  ]);

  const params = useParams();


  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="item-filter-categories">
      <div className="title" onClick={() => setShowMenu(!showMenu)}>
        <p className="mb-0">All Categories</p>
        <i
          className={
            showMenu
              ? "minus fa-solid fa-minus"
              : "minus show fa-solid fa-minus"
          }
        ></i>
      </div>
      {showMenu && (
        <div className="menu mt-3">
          {categories.map((category) => (
            <Link
              key={categories.id}
              to={`/categories/${category.name}/${params.price1}/${params.price2}`}
              replace={false}
            >
              <p className="mb-0">{category.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemFilterCategories;
