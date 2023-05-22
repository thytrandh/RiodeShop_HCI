import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../api/api";
import { clearAuthHeader, setAuthHeader } from "../../api/setHeader";
import { message } from "antd";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const { email, password } = data;

    const result = await api.post("/api/v1/auth/authentication", {
      email,
      password,
    });
    setAuthHeader(result.data.token);
    localStorage.setItem("isLogin", true);
    return result.data;
  } catch (error) {
    message.error(
      "LOGIN FAIL! Please recheck email adress and password and try again."
    );
    const errMessage = error.response.data.message;
    return thunkAPI.rejectWithValue(errMessage);
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const { email, firstName, lastName, password } = data;

      console.log(data);
      //call API
      const result = await api.post("/api/v1/auth/register", {
        email,
        firstName,
        lastName,
        password,
      });
      // if (result.data?.statusCodeValue === 400) {
      //   message.error("REGISTER FAIL! Email is already taken");
      // } else {
      //   setAuthHeader(result.data.body.token);
      //   localStorage.setItem("isLogin", true);
      // }
      setAuthHeader(result.data.token);
      localStorage.setItem("isLogin", true);
      console.log(result.data);
      return result.data; //payload
    } catch (error) {
      message.error("REGISTER FAIL! Please check again");
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      clearAuthHeader();
    },
  },
  extraReducers: {
    //Login
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Register
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Verify
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
