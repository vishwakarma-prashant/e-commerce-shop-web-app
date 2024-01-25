import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsReducer";
import cartReducer from "../features/CartReducer";
import userReducer from "../features/userReducer";
import loader from "../features/loader";

const store = configureStore({
  reducer: {
    loader:loader,
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
