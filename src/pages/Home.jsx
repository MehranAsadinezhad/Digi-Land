import { useQuery } from "@tanstack/react-query";
import { getHomeImages } from "../services/apiHomeImages";
import Loader from "../ui/loader";
import HomeSlider from "../features/home/HomeSlider";
import HomeMobiles from "../features/home/HomeMobiles";
import Advertise from "../ui/Advertise";
import HomeTablets from "../features/home/HomeTablets";
import HomeSpeakers from "../features/home/HomeSpeakers";
import SecondAdvertise from "../ui/SecondAdvertise";
import  Footer from "../features/footer/Footer";
import HomeSmartWatches from "../features/home/HomeSmartWatches";
import HomeHandsfrees from "../features/home/HomeHandsfrees";

export default function Home() {
  const {
    data: homeImages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["home"],
    queryFn: getHomeImages,
  });

  if (isLoading) return <Loader />;
  return (
    <>
      <HomeSlider homeImages={homeImages} />
      <HomeMobiles />
      <Advertise homeImages={homeImages} />
      <HomeTablets />
      <SecondAdvertise homeImages={homeImages} />
      <HomeSpeakers />
      <Advertise homeImages={homeImages} />
      <HomeSmartWatches />
      <SecondAdvertise homeImages={homeImages} />
      <HomeHandsfrees />
      <Footer/>
    </>
  );
}
