import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getCard } from "../features/cart/cartSlice";
import { getAuth, getUsername } from "../features/user/userSlice";

import SearchBox from "./SearchBox";
import { GrMenu } from "react-icons/gr";

export default function Header() {
  const cart = useSelector(getCard);
  const auth = useSelector(getAuth);
  const username = useSelector(getUsername);

  return (
    <header className="col-span-12 flex flex-col justify-around gap-x-2 border-b-2 bg-white md:flex md:flex-row md:items-center md:justify-between md:px-8">
      <div className="flex items-center justify-around gap-x-3 sm:gap-x-10">
        <Link
          to="/"
          className="text-center font-skranjiBold text-2xl text-grey transition-colors duration-300 hover:text-dark sm:p-2 sm:tracking-wider"
        >
          DIGI LAND
        </Link>
        <SearchBox />
      </div>
      <div className="flex items-center justify-around gap-x-5 sm:gap-x-10">
        <NavLink
          to="/menu"
          className="rounded-lg text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark sm:p-2 sm:text-xl md:hidden"
        >
          <GrMenu />
        </NavLink>
        {!auth ? (
          <NavLink
            to="/signup"
            className="rounded-lg text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark sm:p-2 sm:text-xl"
          >
            <FaUser />
          </NavLink>
        ) : (
          <h1 className="font-shabnamBold text-xl text-primary">
            {username}
          </h1>
        )}
        <NavLink
          to="/cart"
          className="relative  rounded-lg text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark sm:p-2 sm:text-xl"
        >
          <FaCartShopping />
          {cart.length > 0 && (
            <div className="absolute -right-4 -top-3 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-center text-sm font-bold text-medium ring-2 ring-grey ring-offset-2 sm:-right-2 sm:-top-1 sm:h-6 sm:w-6 lg:h-5 lg:w-5 lg:text-sm">
              {cart.length}
            </div>
          )}
        </NavLink>
      </div>
    </header>
  );
}
