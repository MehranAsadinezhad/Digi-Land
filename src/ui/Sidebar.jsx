import React from "react";
import logo from "../assets/images/logo-light.png";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaMobileAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { IoWatch, IoTabletPortraitSharp } from "react-icons/io5";
import { PiSpeakerHifiFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { focusInput } from "../features/user/userSlice";
export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="col-span-2 col-start-1 flex flex-col items-center border-l-2 py-5">
      <Link to="home">
        <img alt="logo" src={logo} className="w-20"></img>
      </Link>
      <ul className="flex flex-col items-center gap-y-3 py-5">
        <li
          onClick={() => {
            dispatch(focusInput(false));
          }}
          className="rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="/" className="flex items-center gap-x-3">
            <span>
              <FaHome />
            </span>
            <span>خانه</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
          }}
          className="rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="mobiles" className="flex items-center gap-x-3">
            <span>
              <FaMobileAlt />
            </span>
            <span>موبایل</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
          }}
          className="rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="tablets" className="flex items-center gap-x-3">
            <span>
              <IoTabletPortraitSharp />
            </span>
            <span>تبلت</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
          }}
          className="rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="smartWatches" className="flex items-center gap-x-3">
            <span>
              <IoWatch />
            </span>
            <span>ساعت هوشمند</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
          }}
          className="rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="handsfrees" className="flex items-center gap-x-3">
            <span>
              <FaHeadphones />
            </span>
            <span>هندزفری</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
          }}
          className="rounded-lg p-2 text-xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
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
