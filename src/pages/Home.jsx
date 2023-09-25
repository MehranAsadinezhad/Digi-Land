import { useQuery } from "@tanstack/react-query";
import { getHomeImages } from "../services/apiHomeImages";
import Loader from "../ui/loader";
import HomeSlider from "../features/home/HomeSlider";
import HomeMobiles from "../features/home/HomeMobiles";
import Advertise from "../ui/Advertise";

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
        <HomeSlider homeImages={homeImages}/>
        <HomeMobiles/>
      <Advertise homeImages={homeImages}/>
    </>
  );
}
