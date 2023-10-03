import React from "react";
import SpeakersSlider from "../speakers/SpeakersSlider";

export default function HomeTablets({speakers}) {
  return (
    <div className="my-5 h-[500px] w-full rounded-3xl bg-secondary px-8 py-5 shadow-xl sm:my-10">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center font-shabnamBold text-2xl tracking-widest text-dark sm:text-3xl">
          اسپیکر
        </h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <SpeakersSlider speakers={speakers} />
      </div>
    </div>
  );
}
