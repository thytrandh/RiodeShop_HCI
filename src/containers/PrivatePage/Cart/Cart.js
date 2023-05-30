import React, { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash, BsArrowLeft } from "react-icons/bs";
import empty_cart from "../../../assets/images/cart/empty-cart.jpg";
import {
  cartFetch,
  listOrder,
  removeCart,
  updateCart,
} from "../../../redux/slice/Cart/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, loading, error } = useSelector((state) => state.cart);
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [carts, setCarts] = useState([]);
  const [disable, setDisable] = useState(true);
  const [total, setTotal] = useState(0);
  const [length, setLength] = useState(0);
  const [selected, setSelected] = useState(false);

  console.log(carts);
  useEffect(() => {
    dispatch(cartFetch());
  }, [dispatch]);

  useEffect(() => {
    setCarts(cartItems);
  }, [cartItems]);

  useEffect(() => {
    let subTotal = 0;
    let length = 0;
    setDisable(true);
    carts?.map((cart) => {
      if (cart.isChecked) {
        length = length + 1;
        subTotal += cart.totalPrice * cart.quantity;
        setDisable(false);
      }
      return subTotal;
    });
    setTotal(subTotal);
    setLength(length);
  }, [carts]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    let tempCart = [];
    if (name === "allSelect") {
      tempCart = carts.map((cart) => {
        return { ...cart, isChecked: checked };
      });
      setCarts(tempCart);
      setDisable(!disable);
    } else {
      tempCart = carts.map((cart) =>
        cart.stock.product.productName === name
          ? { ...cart, isChecked: checked }
          : cart
      );
      setCarts(tempCart);
    }
  };
  const handleIncreaseCart = (cartItem) => {
    if (cartItem.quantity < cartItem.stock.quantity) {
      const productCart = {
        id: cartItem.id,
        product: cartItem.product,
        quantity: cartItem.quantity + 1,
        totalPrice: cartItem.totalPrice,
        size: cartItem.size,
        color: cartItem.color,
        account: cartItem.account.id,
      };
      const itemIndex = carts.findIndex((item) => item.id === cartItem.id);
      const cart = [...carts];
      cart[itemIndex] = {
        ...carts[itemIndex],
        quantity: productCart.quantity,
      };
      setCarts(cart);
      dispatch(updateCart(productCart));
    }
  };
  const handleDecreaseCart = (cartItem) => {
    if (cartItem.quantity > 1) {
      const productCart = {
        id: cartItem.id,
        product: cartItem.product,
        quantity: cartItem.quantity - 1,
        totalPrice: cartItem.totalPrice,
        size: cartItem.size,
        color: cartItem.color,
        account: cartItem.account.id,
      };
      const itemIndex = carts.findIndex((item) => item.id === cartItem.id);
      const cart = [...carts];
      cart[itemIndex] = {
        ...carts[itemIndex],
        quantity: productCart.quantity,
      };
      setCarts(cart);
      dispatch(updateCart(productCart));
    }
  };
  const handleRemoveFromCart = (cartItem) => {
    const productCart = {
      id: cartItem.id,
    };
    const cart = [...carts];
    setCarts(cart.filter((item) => item.id !== cartItem.id));
    dispatch(removeCart(productCart));
    localStorage.setItem("cartItems", JSON.stringify(cart));
    window.location.reload();
  };
  const handleOrder = (cartItem) => {
    dispatch(listOrder(cartItem));
    Navigate("/private/checkout");
  };

  const parseInterger = (intCurrency) => {
    return parseInt(
      intCurrency.split(",")[0] +
        intCurrency.split(",")[1] +
        intCurrency.split(",")[2] +
        intCurrency.split(",")[3]
    );
  };
  const convertPrice = (price) => {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
    });

    return formatter.format(price);
  };
  return (
    <div className="mx-5 py-1">
      <hr className=" !border-slate-300"></hr>
      <h4 className="">Shopping Cart</h4>
      <div className="text-sm mb-3 text-gray-500">
        You have {carts?.length} items in your cart
      </div>

      {carts?.length > 0 ? (
        <div className="py-1">
          <div className="bg-white font-medium text-sm rounded-xl py-4 grid grid-cols-12 drop-shadow-lg">
            <div className="col-start-1 col-span-1 gap-4 flex items-center justify-center"></div>
            <div className="col-start-2 text-center">Product</div>
            <div className="col-start-8 col-span-1 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-1 text-center">Total</div>
          </div>
          {carts.map((cartItem) => (
            <div
              key={cartItem.cartId}
              className="my-3 bg-white rounded-xl drop-shadow-md"
            >
              <div className="py-4 grid grid-cols-12 place-items-center text-sm">
                <input
                  name={cartItem.stock.product.productName}
                  type="checkbox"
                  className="col-start-1 w-4 h-4 cursor-pointer"
                  checked={cartItem.isChecked || false}
                  onChange={handleChange}
                />
                <div className="col-start-2 w-full grid justify-center items-center drop-shadow-lg transition-all cursor-pointer mb-3">
                  <div className="group drop-shadow-xl text-lg h-28 rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    {cartItem.stock?.product?.productImage?.map(
                      (item) =>
                        item.isDefault === 1 && (
                          <img
                            className=" h-28 object-cover transition-transform duration-500 group-hover:scale-125"
                            src={item.imageLink}
                            alt=""
                          />
                        )
                    )}
                  </div>
                </div>
                <div
                  className="col-start-3 col-span-3 ml-5 text-sm font-medium text-gray-700 text-left cursor-pointer"
                  onClick={() => Navigate(`/products/${cartItem.product}`)}
                >
                  {cartItem.stock.product.productName}
                </div>
                <div className="col-start-8 text-center text-lg font-medium text-[#ee4d2d]">
                  ${convertPrice(cartItem.totalPrice)}
                </div>
                <div className="col-start-9 col-span-2">
                  <div className="w-36 h-8 rounded-2xl border border-black grid grid-cols-3 place-items-center">
                    <div
                      className="cursor-pointer h-full w-full grid place-items-center"
                      onClick={() => handleDecreaseCart(cartItem)}
                    >
                      <AiOutlineMinus></AiOutlineMinus>
                    </div>
                    <span className="text-lg">{cartItem.quantity}</span>
                    <div
                      className="cursor-pointer h-full w-full grid place-items-center"
                      onClick={() => handleIncreaseCart(cartItem)}
                    >
                      <AiOutlinePlus></AiOutlinePlus>
                    </div>
                  </div>
                </div>
                <div className=" text-center text-lg font-medium text-[#ee4d2d]">
                  ${convertPrice(cartItem.totalPrice * cartItem.quantity)}
                </div>
                <BsTrash
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => handleRemoveFromCart(cartItem)}
                ></BsTrash>
              </div>
            </div>
          ))}
          <div className="sticky mb-5 !z-50 bottom-0 items-center grid grid-cols-11 place-items-center bg-white drop-shadow-[0_-5px_5px_rgba(0,0,0,0.10)] border rounded-md ">
            <div className="flex gap-x-3 col-span-2 justify-center content-center w-full">
              <input
                type="checkbox"
                name="allSelect"
                className="w-4 h-4 cursor-pointer my-auto"
                checked={!carts?.some((cart) => cart?.isChecked !== true)}
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
              <div className="text-gray-700">({length} product)</div>
              <span className="text-xl text-[#ee4d2d]">
                ${convertPrice(total)}
              </span>
            </div>
            <button
              className={`${
                disable
                  ? "bg-slate-500 opacity-60"
                  : "bg-[#ee4d2d] hover:bg-[#ff3700] hover:drop-shadow-xl "
              } col-start-10 col-span-2  m-3 p-2 text-sm font-medium text-white rounded-lg items-right w-48 h-12 transition-all`}
              disabled={disable}
              onClick={() => handleOrder(carts)}
            >
              Go to checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mb-2">
          <div className="flex justify-center items-center">
            <img className="h-60 w-72" src={empty_cart} alt=""></img>
          </div>
          <h3>
            Your cart is <span className="text-[#ee4d2d]">empty!</span>
          </h3>
          <div className="mb-4">
            Must add items on the cart before you proceed to check out.
          </div>
          <button
            onClick={() => {
              Navigate("/");
            }}
            className="flex gap-2 bg-[#ee4d2d] p-3 w-48 mx-auto mb-10 text-white rounded-3xl drop-shadow-lg"
          >
            <div className="my-auto">
              <BsArrowLeft></BsArrowLeft>
            </div>
            Return to shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
