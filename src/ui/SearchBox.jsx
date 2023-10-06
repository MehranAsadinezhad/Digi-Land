import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { focusInput, searchProductsResult } from "../features/user/userSlice";


export default function SearchBox({ allProducts }) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  let filteredProducts;

  if (searchValue.length > 0) {
    filteredProducts = allProducts.filter((i) =>
      i.name.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1").match(searchValue),
    );
  }
  return (
    <form>
      <input
        placeholder="جستجو"
        defaultValue={searchValue}
        className="w-full rounded-lg bg-lightGrey px-2 py-1 outline-none transition-all duration-200 focus:ring-2  focus:ring-primary sm:w-80 sm:px-5 sm:py-2 sm:text-sm sm:focus:w-96"
        onChange={(e) => {
          if (searchValue.length > 0) {
            dispatch(searchProductsResult(filteredProducts));
            dispatch(focusInput(true));
          }
          setSearchValue(e.target.value);
        }}
      ></input>
    </form>
  );
}
