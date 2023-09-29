import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getCard } from "../features/cart/cartSlice";

export default function Header({ quantity }) {
  const cart = useSelector(getCard);
  console.log(cart);
  return (
    <header className="col-span-12 flex items-center justify-between border-b-2 bg-white px-8">
      <div className="flex items-center gap-x-10">
        <Link
          to="/"
          className="p-2 font-skranjiBold text-2xl tracking-wider text-grey transition-colors duration-300 hover:text-dark"
        >
          DIGI LAND
        </Link>
        <input
          placeholder="جستجو"
          className="w-80 rounded-lg bg-lightGrey px-5 py-2 outline-none transition-all duration-200 focus:w-96 focus:ring-2 focus:ring-primary"
        ></input>
      </div>
      <div className="flex items-center gap-x-10">
        <NavLink
          to="user"
          className="rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <FaUser />
        </NavLink>
        <NavLink
          to="cart"
          className="relative rounded-lg p-2 font-sans text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <FaCartShopping />
          {cart.length > 0 && (
            <div className="absolute -right-2 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-medium ring-2 ring-primary ring-offset-1 dark:border-gray-900 lg:h-5 lg:w-5 lg:text-sm">
              {cart.length}
            </div>
          )}
        </NavLink>
      </div>
    </header>
  );
}
