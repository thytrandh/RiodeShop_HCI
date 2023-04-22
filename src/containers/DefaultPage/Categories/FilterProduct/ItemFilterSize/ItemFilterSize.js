import { useState } from "react";
import { useForm } from "react-hook-form";
import "../ItemFilterSize/ItemFilterSize.scss";

const ItemFilterSize = () => {
  const [showMenu, setShowMenu] = useState(true);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="item-filter-size">
      <div className="title" onClick={() => setShowMenu(!showMenu)}>
        <p className="mb-0">Size </p>
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
              <input
                id="extra-largeInput"
                type="checkbox"
                className="mr-2"
                {...register("extra-large")}
              />
              <label for="extra-largeInput" className="mb-0">
                Extra Large
              </label>
            </div>
            <div className="input-group">
              <input
                id="largeInput"
                type="checkbox"
                className="mr-2"
                {...register("large")}
              />
              <label for="largeInput" className="mb-0">
                Large
              </label>
            </div>
            <div className="input-group">
              <input
                id="mediumInput"
                type="checkbox"
                className="mr-2"
                {...register("medium")}
              />
              <label for="mediumInput" className="mb-0">
                Medium
              </label>
            </div>
            <div className="input-group">
              <input
                id="smallInput"
                type="checkbox"
                className="mr-2"
                {...register("small")}
              />
              <label for="smallInput" className="mb-0">
                Small
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ItemFilterSize;
