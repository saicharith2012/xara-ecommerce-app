import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../slices/cartSlice.js"
import authReducer from "../slices/authSlice.js"

export default configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    },
});

