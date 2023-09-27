import React, { useState } from "react";

import FilterProducts from "../ui/FilterProducts";
import { useQuery } from "@tanstack/react-query";
import Card from "../ui/card";
import Footer from "../features/footer/Footer";
import { getTablets } from "../services/apiTablets";

export default function Handsfrees() {
  const {
    data: tablets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tablets"],
    queryFn: getTablets,
  });
  const [sorted, setSorted] = useState(tablets);
  return (
    <div className="mx-3 my-5 rounded-xl border-2 flex flex-col flex-wrap">
      <FilterProducts products={tablets} setSorted={setSorted} />
      <div className="grid w-full place-items-center gap-10 grid-cols-4 px-3">
        {sorted.map((tablet) => (
          <Card key={tablet.id} data={tablet} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
