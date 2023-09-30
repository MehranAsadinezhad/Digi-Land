import React from "react";
import TabletsSlider from "../tablets/TabletsSlider";

export default function HomeTablets({tablets}) {
  return (
    <div className="my-10 h-[500px] w-full rounded-3xl bg-secondary px-8 py-5">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-shabnamBold text-2xl text-dark">تبلت</h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <TabletsSlider tablets={tablets} />
      </div>
    </div>
  );
}
