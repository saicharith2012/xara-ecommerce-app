import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../slices/cartSlice.js"

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
});

