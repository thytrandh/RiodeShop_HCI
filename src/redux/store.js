import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/Auth/authSlice";
import userSlice from "./slice/User/userSlice";
import accountSlice from "./slice/Account/accountSlice";
import cartReducer from "./slice/Cart/cartSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    user: userSlice,
    account: accountSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
