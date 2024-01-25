import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    isLogin: true,
    userId: "",
    orders: [],
  },
  reducers: {
    getUserData: (state, action) => {
      // console.log("reducer called");
      // console.log(state);
      // console.log(action);
      state.username = action.payload.name;
      state.userId = action.payload.userId;
      state.isLogin = action.payload.isLogin;
      // // state.orders.push(action.order);
    },
  },
});

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;
