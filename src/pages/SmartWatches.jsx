import React, { useState } from "react";
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
  const [sorted, setSorted] = useState(smartWatches);
  return (
    <div className="mx-3 my-5 flex flex-col flex-wrap rounded-xl border-2">
      <FilterProducts products={smartWatches} setSorted={setSorted} />
      <div className="grid w-full grid-cols-4 place-items-center gap-10 px-3">
        {sorted.map((watches) => (
          <Card
            key={watches.id}
            data={watches}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
