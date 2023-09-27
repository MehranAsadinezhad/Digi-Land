import React from "react";

import FilterProducts from "../ui/FilterProducts";
import { useQuery } from "@tanstack/react-query";
import Card from "../ui/card";
import Footer from "../features/footer/Footer";
import { getSpeakers } from "../services/apiSpeakers";

export default function Speakers() {
  const {
    data: speakers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["speakers"],
    queryFn: getSpeakers,
  });
  return (
    <div className="mx-3 my-5 rounded-xl border-2 flex flex-col flex-wrap">
      <FilterProducts products={speakers} />
      <div className="grid w-full place-items-center gap-10 grid-cols-4 px-3">
        {speakers.map((speaker) => (
          <Card data={speaker} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
