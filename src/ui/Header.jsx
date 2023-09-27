import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="col-span-12 flex items-center justify-between border-b-2 bg-white px-8">
      <div className="flex items-center gap-x-10">
        <Link to="/home" className="p-2 tracking-wider font-skranjiBold text-2xl text-grey transition-colors duration-300 hover:text-dark">
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
          className="rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <FaCartShopping />
        </NavLink>
      </div>
    </header>
  );
}
