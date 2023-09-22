import React from "react";
import logo from "../assets/images/logo-light.png";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaMobileAlt, } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { IoWatch, IoTabletPortraitSharp } from "react-icons/io5";
import { PiSpeakerHifiFill } from "react-icons/pi";
export default function Sidebar() {
  return (
    <div className="col-span-2 col-start-1 border-l-2 flex flex-col items-center py-5">
      <Link to="home">
        <img alt="logo" src={logo} className="w-28"></img>
      </Link>
      <ul className="flex flex-col items-center gap-y-3 py-5">
        <li className="hover:bg-lightGrey rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:text-dark">
          <NavLink to="home" className="flex items-center gap-x-3">
            <span>
              <FaHome />
            </span>
            <span>خانه</span>
          </NavLink>
        </li>
        <li className="hover:bg-lightGrey rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:text-dark">
          <NavLink to="mobiles" className="flex items-center gap-x-3">
            <span>
              <FaMobileAlt />
            </span>
            <span>موبایل</span>
          </NavLink>
        </li>
        <li className="hover:bg-lightGrey rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:text-dark">
          <NavLink to="tablets" className="flex items-center gap-x-3">
            <span>
              <IoTabletPortraitSharp />
            </span>
            <span>تبلت</span>
          </NavLink>
        </li>
        <li className="hover:bg-lightGrey rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:text-dark">
          <NavLink to="smartWatches" className="flex items-center gap-x-3">
            <span>
              <IoWatch />
            </span>
            <span>ساعت هوشمند</span>
          </NavLink>
        </li>
        <li className="hover:bg-lightGrey rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:text-dark">
          <NavLink to="handsfrees" className="flex items-center gap-x-3">
            <span>
              <FaHeadphones />
            </span>
            <span>هندزفری</span>
          </NavLink>
        </li>
        <li className="hover:bg-lightGrey rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:text-dark">
          <NavLink to="speakers" className="flex items-center gap-x-3">
            <span>
              <PiSpeakerHifiFill className="text-2xl" />
            </span>
            <span>اسپیکر</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
