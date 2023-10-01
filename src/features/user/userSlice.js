import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  auth: false,
  searchResult: false,
  searchProducts: [],
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
    searchBox(state, action) {
      state.searchResult = action.payload;
    },
    searchProductsResult(state, action) {
      state.searchProducts = action.payload;
    },
  },
});

export const { addUsername, userLogined, searchBox, searchProductsResult } =
  userSlice.actions;
export default userSlice.reducer;

export const getUsername = (state) => state.user.username;
export const getAuth = (state) => state.user.auth;
export const getSearchResult = (state) => state.user.searchResult;
export const getSearchProductsResult = (state) => state.user.searchProducts;
