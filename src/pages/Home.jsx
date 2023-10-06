import HomeSlider from "../features/home/HomeSlider";
import HomeMobiles from "../features/home/HomeMobiles";
import Loader from "../ui/Loader";
import Advertise from "../ui/Advertise";
import HomeTablets from "../features/home/HomeTablets";
import HomeSpeakers from "../features/home/HomeSpeakers";
import SecondAdvertise from "../ui/SecondAdvertise";
import Footer from "../features/footer/Footer";
import HomeSmartWatches from "../features/home/HomeSmartWatches";
import HomeHandsfrees from "../features/home/HomeHandsfrees";
import { getHomeImages } from "../services/apiHomeImages";
import { useLoaderData, useNavigation } from "react-router-dom";

export default function Home({ allProducts }) {
  const homeImages = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const mobiles = allProducts.filter((item) => item.name.includes("موبایل"));
  const tablets = allProducts.filter((item) => item.name.includes("تبلت"));
  const smartWatches = allProducts.filter((item) => item.name.includes("ساعت"));
  const speakers = allProducts.filter((item) => item.name.includes("اسپیکر"));
  const handsfrees = allProducts.filter((item) => item.name.includes("هدفون"));

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HomeSlider homeImages={homeImages} />
          <HomeMobiles mobiles={mobiles} />
          <Advertise homeImages={homeImages} />
          <HomeTablets tablets={tablets}/>
          <SecondAdvertise homeImages={homeImages} />
          <HomeHandsfrees handsfrees={handsfrees} />
          <Advertise homeImages={homeImages} />
          <HomeSmartWatches smartWatches={smartWatches} />
          <SecondAdvertise homeImages={homeImages} />
          <HomeSpeakers speakers={speakers} />
          <Footer />
        </>
      )}
    </>
  );
}

export async function loader() {
  const homeImages = await getHomeImages();
  return homeImages;
}
