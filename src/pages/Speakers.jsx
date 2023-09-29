import React, { useState } from "react";
import FilterProducts from "../ui/FilterProducts";
import Card from "../ui/card";
import Footer from "../features/footer/Footer";
import { getSpeakers } from "../services/apiSpeakers";
import { useLoaderData } from "react-router-dom";

export default function Speakers() {
  const speakers = useLoaderData();
  const [sorted, setSorted] = useState(speakers);
  return (
    <div className="mx-3 my-5 flex flex-col flex-wrap rounded-xl border-2">
      <FilterProducts products={speakers} setSorted={setSorted} />
      <div className="grid w-full grid-cols-4 place-items-center gap-10 px-3">
        {sorted.map((speaker) => (
          <Card
            key={speaker.id}
            data={speaker}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function loader() {
  const speakers = await getSpeakers();
  return speakers;
}