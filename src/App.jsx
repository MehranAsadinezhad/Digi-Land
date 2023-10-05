import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loader as homeImagesLoader } from "./pages/Home";
import Mobiles, { loader as mobilesLoader } from "./pages/Mobiles";
import Tablets, { loader as tabletsLoader } from "./pages/Tablets";
import Handsfrees, { loader as handsfreesLoader } from "./pages/Handsfrees";
import SmartWatches, {
  loader as smartWatchesLoader,
} from "./pages/SmartWatches";
import Speakers, { loader as speakersLoader } from "./pages/Speakers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import Cart from "./pages/Cart";
import Error from "./ui/Error";
import Product from "./pages/Product";
import Menu from "./pages/Menu";
import { getMobiles } from "./services/apiMobiles";
import { getTablets } from "./services/apiTablets";
import { getHandsfree } from "./services/apiHandsfree";
import { getSpeakers } from "./services/apiSpeakers";
import { getSmartWatches } from "./services/apiSmartWatches";
import { useState } from "react";
import Loader from "./ui/Loader";

const mobiles = await getMobiles();
const tablets = await getTablets();
const handsfrees = await getHandsfree();
const speakers = await getSpeakers();
const smartWatches = await getSmartWatches();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Home
            tablets={tablets}
            handsfrees={handsfrees}
            mobiles={mobiles}
            speakers={speakers}
            smartWatches={smartWatches}
          />
        ),
        loader: homeImagesLoader,
        errorElement: <Error />,
      },
      {
        path: "/mobiles",
        element: <Mobiles />,
        loader: mobilesLoader,
        errorElement: <Error />,
      },
      {
        path: "/tablets",
        element: <Tablets />,
        loader: tabletsLoader,
        errorElement: <Error />,
      },
      {
        path: "/smartWatches",
        element: <SmartWatches />,
        loader: smartWatchesLoader,
        errorElement: <Error />,
      },
      {
        path: "/speakers",
        element: <Speakers />,
        loader: speakersLoader,
        errorElement: <Error />,
      },
      {
        path: "/handsfrees",
        element: <Handsfrees />,
        loader: handsfreesLoader,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/product/:productId",
        element: (
          <Product
            tablets={tablets}
            handsfrees={handsfrees}
            mobiles={mobiles}
            speakers={speakers}
            smartWatches={smartWatches}
          />
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(false);
  window.addEventListener("scroll", () => setLoading(true));

  return (
    <>
      {!loading && <Loader />}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
