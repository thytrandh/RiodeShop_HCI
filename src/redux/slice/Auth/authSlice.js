import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../api/api";
import { setAuthHeader } from "../../api/setHeader";

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
      password
    });
    setAuthHeader(result.data.body.token);
    console.log(result);
    return result.data;
  } catch (error) {
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
        password
      });
      setAuthHeader(result.data.body.token);
      console.log(result);
      return result.data; //payload
    } catch (error) {
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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

export const {} = authSlice.actions;

export default authSlice.reducer;
