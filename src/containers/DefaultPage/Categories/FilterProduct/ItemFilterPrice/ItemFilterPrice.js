import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "../ItemFilterPrice/ItemFilterPrice.scss";
import Slider from "react-slider";
import { useNavigate, useParams } from "react-router-dom";

const ItemFilterPrice = () => {
  const [showMenu, setShowMenu] = useState(true);



  const MIN = 20;
  const MAX = 400;

  const [values, setValues] = useState([MIN, MAX]);
  const { register, handleSubmit } = useForm();

  const params = useParams();
  const navigate = useNavigate();
  const getValue = () => {
    // console.log("value", values[0]);
    // console.log("value", values[1]);
    navigate(`/categories/${params.category}/${values[0]}/${values[1]}`)
  };

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
          <form>
            <div className="input-group">
              <Slider
                className={"slider mb-4"}
                onChange={setValues}
                value={values}
                min={MIN}
                max={MAX}
              ></Slider>
              <label for="price" className="mb-0">
                Price: {values[0]}.00 VND - {values[1]}.00 VND
              </label>
            </div>
            <div
              className="btn-filter mb-2"
              onClick={() => {
                getValue();
              }}
            >
              <p className="mb-0">FILTER</p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ItemFilterPrice;
