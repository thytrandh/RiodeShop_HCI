import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";

const initialState = {
  currentAccount: null,
  loading: false,
  error: false,
};

export const updateUser = createAsyncThunk(
  "account/updateUser",
  async (data, thunkAPI) => {
    const { id, email, firstName, lastName } = data;

    const role= "USER";
    const active = true;

    try {
      const result = await api.put("/api/v1/update-account", {
        id,
        email,
        firstName,
        lastName,
        role,
        active
      });
      message.success("Update successfully!");
      console.log(result.data);
      return result.data;
    } catch (error) {
      message.error("Update fail!");
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: {
    [updateUser.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentAccount = action.payload;
      state.error = false;
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = accountSlice.actions;
export default accountSlice.reducer;
