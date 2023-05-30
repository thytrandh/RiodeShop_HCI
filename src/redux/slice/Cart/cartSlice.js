import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../api/api";
import { setAuthHeader } from "../../api/setHeader";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  orderItems: localStorage.getItem("orderItems")
    ? JSON.parse(localStorage.getItem("orderItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  count: 1,
  loading: false,
  check: false,
  message: "",
  error: false,
  paypalLink: "",
};

export const getProductById = createAsyncThunk(
  "getProductById",
  async (data, thunkAPI) => {
    try {
      const result = await api.get(`/api/v1/product/${data}`);
      return result.data;
    } catch (error) {
      const errMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);
export const fetchProductRelated = createAsyncThunk(
  "fetchProductRelated",
  async (data, thunkAPI) => {
    try {
      const result = await api.get(`/api/v1/suggest-product?id=${data}`);
      return result.data;
    } catch (error) {
      const errMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);
export const cartFetch = createAsyncThunk("cartfetch", async (thunkAPI) => {
  try {
    const result = await api.get("/api/v1/get-cart-items");
    return result.data;
  } catch (error) {
    const errMessage = error.response.data.message;
    return thunkAPI.rejectWithValue(errMessage);
  }
});
export const addCart = createAsyncThunk("addcart", async (data, thunkAPI) => {
  try {
    const result = await api.post("/api/v1/add-cart-item", data);
    return result.data;
  } catch (error) {
    const errMessage = error.response.data.message;
    return thunkAPI.rejectWithValue(errMessage);
  }
});
export const updateCart = createAsyncThunk(
  "updatecart",
  async (data, thunkAPI) => {
    try {
      const result = await api.put(
        `/api/v1/update-cart-item?cartItemID=${data.id}`,
        data
      );
      return result;
    } catch (error) {
      const errMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);
export const removeCart = createAsyncThunk("removecart", async (body) => {
  const res = await fetch(
    `https://onlineshophci.herokuapp.com/api/v1/delete-cart-item?cartItemID=${body.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  return await res.json();
});

// export const createOrder = createAsyncThunk("createOrder", async (data, thunkAPI) => {
//   try {
//     const result = await api.post("/api/v1/add-cart-item", data);
//     return result.data;
//   } catch (error) {
//     const errMessage = error.response.data.message;
//     return thunkAPI.rejectWithValue(errMessage);
//   }
// });
export const payOrder = createAsyncThunk("payorder", async (body) => {
  const res = await fetch("http://localhost:5000/api/cart/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});
export const paypal = createAsyncThunk("paypal", async (body) => {
  const res = await fetch("http://localhost:5000/api/v1/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    mergeInfo(state, { payload }) {
      let order = [];
      order = state.orderItems.map((item) => {
        return {
          ...item,
          fullname: payload.fullname,
          emailOrder: payload.emailOrder,
          phone: payload.phone,
          address: payload.address,
        };
      });
      state.orderItems = [...order];
      localStorage.setItem("orderItems", JSON.stringify(order));
    },
    mergeMethod(state, { payload }) {
      let order = [];
      order = state.orderItems.map((item) => {
        return {
          ...item,
          deliveryMethod: payload.ship,
          paymentMethod: payload.pay,
        };
      });
      state.orderItems = [...order];
      localStorage.setItem("orderItems", JSON.stringify(order));
    },
    listOrder(state, { payload }) {
      if (state.orderItems) {
        state.orderItems = [];
      }
      console.log(payload);
      payload.map((item) => {
        if (item.isChecked) state.orderItems.push(item);
        return state;
      });
      localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
    },
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity: state.cartItems[existingIndex].quantity + state.count,
        };
        toast.info(`Đã thêm ${state.count} quyển vào giỏ`, {
          position: "bottom-right",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: state.count };
        state.cartItems.push(tempProductItem);
        toast.success("Sản phẩm đã được thêm vào giỏ", {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].cartQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Đã xóa sản phẩm", {
            position: "bottom-right",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      localStorage.clear("orderItems");
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      console.log(total);
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-right" });
    },
  },
  extraReducers: {
    //fetchProductRelated
    [fetchProductRelated.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProductRelated.fulfilled]: (state, { payload }) => {
      state.productRelated = payload.data;
      state.loading = false;
    },
    [fetchProductRelated.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //getProductById
    [getProductById.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.items = payload.data;
      state.loading = false;
    },
    [getProductById.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //cartFetch
    [cartFetch.pending]: (state, action) => {
      state.loading = true;
    },
    [cartFetch.fulfilled]: (state, { payload }) => {
      state.cartItems = payload.data;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      state.loading = false;
      state.error = false;
    },
    [cartFetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //addCart
    [addCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addCart.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.message = payload.message;
    },
    [addCart.rejected]: (state, { payload }) => {
      state.loading = true;
      state.message = payload.message;
    },
    //update
    [updateCart.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [updateCart.fulfilled]: (state, { payload }) => {},
    [updateCart.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    //Remove
    [removeCart.pending]: (state, action) => {
      state.loading = true;
    },
    [removeCart.fulfilled]: (state, { payload }) => {
      if (payload.message === "success") {
        toast.success("Sản phẩm đã được thêm vào giỏ", {
          position: "bottom-left",
        });
      }
    },
    [removeCart.rejected]: (state, { payload }) => {
      state.loading = true;
      state.message = payload.message;
    },
    //creatOrder
    [payOrder.pending]: (state, action) => {
      state.loading = true;
    },
    [payOrder.fulfilled]: (state, { payload }) => {
      state.check = payload.checked;
      state.loading = false;
    },
    [payOrder.rejected]: (state, { payload }) => {
      state.loading = true;
      state.checked = payload.checked;
    },
    //paypal
    [paypal.pending]: (state, action) => {
      state.loading = true;
    },
    [paypal.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      // state.paypalLink = payload.payment_link;
      // window.open(state.paypalLink, "Payment with PayPal");
      state.loading = false;
      state.paypalLink = payload.links;
      state.paypalLink.map((item) => {
        if (item.rel === "approve") {
          window.open(item.href, "Payment with PayPal");
        }
      });
    },
    [paypal.rejected]: (state, { payload }) => {
      state.loading = true;
      // state.checked = payload.checked;
    },
  },
});

export const {
  mergeInfo,
  mergeMethod,
  listOrder,
  increment,
  decrement,
  addToCart,
  increaseCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
