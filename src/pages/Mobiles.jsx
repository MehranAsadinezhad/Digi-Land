import React, { useState } from "react";
import { getMobiles } from "../services/apiMobiles";
import FilterProducts from "../ui/FilterProducts";
import Card from "../ui/card";
import Footer from "../features/footer/Footer";
import { useLoaderData } from "react-router-dom";

export default function Mobiles() {
  const mobiles = useLoaderData();
  const [sorted, setSorted] = useState(mobiles);
  return (
    <div className="mx-3 my-5 flex flex-col flex-wrap rounded-xl border-2">
      <FilterProducts products={sorted} setSorted={setSorted} />
      <div className="grid w-full grid-cols-4 place-items-center gap-10 px-3">
        {sorted.map((mobile) => (
          <Card
            key={mobile.id}
            data={mobile}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function loader(){
  const mobiles = await getMobiles();
  return mobiles
}
