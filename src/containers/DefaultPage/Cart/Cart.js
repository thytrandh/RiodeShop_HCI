import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash, BsArrowLeft } from "react-icons/bs";
import empty_cart from "../../../assets/images/cart/empty-cart.jpg";
import { removeCart } from "../../../redux/slice/Cart/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  increaseCart,
  decreaseCart,
  removeFromCart,
} from "../../../redux/slice/Cart/cartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const handleChange = (e) => {
    console.log(e.target);
    setSelected(!selected);
    // const { name, checked } = e.target;
    // let tempCart = [];
    // if (name === "allSelect") {
    //   tempCart = carts.map((cart) => {
    //     return { ...cart, isChecked: checked };
    //   });
    //   setCarts(tempCart);
    //   setDisable(!disable);
    // } else {
    //   tempCart = carts.map((cart) =>
    //     cart.productName === name ? { ...cart, isChecked: checked } : cart
    //   );
    //   setCarts(tempCart);
    // }
  };
  return (
    <div className="mx-5 py-1">
      <hr className=" !border-slate-300"></hr>
      <h4 className="">Shopping Cart</h4>
      <div className="text-sm mb-3 text-gray-500">
        You have {0} items in your cart
      </div>
      <div>
        <div className="py-1">
          <div className="bg-white font-medium text-sm rounded-xl py-4 grid grid-cols-12 drop-shadow-lg">
            <div className="col-start-1 col-span-1 gap-4 flex items-center justify-center">
              <input
                type="checkbox"
                name="allSelect"
                className="w-4 h-4 cursor-pointer"
                //   checked={!carts?.some((cart) => cart?.isChecked !== true)}
                //   onChange={handleChange}
              />
              {/* <span className="pl-2">Chọn tất cả ({carts?.length} sản phẩm)</span> */}
            </div>
            <div className="ml-5 col-start-3 text-center">Product</div>
            <div className="col-start-8 col-span-1 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-1 text-center">Total</div>
          </div>

          <div className="my-3 bg-white rounded-xl drop-shadow-md">
            {/* {carts &&
            carts?.map((cartItem) => ( */}
            <div
              // key={cartItem.cartId}
              className="py-4 grid grid-cols-12 place-items-center text-sm"
            >
              <input
                //   name={cartItem.productName}
                type="checkbox"
                className="col-start-1 w-4 h-4 cursor-pointer"
                //   checked={cartItem.isChecked || false}
                //   onChange={handleChange}
              />
              <div className="col-start-2 w-full grid justify-center items-center drop-shadow-lg transition-all cursor-pointer mb-3">
                <div className="group drop-shadow-xl text-lg h-28 rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <img
                    className=" h-28 object-cover transition-transform duration-500 group-hover:scale-125"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    //   alt={cartItem.productName}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-start-3 col-span-3 ml-5 text-sm font-medium text-gray-700 text-left cursor-pointer"
                //   onClick={() => Navigate(`/detail/${cartItem.id}`)}
              >
                {/* {cartItem.productName} */}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="col-start-8 text-center text-lg font-medium text-[#ee4d2d]">
                {/* {convertPrice(cartItem.price)} đ */}
                95
              </div>
              <div className="col-start-9 col-span-2">
                <div className="w-36 h-8 rounded-2xl border border-black grid grid-cols-3 place-items-center">
                  <div
                    className="cursor-pointer h-full w-full grid place-items-center"
                    //   onClick={() => handleDecreaseCart(cartItem)}
                  >
                    <AiOutlineMinus></AiOutlineMinus>
                  </div>
                  <span className="text-lg">0</span>
                  <div
                    className="cursor-pointer h-full w-full grid place-items-center"
                    //   onClick={() => handleIncreaseCart(cartItem)}
                  >
                    <AiOutlinePlus></AiOutlinePlus>
                  </div>
                </div>
              </div>
              <div className=" text-center text-lg font-medium text-[#ee4d2d]">
                {/* {convertPrice(cartItem.price * cartItem.cartQuantity)} đ */}
                999
              </div>
              <BsTrash
                className="h-5 w-5 cursor-pointer"
                //   onClick={() => handleRemoveFromCart(cartItem)}
              ></BsTrash>
            </div>

            {/* ))} */}
          </div>

          <div className="my-3 bg-white rounded-xl drop-shadow-md">
            {/* {carts &&
            carts?.map((cartItem) => ( */}
            <div
              // key={cartItem.cartId}
              className="py-4 grid grid-cols-12 place-items-center text-sm"
            >
              <input
                //   name={cartItem.productName}
                type="checkbox"
                className="col-start-1 w-4 h-4 cursor-pointer"
                //   checked={cartItem.isChecked || false}
                //   onChange={handleChange}
              />
              <div className="col-start-2 w-full grid justify-center items-center drop-shadow-lg transition-all cursor-pointer mb-3">
                <div className="group drop-shadow-xl text-lg h-28 rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <img
                    className=" h-28 object-cover transition-transform duration-500 group-hover:scale-125"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    //   alt={cartItem.productName}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-start-3 col-span-3 ml-5 text-sm font-medium text-gray-700 text-left cursor-pointer"
                //   onClick={() => Navigate(`/detail/${cartItem.id}`)}
              >
                {/* {cartItem.productName} */}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="col-start-8 text-center text-lg font-medium text-[#ee4d2d]">
                {/* {convertPrice(cartItem.price)} đ */}
                95
              </div>
              <div className="col-start-9 col-span-2">
                <div className="w-36 h-8 rounded-2xl border border-black grid grid-cols-3 place-items-center">
                  <div
                    className="cursor-pointer h-full w-full grid place-items-center"
                    //   onClick={() => handleDecreaseCart(cartItem)}
                  >
                    <AiOutlineMinus></AiOutlineMinus>
                  </div>
                  <span className="text-lg">0</span>
                  <div
                    className="cursor-pointer h-full w-full grid place-items-center"
                    //   onClick={() => handleIncreaseCart(cartItem)}
                  >
                    <AiOutlinePlus></AiOutlinePlus>
                  </div>
                </div>
              </div>
              <div className=" text-center text-lg font-medium text-[#ee4d2d]">
                {/* {convertPrice(cartItem.price * cartItem.cartQuantity)} đ */}
                999
              </div>
              <BsTrash
                className="h-5 w-5 cursor-pointer"
                //   onClick={() => handleRemoveFromCart(cartItem)}
              ></BsTrash>
            </div>

            {/* ))} */}
          </div>

          <div className="my-3 bg-white rounded-xl drop-shadow-md">
            {/* {carts &&
            carts?.map((cartItem) => ( */}
            <div
              // key={cartItem.cartId}
              className="py-4 grid grid-cols-12 place-items-center text-sm"
            >
              <input
                //   name={cartItem.productName}
                type="checkbox"
                className="col-start-1 w-4 h-4 cursor-pointer"
                //   checked={cartItem.isChecked || false}
                //   onChange={handleChange}
              />
              <div className="col-start-2 w-full grid justify-center items-center drop-shadow-lg transition-all cursor-pointer mb-3">
                <div className="group drop-shadow-xl text-lg h-28 rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <img
                    className=" h-28 object-cover transition-transform duration-500 group-hover:scale-125"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    //   alt={cartItem.productName}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-start-3 col-span-3 ml-5 text-sm font-medium text-gray-700 text-left cursor-pointer"
                //   onClick={() => Navigate(`/detail/${cartItem.id}`)}
              >
                {/* {cartItem.productName} */}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="col-start-8 text-center text-lg font-medium text-[#ee4d2d]">
                {/* {convertPrice(cartItem.price)} đ */}
                95
              </div>
              <div className="col-start-9 col-span-2">
                <div className="w-36 h-8 rounded-2xl border border-black grid grid-cols-3 place-items-center">
                  <div
                    className="cursor-pointer h-full w-full grid place-items-center"
                    //   onClick={() => handleDecreaseCart(cartItem)}
                  >
                    <AiOutlineMinus></AiOutlineMinus>
                  </div>
                  <span className="text-lg">0</span>
                  <div
                    className="cursor-pointer h-full w-full grid place-items-center"
                    //   onClick={() => handleIncreaseCart(cartItem)}
                  >
                    <AiOutlinePlus></AiOutlinePlus>
                  </div>
                </div>
              </div>
              <div className=" text-center text-lg font-medium text-[#ee4d2d]">
                {/* {convertPrice(cartItem.price * cartItem.cartQuantity)} đ */}
                999
              </div>
              <BsTrash
                className="h-5 w-5 cursor-pointer"
                //   onClick={() => handleRemoveFromCart(cartItem)}
              ></BsTrash>
            </div>

            {/* ))} */}
          </div>
        </div>
        <div className="sticky mb-5 !z-50 bottom-0 items-center grid grid-cols-11 place-items-center bg-white drop-shadow-[0_-5px_5px_rgba(0,0,0,0.10)] border rounded-md ">
          <div className="flex gap-x-3 col-span-2 justify-center content-center w-full">
            <input
              type="checkbox"
              name="allSelect"
              className="w-4 h-4 cursor-pointer my-auto"
              //   checked={!carts?.some((cart) => cart?.isChecked !== true)}
              onChange={handleChange}
            />
            <div className="">Select all</div>
          </div>
          {selected && (
            <div className="flex gap-2 cursor-pointer hover:text-[#ee4d2d] ">
              <BsTrash
                className="h-5 w-5 cursor-pointer "
                //   onClick={() => handleRemoveFromCart(cartItem)}
              ></BsTrash>
              <span className="">Delete all</span>
            </div>
          )}
          <div className="w-full flex gap-2 col-start-7 col-span-3 py-auto justify-center items-center">
            <div className="font-semibold text-slate-800">Total price</div>
            <div className="text-gray-700">{`(0 products)`}</div>
            <span className="text-xl text-[#ee4d2d]">$9999</span>
          </div>
          <button className="col-start-10 col-span-2 bg-[#ee4d2d] m-3 p-2 text-sm font-medium text-white rounded-lg items-right w-48 h-12 hover:bg-[#ff3700] hover:drop-shadow-xl transition-all">
            Go to checkout
          </button>
        </div>
      </div>
      {/* <div className="text-center mb-2">
        <div className="flex justify-center items-center my-5">
          <img className="h-60 w-72" src={empty_cart} alt=""></img>
        </div>
        <h3>
          Your cart is <span className="text-[#ee4d2d]">empty!</span>
        </h3>
        <div className="mb-4">
          Must add items on the cart before you proceed to check out.
        </div>
        <button className="flex gap-2 bg-[#ee4d2d] p-3 w-48 mx-auto text-white rounded-3xl drop-shadow-lg">
          <div className="my-auto">
            <BsArrowLeft></BsArrowLeft>
          </div>
          Return to shop
        </button>
      </div> */}
    </div>
  );
};

export default Cart;
