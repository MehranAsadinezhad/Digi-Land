import React from "react";
import { useDispatch } from "react-redux";
import logo from "../assets/images/logo-light.png";
import { Link, NavLink } from "react-router-dom";
import { focusInput, focusMenu } from "../features/user/userSlice";
import { FaHome, FaMobileAlt } from "react-icons/fa";
import { IoTabletPortraitSharp, IoWatch } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { PiSpeakerHifiFill } from "react-icons/pi";

export default function Menu() {
  const dispatch = useDispatch();
  // const visibleMenu = useSelector(getVisibleMenu);
  return (
    <div className="my-10 flex h-screen w-screen flex-col items-center gap-5">
      <img alt="logo" src={logo} className="mb-5 w-40 rounded-full"></img>
      <ul className="flex flex-col items-center gap-y-3">
        <li
          onClick={() => {
            dispatch(focusInput(false));
            dispatch(focusMenu(false));
          }}
          className="rounded-lg border-b-2 p-2 text-2xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
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
            dispatch(focusMenu(false));
          }}
          className="rounded-lg border-b-2 p-2 text-2xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="/mobiles" className="flex items-center gap-x-3">
            <span>
              <FaMobileAlt />
            </span>
            <span>موبایل</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
            dispatch(focusMenu(false));
          }}
          className="rounded-lg border-b-2 p-2 text-2xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="/tablets" className="flex items-center gap-x-3">
            <span>
              <IoTabletPortraitSharp />
            </span>
            <span>تبلت</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
            dispatch(focusMenu(false));
          }}
          className="rounded-lg border-b-2 p-2 text-2xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="/smartWatches" className="flex items-center gap-x-3">
            <span>
              <IoWatch />
            </span>
            <span>ساعت هوشمند</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
            dispatch(focusMenu(false));
          }}
          className="rounded-lg border-b-2 p-2 text-2xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="/handsfrees" className="flex items-center gap-x-3">
            <span>
              <FaHeadphones />
            </span>
            <span>هندزفری</span>
          </NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(focusInput(false));
            dispatch(focusMenu(false));
          }}
          className="rounded-lg border-b-2 p-2 text-2xl text-grey transition-colors duration-200 hover:bg-lightGrey hover:text-dark"
        >
          <NavLink to="/speakers" className="flex items-center gap-x-3">
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
