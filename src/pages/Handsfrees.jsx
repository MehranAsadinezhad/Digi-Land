import React, { useState } from "react";
import FilterProducts from "../ui/FilterProducts";
import Card from "../ui/card";
import { getHandsfree } from "../services/apiHandsfree";
import Footer from "../features/footer/Footer";
import { useLoaderData } from "react-router-dom";

export default function Handsfrees() {
  const handsfrees = useLoaderData();
  const [sorted, setSorted] = useState(handsfrees);
  return (
    <div className="mx-3 my-5 flex flex-col flex-wrap rounded-xl border-2">
      <FilterProducts products={handsfrees} setSorted={setSorted} />
      <div className="grid w-full grid-cols-4 place-items-center gap-10 px-3">
        {sorted.map((handsfree) => (
          <Card
            key={handsfree.id}
            data={handsfree}
          />
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
