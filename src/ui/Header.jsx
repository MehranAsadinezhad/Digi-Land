import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="col-span-12 flex items-center justify-between border-b-2 bg-white px-8">
      <div className="flex items-center gap-x-8">
        <Link className="p-2 font-skranjiBold text-2xl text-dark">
          DIGI PHONE
        </Link>
        <input
          placeholder="جستجو"
          className="bg-lightGrey w-80 rounded-lg px-5 py-2 outline-none transition-all duration-200 focus:w-96 focus:ring-2 focus:ring-primary"
        ></input>
      </div>
      <div className="flex items-center gap-x-10">
        <Link className="hover:bg-lightGrey rounded-lg p-2 text-xl text-dark transition-colors duration-200">
          <FaUser />
        </Link>
        <Link className="hover:bg-lightGrey rounded-lg p-2 text-xl text-dark transition-colors duration-200">
          <FaCartShopping />
        </Link>
      </div>
    </header>
  );
}
