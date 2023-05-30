import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/Auth/authSlice";
import userSlice from "./slice/User/userSlice";
import accountSlice from "./slice/Account/accountSlice";
import productSlice from "./slice/Product/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
    account: accountSlice,
    product: productSlice
  },
 
});

export default store;
