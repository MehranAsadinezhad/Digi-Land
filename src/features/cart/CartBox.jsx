import React from "react";
import { Link } from "react-router-dom";
import { separate } from "../../utils/helpers";
import { FaStore } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";
import { getAuth } from "../user/userSlice";

export default function CartBox() {
  const totalPrices = useSelector(getTotalCartPrice);
  const auth = useSelector(getAuth);
  return (
    <>
      <h1 className="flex items-center gap-x-3 font-shabnamBold text-lg">
        <FaStore className="text-lg text-primary" />
        مجموع قیمت: {separate(totalPrices)} تومان
      </h1>
      <div className="flex items-center gap-x-3">
        <Link
          to={`${auth ? "" : "/signup"}`}
          className="rounded-xl bg-primary px-3 py-1.5 text-medium transition-all duration-200 hover:bg-indigo-600"
        >
          ثبت سفارش
        </Link>
        <Link
          to="/"
          className="rounded-xl bg-primary px-3 py-1.5 text-medium transition-all duration-200 hover:bg-indigo-600"
        >
          ادامه خرید
        </Link>
      </div>
    </>
  );
}
