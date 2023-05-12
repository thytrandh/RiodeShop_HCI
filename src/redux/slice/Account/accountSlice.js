import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const updateUser = createAsyncThunk(
  "account/updateUser",
  async (data, thunkAPI) => {
    const { id, address, gender, firstName, lastName, email } = data;

    try {
      const result = await api.put("/api/v1/user", {
        id,
        address,
        gender,
        firstName,
        lastName,
        email
      });
    //   console.log(result.data);
      return result.data;
    } catch (error) {
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
      state.currentUser = action.payload;
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


