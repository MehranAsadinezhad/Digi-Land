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
    <div className="flex items-center justify-center gap-x-5 px-4 py-5">
      <h1 className="font-shabnamBold text-lg">فیلتر ها:</h1>
      <button
        onClick={sortMax}
        className="rounded-lg bg-primary px-2 py-1 text-lg text-medium underline-offset-8 transition-all duration-200  focus:bg-indigo-600"
      >
        گران ترین
      </button>
      <button
        onClick={sortMin}
        className="rounded-lg bg-primary px-2 py-1 text-lg text-medium underline-offset-8 transition-all duration-200  focus:bg-indigo-600"
      >
        ارزان ترین
      </button>
      {showFilter && (
        <button
          onClick={resetSort}
          className="rounded-lg bg-red-600 px-2 py-1 text-lg text-medium"
        >
          حذف فیلتر
        </button>
      )}
      <h1 className="mr-28 rounded-lg bg-grey px-2 py-1 text-lg text-medium">
        تعداد محصولات: {products.length}
      </h1>
    </div>
  );
}
