import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userRequest } from "../requestMethods.js";

// Define the asynchronous thunk
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await userRequest.get("products/all-products");
      return response.data.data;
    } catch (error) {
      // Reject with an error message if the operation fails
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// action for delete product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const response = await userRequest.delete(
        `products/delete-product/${id}`
      );
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// update product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (updatedProduct, thunkAPI) => {
    try {
      const response = await userRequest.put(
        `products/update-product/${updatedProduct._id}`,
        updatedProduct
      );

      // console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// adding a product
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product, thunkAPI) => {
    try {
      const response = await userRequest.post(
        "/products/create-product",
        product
      );

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch products";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.splice(
          state.products.findIndex((item) => item._id === action.payload._id),
          1
        );
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to delete the product.";
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.splice(
          state.products.findIndex((item) => item._id === action.payload._id),
          1,
          action.payload
        );
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to update the product.";
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to update the product.";
      });
  },
});

export default productSlice.reducer;
