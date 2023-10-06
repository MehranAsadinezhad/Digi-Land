import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  focusInput,
  getFocusInp,
  getSearchProductsResult,
  searchProductsResult,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

export default function SearchResult() {
  const focusInp = useSelector(getFocusInp);
  const products = useSelector(getSearchProductsResult);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      {focusInp && (
        <div className="sm:rounded-b-l-lg fixed z-50 flex h-screen w-screen pb-16 flex-col gap-2 overflow-y-scroll bg-slate-200/20 backdrop-blur-lg  sm:h-screen sm:w-[460px] sm:gap-3">
          {focusInp && (
            <div className="flex items-center gap-x-2 self-end bg-red-500 p-2 text-medium transition-all duration-200 hover:bg-red-600 sm:gap-x-3 sm:px-3">
              <button
                onClick={() => {
                  dispatch(focusInput(false));
                }}
              >
                بستن پنجره
              </button>
              <FaXmark className="sm:text-lg" />
            </div>
          )}
          <ul className="rounded-b-l-lg flex flex-col items-center ">
            {products.map((items) => (
              <li
                key={Math.random()}
                className="flex w-full cursor-pointer items-center gap-1 p-2 transition-all duration-200 hover:bg-slate-500/50 sm:gap-2 sm:p-5"
                onClick={() => {
                  navigate(`/product/${items.id}`);
                  dispatch(searchProductsResult([]));
                  dispatch(focusInput(false));
                }}
              >
                <img
                  className="w-16 sm:w-24"
                  src={items.image}
                  alt={items.name}
                ></img>
                <h1 className="font-shabnamBold sm:text-lg">
                  {items.name}
                </h1>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
