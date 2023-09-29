import React from "react";
import MobilesSlider from "../mobiles/MobilesSlider";


export default function HomeMobiles({mobiles}) {
  return (
    <div className="my-5 h-[500px] w-full rounded-3xl bg-secondary px-8 py-5">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-shabnamBold text-2xl text-dark">موبایل</h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <MobilesSlider mobiles={mobiles} />
      </div>
    </div>
  );
}
