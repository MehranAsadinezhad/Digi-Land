import React from "react";

export default function CartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-primary px-3 py-1.5 text-medium transition-all duration-200 hover:bg-sky-600"
    >
      افزودن به سبد خرید
    </button>
  );
}
