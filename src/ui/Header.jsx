import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaCartShopping, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../features/cart/cartSlice";
import {
  focusMenu,
  getAuth,
  getFocusMenu,
  getUsername,
} from "../features/user/userSlice";
import SearchBox from "./SearchBox";
import { GrMenu } from "react-icons/gr";

export default function Header({ allProducts }) {
  const cart = useSelector(getCard);
  const auth = useSelector(getAuth);
  const username = useSelector(getUsername);
  const menu = useSelector(getFocusMenu);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <header className="col-span-12 flex flex-col justify-around gap-x-2 border-b-2 bg-white md:flex md:flex-row md:items-center md:justify-between md:px-8">
      <div className="flex items-center justify-around gap-x-3 sm:gap-x-10">
        <Link
          to="/"
          className="text-center font-skranjiBold text-2xl text-grey transition-colors duration-300 hover:text-dark sm:p-2 sm:tracking-wider"
        >
          DIGI LAND
        </Link>
        <SearchBox allProducts={allProducts} />
      </div>
      <div className="flex items-center justify-around gap-x-5 sm:gap-x-10">
        {!menu ? (
          <button
            onClick={() => {
              navigate("/menu");
              dispatch(focusMenu(true));
            }}
            className="rounded-lg text-xl text-grey transition-colors duration-200 sm:p-2 sm:text-xl md:hidden"
          >
            <GrMenu className="text-xl" />
          </button>
        ) : (
          <botton
            onClick={() => {
              navigate(-1);
              dispatch(focusMenu(false));
            }}
            className="rounded-lg text-xl text-grey transition-colors duration-200 sm:p-2 sm:text-xl md:hidden"
          >
            <FaXmark className="text-xl text-red-600" />
          </botton>
        )}
        {!auth ? (
          <NavLink
            to="/signup"
            className="rounded-lg text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark sm:p-2 sm:text-xl"
          >
            <FaUser />
          </NavLink>
        ) : (
          <h1 className="font-shabnamBold text-primary sm:text-xl">
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
