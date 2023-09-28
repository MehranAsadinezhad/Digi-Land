import React, { useState } from "react";
import FilterProducts from "../ui/FilterProducts";
import { useQuery } from "@tanstack/react-query";
import Card from "../ui/card";
import { getHandsfree } from "../services/apiHandsfree";
import Footer from "../features/footer/Footer";

export default function Handsfrees() {
  const {
    data: handsfrees,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["handsfrees"],
    queryFn: getHandsfree,
  });
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
