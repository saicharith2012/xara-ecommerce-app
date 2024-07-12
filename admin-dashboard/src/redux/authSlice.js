import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest, userRequest } from "../requestMethods.js";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ identifier, password }, thunkAPI) => {
    try {
      const response = await publicRequest.post(
        "users/login",
        { identifier, password },
        { withCredentials: true }
      );

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const response = await userRequest.post(
        "users/logout",
        {},
        {
          withCredentials: true,
        }
      );

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loadUserFromToken = createAsyncThunk(
  "auth/loadUserFromToken",
  async (_, thunkAPI) => {
    try {
      const response = await userRequest.get("users/profile", {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    error: false,
  },
  reducers: {
    setUser(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message; // Set error message from payload
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload?.error || "Logout failed"; // Set error message from payload
      })
      .addCase(loadUserFromToken.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loadUserFromToken.rejected, (state, action) => {
        state.error = action.error.message; // Set error message from payload
      });
  },
});

export const { clearUser, setUser } = authSlice.actions;
export default authSlice.reducer;
