import React, { useState } from "react";
import FilterProducts from "../ui/FilterProducts";
import Card from "../ui/Card";
import Footer from "../features/footer/Footer";
import { getTablets } from "../services/apiTablets";
import { useLoaderData } from "react-router-dom";

export default function Handsfrees() {
  const tablets = useLoaderData();
  const [sorted, setSorted] = useState(tablets);
  return (
    <div className="mx-2 my-5 flex-wrap rounded-xl border-2 sm:mx-3 sm:flex sm:flex-col">
      <FilterProducts products={tablets} setSorted={setSorted} />
      <div className="flex w-full flex-col place-items-center px-3 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((tablet) => (
          <Card key={tablet.id} data={tablet} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function loader() {
  const tablets = await getTablets();
  return tablets;
}
