import React, { useEffect } from "react";
import { getMobiles } from "../services/apiMobiles";

export default function Mobiles() {
  useEffect(() => {
    getMobiles().then((data) => console.log(data));
  }, []);
  return <div>Mobiles</div>;
}
