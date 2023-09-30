import React from "react";
import { useNavigate } from "react-router-dom";

export default function Advertise({ homeImages }) {
  const navigate = useNavigate();
  return (
    <div className="mx-3 flex items-start justify-around gap-x-2">
      <img
        src={homeImages[1].image}
        alt="firstImg"
        className="w-2/4 cursor-pointer rounded-xl"
        onClick={() => navigate(`/${homeImages[5].title}`)}
      ></img>
      <img
        src={homeImages[4].image}
        alt="secondImg"
        className="w-2/4 cursor-pointer rounded-xl"
        onClick={() => navigate(`/${homeImages[4].title}`)}
      ></img>
    </div>
  );
}
