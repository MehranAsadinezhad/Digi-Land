import React from "react";
import { useNavigate } from "react-router-dom";

export default function SecondAdvertise({ homeImages }) {
  const navigate = useNavigate();
  return (
    <div className="sm:mx-3 sm:flex sm:items-start sm:justify-around sm:gap-x-2">
      <img
        src={homeImages[2].image}
        alt="firstImg"
        className="hidden w-2/4 cursor-pointer rounded-xl lg:block"
        onClick={() => navigate(`/${homeImages[2].title}`)}
      ></img>
      <img
        src={homeImages[5].image}
        alt="secondImg"
        className="cursor-pointer rounded-xl lg:w-2/4"
        onClick={() => navigate(`/${homeImages[5].title}`)}
      ></img>
    </div>
  );
}
