import React, { useState } from "react";

export default function FilterProducts({ products, setSorted }) {
  const [showFilter, setShowFilter] = useState(false);

  function sortMax() {
    const sortedProduct = products.slice().sort((a, b) => b.price - a.price);
    setSorted(sortedProduct);
    setShowFilter(true);
  }
  function sortMin() {
    const sortedProduct = products.slice().sort((a, b) => a.price - b.price);
    setSorted(sortedProduct);
    setShowFilter(true);
  }
  function resetSort() {
    const reSort = products.slice().sort((a,b)=>a.id - b.id)
    setSorted(reSort);
    setShowFilter(false);
  }

  return (
    <div className="flex items-center flex-wrap gap-3 justify-center p-2 sm:gap-x-5 sm:px-4 sm:py-5">
      <h1 className="font-shabnamBold sm:text-lg">فیلتر:</h1>
      <button
        onClick={sortMax}
        className="rounded-lg bg-primary p-1 sm:px-2 sm:py-1 sm:text-lg text-medium transition-all duration-200  focus:bg-indigo-600"
      >
        گران ترین
      </button>
      <button
        onClick={sortMin}
        className="rounded-lg bg-primary p-1 sm:px-2 sm:py-1 sm:text-lg text-medium  transition-all duration-200  focus:bg-indigo-600"
      >
        ارزان ترین
      </button>
      {showFilter && (
        <button
          onClick={resetSort}
          className="rounded-lg bg-red-600 p-1 sm:px-2 sm:py-1 sm:text-lg text-medium"
        >
          حذف فیلتر
        </button>
      )}
      <h1 className="rounded-lg bg-grey p-1 text-center sm:px-2 sm:py-1 sm:text-lg text-medium">
        تعداد محصولات: {products.length}
      </h1>
    </div>
  );
}
