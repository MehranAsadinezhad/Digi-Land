import React, { useState } from "react";
import FilterProducts from "../ui/FilterProducts";
import Card from "../ui/Card";
import { getHandsfree } from "../services/apiHandsfree";
import Footer from "../features/footer/Footer";
import { useLoaderData } from "react-router-dom";

export default function Handsfrees() {
  const handsfrees = useLoaderData();
  const [sorted, setSorted] = useState(handsfrees);
  return (
    <div className="mx-2 my-5 flex-wrap rounded-xl border-2 sm:mx-3 sm:flex sm:flex-col">
      <FilterProducts products={handsfrees} setSorted={setSorted} />
      <div className="flex w-full flex-col place-items-center px-3 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((handsfree) => (
          <Card key={handsfree.id} data={handsfree} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function loader() {
  const handsfrees = await getHandsfree();
  return handsfrees;
}
