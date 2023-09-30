import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/images/404.png";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center gap-8 p-10">
      <img src={errorImg} className="w-72" alt="error"></img>
      <h1 className="text-lg text-grey">{error.data || error.message}</h1>
      <Link
        to="/"
        className="z-20 rounded-xl bg-primary px-4 py-3 text-medium transition-all duration-200 hover:bg-indigo-600"
      >
        برگشت به صفحه ی اصلی
      </Link>
    </div>
  );
}
