import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSpeakers } from "../../services/apiSpeakers";
import Loader from "../../ui/loader";
import SpeakersSlider from "../speakers/SpeakersSlider";

export default function HomeTablets() {
  const {
    data: speakers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["speakers"],
    queryFn: getSpeakers,
  });
  if (isLoading) return <Loader />;
  return (
    <div className="my-5 h-[500px] w-full rounded-3xl bg-orange-300 px-8 py-5">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl text-dark">اسپیکر ها</h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <SpeakersSlider speakers={speakers} />
      </div>
    </div>
  );
}
