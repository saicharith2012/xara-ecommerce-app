import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userRequest } from "../requestMethods";

export const fetchUserStats = createAsyncThunk(
  "stats/fetchUserStats",
  async (initialValue, thunkAPI) => {
    try {
      const response = await userRequest.get("users/user-stats");

      const updatedStats = initialValue.map((month, index) => {
        const monthData = response.data.data.find(
          (item) => item._id - 1 === index
        );
        if (monthData) {
          return { ...month, "Active User": monthData.total };
        }
        return month;
      });

      return updatedStats;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const statSlice = createSlice({
  name: "stats",
  initialState: {
    userStats: [],
    productStats: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUserStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userStats = action.payload;
        state.error = null;
      })
      .addCase(fetchUserStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch products";
      })
  },
});

export default statSlice.reducer;
