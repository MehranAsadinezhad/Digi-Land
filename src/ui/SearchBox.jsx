import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchProductsResult,
  searchProductsResult,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
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
  const [focusInp, setFocusInp] = useState(false);
  const products = useSelector(getSearchProductsResult);
  const navigate = useNavigate();
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
    <form className="relative">
      <input
        placeholder="جستجو"
        defaultValue={searchValue}
        className="w-80 rounded-lg bg-lightGrey px-5 py-2 outline-none transition-all duration-200 focus:w-96 focus:ring-2 focus:ring-primary"
        onChange={(e) => {
          if (searchValue.length > 0) {
            dispatch(searchProductsResult(filteredProducts));
            setFocusInp(true);
          }
          setSearchValue(e.target.value);
        }}
      ></input>

      {focusInp && (
        <div className="rounded-b-l-lg absolute z-50 mt-2 flex h-[460px] w-[460px] flex-col overflow-y-scroll bg-slate-200/20 backdrop-blur-lg">
          {focusInp && (
            <button
              onClick={() => setFocusInp(false)}
              className="rounded-lg bg-red-600 px-3 py-1 text-medium"
            >
              بستن پنجره
            </button>
          )}
          <ul className="rounded-b-l-lg mt-2 flex flex-col items-center ">
            {products.map((items) => (
              <li
                key={Math.random()}
                className="flex w-full cursor-pointer items-center gap-2 p-5 transition-all duration-200 hover:bg-slate-200/30"
                onClick={() => {
                  navigate(`/product/${items.id}`);
                  dispatch(searchProductsResult([]));
                  setFocusInp(false);
                  setSearchValue("");
                }}
              >
                <img className="w-24" src={items.image} alt={items.name}></img>
                <h1 className="font-shabnamBold text-lg">{items.name}</h1>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
