import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProductsResult, searchBox } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const products = useSelector(getSearchProductsResult);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <ul className="absolute z-50 flex h-[400px] w-[400px] flex-col gap-5 overflow-y-scroll bg-slate-200/20 px-10 py-5 backdrop-blur-lg">
      {products.map((items) => (
        <li
          onClick={() => {
            navigate(`/product/${items.id}`);
            dispatch(searchBox(false));
          }}
          className="flex cursor-pointer items-center gap-2"
          key={items.id}
        >
          <img className="w-24" src={items.image} alt={items.name}></img>
          <h1 className="text-lg">{items.name}</h1>
        </li>
      ))}
    </ul>
  );
}
