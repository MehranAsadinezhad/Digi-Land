import React from 'react'
import HandsfreesSlider from "../handsfrees/HandsfreesSlider";

export default function HomeHandsfrees({handsfrees}) {
    return (
        <div className="my-5 h-[500px] w-full rounded-3xl bg-lime-200 px-8 py-5">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-shabnamBold text-dark">هندزفری</h1>
                <div className="border-b-2 border-dark"></div>
            </div>
            <div>
                <HandsfreesSlider handsfrees={handsfrees} />
            </div>
        </div>
    );
}
