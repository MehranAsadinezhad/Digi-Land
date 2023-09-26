import React from "react";
import { getSmartWatches } from "../../services/apiSmartWatches";
import SmartWatchesSlider from "../smartWatches/SmartWatchesSlider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../ui/loader";

export default function HomeSmartWatches() {
  const {
    data: smartWatches,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["smartWatches"],
    queryFn: getSmartWatches,
  });
  if (isLoading) return <Loader />;
  return (
    <div className="my-5 h-[500px] w-full rounded-3xl bg-purple-300 px-8 py-5">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl text-dark">ساعت های هوشمند</h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <SmartWatchesSlider smartWatches={smartWatches} />
      </div>
    </div>
  );
}
