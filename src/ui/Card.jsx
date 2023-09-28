import React from "react";
import { NavLink } from "react-router-dom";
import CardButton from "../ui/CartButton";
import { separate } from "../utils/helpers";
import toast from "react-hot-toast";

export default function Card({ data }) {
  return (
    <div className="my-12 flex h-[340px] w-[200px] flex-col items-center justify-around gap-y-3 rounded-xl bg-medium px-3 text-center shadow-2xl transition-all duration-200 hover:bg-lightGrey">
      <NavLink to={`/product/${data.id}`}>
        <div className="relative bottom-4 flex h-[190px] w-[190px] items-center rounded-full bg-medium shadow-lg">
          <img src={data.image} alt={data.id} className="m-auto w-40"></img>
        </div>
      </NavLink>
      <NavLink to={`/product/${data.id}`} className="text-grey">
        {data.name}
      </NavLink>
      <CardButton
        onClick={() => {
          toast.success("محصول به سبد خرید اضافه شد");
        }}
        className="rounded-xl bg-primary px-3 py-1.5 text-medium transition-all duration-200 hover:bg-sky-600"
      >
        افزودن به سبد خرید
      </CardButton>
      <h1 className="mb-5 text-grey">{separate(data.price)} تومان</h1>
    </div>
  );
}
