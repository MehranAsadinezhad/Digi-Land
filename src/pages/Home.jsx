import { getHomeImages } from "../services/apiHomeImages";
import HomeSlider from "../features/home/HomeSlider";
import HomeMobiles from "../features/home/HomeMobiles";
import Advertise from "../ui/Advertise";
import HomeTablets from "../features/home/HomeTablets";
import HomeSpeakers from "../features/home/HomeSpeakers";
import SecondAdvertise from "../ui/SecondAdvertise";
import Footer from "../features/footer/Footer";
import HomeSmartWatches from "../features/home/HomeSmartWatches";
import HomeHandsfrees from "../features/home/HomeHandsfrees";
import { useLoaderData } from "react-router-dom";
import { getMobiles } from "../services/apiMobiles";
import { getTablets } from "../services/apiTablets";
import { getHandsfree } from "../services/apiHandsfree";
import { getSpeakers } from "../services/apiSpeakers";
import { getSmartWatches } from "../services/apiSmartWatches";

const mobiles = await getMobiles();
const tablets = await getTablets();
const handsfrees = await getHandsfree();
const speakers = await getSpeakers();
const smartWatches = await getSmartWatches();
export default function Home() {
  const homeImages = useLoaderData();
  return (
    <>
      <HomeSlider homeImages={homeImages} />
      <HomeMobiles mobiles={mobiles} />
      <Advertise homeImages={homeImages} />
      <HomeTablets tablets={tablets} />
      <SecondAdvertise homeImages={homeImages} />
      <HomeHandsfrees handsfrees={handsfrees} />
      <Advertise homeImages={homeImages} />
      <HomeSmartWatches smartWatches={smartWatches} />
      <SecondAdvertise homeImages={homeImages} />
      <HomeSpeakers speakers={speakers} />
      <Footer />
    </>
  );
}

export async function loader() {
  const homeImages = await getHomeImages();
  return homeImages;
}
