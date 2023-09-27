import { getHandsfree } from "./apiHandsfree";
import { getMobiles } from "./apiMobiles";
import { getSmartWatches } from "./apiSmartWatches";
import { getSpeakers } from "./apiSpeakers";
import { getTablets } from "./apiTablets";

const mobiles = getMobiles;
console.log(mobiles);
// const handsfrees = getHandsfree;
// const speakers = getSpeakers;
// const smartWatches = getSmartWatches;
// const tablets = getTablets;

// export function getProducts() {
//   return [mobiles, handsfrees, speakers, smartWatches, tablets];
// }
