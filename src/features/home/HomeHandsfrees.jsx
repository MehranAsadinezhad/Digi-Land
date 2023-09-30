import React from 'react'
import HandsfreesSlider from "../handsfrees/HandsfreesSlider";

export default function HomeHandsfrees({handsfrees}) {
    return (
      <div className="my-10 shadow-xl h-[500px] w-full rounded-3xl bg-secondary px-8 py-5">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-center tracking-widest font-shabnamBold text-3xl text-dark">
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
