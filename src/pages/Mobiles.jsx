import React, { useState } from "react";
import { getMobiles } from "../services/apiMobiles";
import FilterProducts from "../ui/FilterProducts";
import Card from "../ui/Card";
import Footer from "../features/footer/Footer";
import { useLoaderData } from "react-router-dom";

export default function Mobiles() {
  const mobiles = useLoaderData();
  const [sorted, setSorted] = useState(mobiles);
  return (
    <div className="mx-2 my-5 flex-wrap rounded-xl border-2 sm:mx-3 sm:flex sm:flex-col">
      <FilterProducts products={sorted} setSorted={setSorted} />
      <div className="flex w-full flex-col place-items-center sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((mobile) => (
          <Card key={mobile.id} data={mobile} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function loader() {
  const mobiles = await getMobiles();
  return mobiles;
}
