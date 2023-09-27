import React from "react";

export default function FilterProducts({ products }) {
  return (
    <div className="flex items-center justify-center gap-x-5 px-4 py-5">
      <form>
        <label for="brands" className="text-lg text-dark">
          فیلتر برند:{" "}
        </label>
        <select className="cursor-pointer rounded-lg bg-primary px-2 py-1 text-center text-lg text-medium">
          <option value="" className="bg-medium text-center text-dark">
            Volvo
          </option>
          <option value="" className="bg-medium text-center text-dark">
            Saab
          </option>
        </select>
      </form>
      <button className="rounded-lg px-2 py-1 text-lg text-dark underline-offset-8  focus:bg-primary focus:text-medium">
        گران ترین
      </button>
      <button className="rounded-lg px-2 py-1 text-lg text-dark underline-offset-8  focus:bg-primary focus:text-medium">
        ارزان ترین
      </button>
      <h1 className="rounded-lg bg-primary px-2 py-1 text-lg text-medium">
        تعداد محصولات: 10
      </h1>
    </div>
  );
}
