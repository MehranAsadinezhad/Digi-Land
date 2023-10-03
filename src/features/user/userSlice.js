import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  auth: false,
  searchProducts: [],
  focusInp:false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsername(state, action) {
      state.username = action.payload;
    },
    userLogined(state, action) {
      state.auth = action.payload;
    },
    searchProductsResult(state, action) {
      state.searchProducts = action.payload;
    },
    focusInput(state,action){
      state.focusInp = action.payload;
    },
  },
});

export const { addUsername,userLogined,focusInput, searchProductsResult } =
  userSlice.actions;
export default userSlice.reducer;

export const getUsername = (state) => state.user.username;
export const getAuth = (state) => state.user.auth;
export const getSearchProductsResult = (state) => state.user.searchProducts;
export const getFocusInp = (state)=> state.user.focusInp;
