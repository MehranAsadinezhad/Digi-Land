import React, { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function ScrollUpButton() {
  
  return (
    <button
      className={`fixed z-50 bottom-5 left-10 rounded-full bg-primary p-2 text-4xl text-medium transition-all duration-200 hover:bg-sky-600 `}
    >
      <FaCircleArrowUp />
    </button>
  );
}
