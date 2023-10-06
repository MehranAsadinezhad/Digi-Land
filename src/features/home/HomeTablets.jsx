import React from "react";
import TabletsSlider from "../tablets/TabletsSlider";

export default function HomeTablets({tablets}) {
  return (
    <div className="my-5 h-[500px] w-full rounded-3xl bg-third px-8 py-5 sm:my-10">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center font-shabnamBold text-2xl tracking-widest text-dark sm:text-3xl">
          تبلت
        </h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <TabletsSlider tablets={tablets} />
      </div>
    </div>
  );
}
