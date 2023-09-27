import React from "react";
import FilterProducts from "../ui/FilterProducts";
import { useQuery } from "@tanstack/react-query";
import Card from "../ui/card";
import { getSmartWatches } from "../services/apiSmartWatches";
import Footer from "../features/footer/Footer";

export default function SmartWatches() {
  const {
    data: smartWatches,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["smartWatches"],
    queryFn: getSmartWatches,
  });
  return (
    <div className="mx-3 my-5 rounded-xl border-2 flex flex-col flex-wrap">
      <FilterProducts products={smartWatches} />
      <div className="grid w-full place-items-center gap-10 grid-cols-4 px-3">
        {smartWatches.map((watches) => (
          <Card data={watches} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}
