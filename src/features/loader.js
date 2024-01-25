import { createSlice } from "@reduxjs/toolkit";

const loader = createSlice({
  name: "loader",
  initialState: { isLoading: false },
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

const {setLoader } = loader.actions
export default loader.reducer;
