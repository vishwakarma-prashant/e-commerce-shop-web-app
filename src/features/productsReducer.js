import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialProducts = {
  products: [
    {
      products_name: "demo",
      products_description: "demo demo demo",
      products_category: "shirt",
      products_price: 60.5,
      products_image: "url",
      products_size: "l",
      products_quantity: 10,
      products_id: "someid123",
    },
  ],
};
const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    loadProducts: (state, action) => {
      state.products = [...action.payload.products];
    },

    filterProducts: (state, action) => {

      // console.log(action);
      
      state.products = state.products.filter((prod) => {
        if (action.payload.category == "all" && action.payload.size == "all") {
          if (prod.products_price > Number(action.payload.range)) {
            return true;
          } else {
            return false;
          }
        }
        // console.log(action.payload.category);
        if (action.payload.category != "all" && action.payload.size == "all") {
          if (
            prod.products_price > Number(action.payload.range) &&
            prod.products_category.toLowerCase() ==
              action.payload.category.toLowerCase()
          ) {
            return true;
          } else {
            return false;
          }
        }
        if (action.payload.category == "all" && action.payload.size != "all") {
          if (
            prod.products_price > Number(action.payload.range) &&
            prod.products_size.toLowerCase() ==
              action.payload.size.toLowerCase()
          ) {
            return true;
          } else {
            return false;
          }
        }
        if (action.payload.category != "all" && action.payload.size != "all") {
          if (
            prod.products_price > Number(action.payload.range) &&
            prod.products_size.toLowerCase() ==
              action.payload.size.toLowerCase() &&
            prod.products_category.toLowerCase() ==
              action.payload.category.toLowerCase()
          ) {
            return true;
          } else {
            return false;
          }
        }
      });
    },
  },
});
// export const selectProducts = createSelector((state)=>state.products[0]);
export const { loadProducts, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
