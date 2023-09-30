import React from "react";
import SmartWatchesSlider from "../smartWatches/SmartWatchesSlider";


export default function HomeSmartWatches({smartWatches}) {
  return (
    <div className="my-10 h-[500px] w-full rounded-3xl bg-secondary px-8 py-5">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-shabnamBold text-2xl text-dark">ساعت هوشمند</h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <SmartWatchesSlider smartWatches={smartWatches} />
      </div>
    </div>
  );
}
