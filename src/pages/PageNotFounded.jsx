import React from 'react'
import errorImg from "../assets/images/404.png";
import { Link } from 'react-router-dom';

export default function PageNotFounded() {
  return (
    <div className="flex flex-col items-center gap-8 p-10">
      <img src={errorImg} className="w-72" alt="error"></img>
      <Link
        to="/"
        className="z-20 rounded-xl bg-primary px-4 py-3 text-medium transition-all duration-200 hover:bg-indigo-600"
      >
        برگشت به صفحه ی اصلی
      </Link>
    </div>
  );
}
