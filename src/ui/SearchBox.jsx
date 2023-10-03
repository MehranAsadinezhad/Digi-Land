import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  focusInput,
  searchProductsResult,
} from "../features/user/userSlice";
import { getMobiles } from "../services/apiMobiles";
import { getTablets } from "../services/apiTablets";
import { getHandsfree } from "../services/apiHandsfree";
import { getSpeakers } from "../services/apiSpeakers";
import { getSmartWatches } from "../services/apiSmartWatches";

const mobiles = await getMobiles();
const tablets = await getTablets();
const handsfrees = await getHandsfree();
const speakers = await getSpeakers();
const smartWatches = await getSmartWatches();

export default function SearchBox() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const allProducts = [
    ...mobiles,
    ...tablets,
    ...smartWatches,
    ...tablets,
    ...handsfrees,
    ...speakers,
  ];
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
