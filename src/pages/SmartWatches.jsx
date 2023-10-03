import React, { useState } from "react";
import FilterProducts from "../ui/FilterProducts";
import Card from "../ui/Card";
import { getSmartWatches } from "../services/apiSmartWatches";
import Footer from "../features/footer/Footer";
import { useLoaderData } from "react-router-dom";

export default function SmartWatches() {
  const smartWatches = useLoaderData();
  const [sorted, setSorted] = useState(smartWatches);
  return (
    <div className="mx-2 my-5 flex-wrap rounded-xl border-2 sm:mx-3 sm:flex sm:flex-col">
      <FilterProducts products={smartWatches} setSorted={setSorted} />
      <div className="flex w-full flex-col place-items-center px-3 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((watches) => (
          <Card key={watches.id} data={watches} />
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