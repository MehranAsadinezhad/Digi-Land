import React from "react";

export default function FilterProducts() {
  return (
    <div className="flex items-center gap-x-3">
      <select>
        <option></option>
      </select>
      <button className="px-2 py-1 text-lg text-primary">گران ترین</button>
      <button className="px-2 py-1 text-lg text-primary">ارزان ترین</button>
      <h1 className="bg-sky-200 px-2 py-1 text-lg text-primary">
        تعداد محصولات: 10
      </h1>
    </div>
  );
}
