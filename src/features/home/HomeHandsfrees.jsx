import React from "react";
import HandsfreesSlider from "../handsfrees/HandsfreesSlider";

export default function HomeHandsfrees({ handsfrees }) {
  return (
    <div className="my-5 h-[500px] w-full rounded-3xl bg-third px-8 py-5 shadow-xl sm:my-10">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center font-shabnamBold text-2xl tracking-widest text-dark sm:text-3xl">
          هندزفری
        </h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <HandsfreesSlider handsfrees={handsfrees} />
      </div>
    </div>
  );
}
