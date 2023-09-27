import React, { useState } from "react";
import { getMobiles } from "../services/apiMobiles";
import FilterProducts from "../ui/FilterProducts";
import { useQuery } from "@tanstack/react-query";
import Card from "../ui/card";
import Footer from "../features/footer/Footer";

export default function Mobiles() {
  const {
    data: mobiles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["mobiles"],
    queryFn: getMobiles,
  });
  const [sorted, setSorted] = useState(mobiles);
  return (
    <div className="mx-3 my-5 rounded-xl border-2 flex flex-col flex-wrap">
      <FilterProducts products={sorted} setSorted={setSorted }/>
      <div className="grid w-full place-items-center gap-10 grid-cols-4 px-3">
        {sorted.map((mobile) => (
          <Card key={mobile.id} data={mobile} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}
