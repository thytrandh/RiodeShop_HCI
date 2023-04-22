import { useState } from "react";
import "../ItemFilterCategories/ItemFilterCategories.scss";

const ItemFilterCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Accessories" },
    { id: 2, name: "Bags" },
    { id: 3, name: "Shoses" },
    { id: 4, name: "Clothing" },
    { id: 5, name: "Best Seller" },
    { id: 6, name: "New Collection" },
    { id: 7, name: "Trend 2023" },
    { id: 8, name: "Our Featured" },
  ]);

  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="item-filter-categories">
      <div className="title" onClick={() => setShowMenu(!showMenu)}>
        <p className="mb-0">All Categories</p>
        <i className={showMenu ? ("minus fa-solid fa-minus") : ("minus show fa-solid fa-minus") }></i>
      </div>
      {showMenu && (
        <div className="menu mt-3">
          {categories.map((category) => (
            <p key={categories.id} className="mb-0">
              {category.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemFilterCategories;
