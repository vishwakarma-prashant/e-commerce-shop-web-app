import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // console.log(action);
      state.cart.push(action.payload.product.obj);
    },
    removeFromCart: (state, action) => {
      // console.log(action.payload.product.obj.products_id);

      let count = 0;
      state.cart = state.cart.filter((item) => {
        if (item.$id === action.payload.product.obj.$id && count == 0) {
          count++;
          return false;
        } else return true;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
