import { useState } from "react";
import { useForm } from "react-hook-form";
import "../ItemFilterPrice/ItemFilterPrice.scss";
import Slider from "react-slider";

const ItemFilterPrice = () => {
  const [showMenu, setShowMenu] = useState(true);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const MIN = 20;
  const MAX = 340;

  const [values, setValues] = useState([MIN, MAX]);

  return (
    <div className="item-filter-price">
      <div className="title" onClick={() => setShowMenu(!showMenu)}>
        <p className="mb-0">Price</p>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <Slider
                className={"slider mb-4"}
                onChange={setValues}
                value={values}
                min={MIN}
                max={MAX}
              ></Slider>
              <label for="price" className="mb-0">
                Price: ${values[0]}.00 - ${values[1]}.00
              </label>
            </div>
            <div className="btn-filter mb-2">
              <p className="mb-0">FILTER</p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ItemFilterPrice;
