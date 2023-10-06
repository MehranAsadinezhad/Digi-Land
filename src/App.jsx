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
import Product, { loader as productLoader } from "./pages/Product";
import Menu from "./pages/Menu";
import PageNotFounded from "./pages/PageNotFounded";
import { getAllProducts } from "./services/apiAllProducst";

const allProducts = await getAllProducts();

const router = createBrowserRouter([
  {
    element: <AppLayout allProducts={allProducts} />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home allProducts={allProducts} />,
        errorElement: <Error />,
        loader: homeImagesLoader,
      },
      {
        path: "/mobiles",
        element: <Mobiles />,
        errorElement: <Error />,
        loader: mobilesLoader,
      },
      {
        path: "/tablets",
        element: <Tablets />,
        errorElement: <Error />,
        loader: tabletsLoader,
      },
      {
        path: "/smartWatches",
        element: <SmartWatches />,
        errorElement: <Error />,
        loader: smartWatchesLoader,
      },
      {
        path: "/speakers",
        element: <Speakers />,
        errorElement: <Error />,
        loader: speakersLoader,
      },
      {
        path: "/handsfrees",
        element: <Handsfrees />,
        errorElement: <Error />,
        loader: handsfreesLoader,
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
        element: <Product allProducts={allProducts} />,
        errorElement: <Error />,
        loader: productLoader
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFounded />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
