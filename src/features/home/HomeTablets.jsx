import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTablets } from "../../services/apiTablets";
import Loader from "../../ui/loader";
import TabletsSlider from "../tablets/TabletsSlider";

export default function HomeTablets() {
  const {
    data: tablets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tablets"],
    queryFn: getTablets,
  });
  if (isLoading) return <Loader />;
  return (
    <div className="my-5 h-[500px] w-full rounded-3xl bg-greenn px-8 py-5">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl text-dark">تبلت ها</h1>
        <div className="border-b-2 border-dark"></div>
      </div>
      <div>
        <TabletsSlider tablets={tablets} />
      </div>
    </div>
  );
}
