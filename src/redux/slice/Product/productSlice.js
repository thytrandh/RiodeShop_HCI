import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";

const initialState = {
  currentProduct: null,
  listProduct: [],
  listProductSuggest: [],
  loading: false,
  error: false,
};

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/all-product");
      localStorage.setItem("productData", JSON.stringify(result.data.data));
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getSuggestProduct = createAsyncThunk(
  "product/getAllProduct",
  async (data, thunkAPI) => {
    const id = 1;
    try {
      const result = await api.get("/api/v1/suggest-product", {
        id,
      });
      localStorage.setItem(
        "suggestProductData",
        JSON.stringify(result.data.data)
      );
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.listProduct = action.payload;
      state.error = false;
    },
    [getAllProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    [getSuggestProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getSuggestProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.listProductSuggest = action.payload;
      state.error = false;
    },
    [getSuggestProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
