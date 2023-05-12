import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/Auth/authSlice";
import userSlice from "./slice/User/userSlice";
import accountSlice from "./slice/Account/accountSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
    account: accountSlice
  },
 
});

export default store;
