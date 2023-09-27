import React from "react";
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
  return (
    <div className="mx-3 my-5 rounded-xl border-2 flex flex-col flex-wrap">
      <FilterProducts products={mobiles} />
      <div className="grid w-full place-items-center gap-10 grid-cols-4 px-3">
        {mobiles.map((mobile) => (
          <Card data={mobile} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}
