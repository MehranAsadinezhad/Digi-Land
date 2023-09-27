import React from "react";

import FilterProducts from "../ui/FilterProducts";
import { useQuery } from "@tanstack/react-query";
import Card from "../ui/card";
import Footer from "../features/footer/Footer";
import { getHandsfree } from "../services/apiHandsfree";

export default function Handsfrees() {
  const {
    data: handsfrees,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["handsfrees"],
    queryFn: getHandsfree,
  });
  return (
    <div className="mx-3 my-5 rounded-xl border-2 flex flex-col flex-wrap">
      <FilterProducts products={handsfrees} />
      <div className="grid w-full place-items-center gap-10 grid-cols-4 px-3">
        {handsfrees.map((handsfree) => (
          <Card data={handsfree} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
