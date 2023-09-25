import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMobiles } from "../../services/apiMobiles";
import Loader from "../../ui/loader";
import MobilesSlider from "../mobiles/MobilesSlider";


export default function HomeMobiles() {
  const {
    data: mobiles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["mobiles"],
    queryFn: getMobiles,
  });
  if (isLoading) return <Loader />;
  return (
    <div className="my-5 h-[500px] w-full rounded-3xl bg-greenn px-8 py-5">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl text-medium">موبایل ها</h1>
        <div className="border-b-2 border-medium"></div>
      </div>
      <div>
        <MobilesSlider mobiles={mobiles}/>
      </div>
    </div>
  );
}
