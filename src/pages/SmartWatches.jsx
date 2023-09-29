import React, { useState } from "react";
import FilterProducts from "../ui/FilterProducts";
import Card from "../ui/card";
import { getSmartWatches } from "../services/apiSmartWatches";
import Footer from "../features/footer/Footer";
import { useLoaderData } from "react-router-dom";

export default function SmartWatches() {
  const smartWatches = useLoaderData();
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

export async function loader() {
  const smartWatches = await getSmartWatches();
  return smartWatches;
}