import React from "react";
import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex items-center justify-center border-t-2 p-2 sm:p-3">
      <div className="flex items-center gap-x-3">
        <Link
          to="/home"
          className="sm:p-2  font-skranjiBold sm:text-2xl text-grey transition-colors duration-300 hover:text-primary"
        >
          DIGI LAND
        </Link>
        <h1 className="sm:text-lg">با من در ارتباط باشید</h1>
        <a
          rel="noreferrer"
          className="flex items-center gap-x-1 rounded-xl bg-grey px-2 py-1 sm:px-3  font-skranji sm:text-lg capitalize text-medium transition-all duration-200 hover:bg-dark"
          href="https://github.com/MehranAsadinezhad"
          target="_blank"
        >
          github
          <span className="sm:text-2xl">
            <FaGithubAlt />
          </span>
        </a>
      </div>
    </div>
  );
}
