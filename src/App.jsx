import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import Mobiles, { loader as mobiles } from "./pages/Mobiles";
import Tablets, { loader as tablets } from "./pages/Tablets";
import Handsfrees, { loader as handsfrees } from "./pages/Handsfrees";
import SmartWatches, { loader as smartWatches } from "./pages/SmartWatches";
import Speakers, { loader as speakers } from "./pages/Speakers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import Cart from "./pages/Cart";
import Error from "./ui/Error";
import Product from "./pages/Product";
import Menu from "./pages/Menu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
        errorElement: <Error />,
      },
      {
        path: "/mobiles",
        element: <Mobiles />,
        loader: mobiles,
        errorElement: <Error />,
      },
      {
        path: "/tablets",
        element: <Tablets />,
        loader: tablets,
        errorElement: <Error />,
      },
      {
        path: "/smartWatches",
        element: <SmartWatches />,
        loader: smartWatches,
        errorElement: <Error />,
      },
      {
        path: "/speakers",
        element: <Speakers />,
        loader: speakers,
        errorElement: <Error />,
      },
      {
        path: "/handsfrees",
        element: <Handsfrees />,
        loader: handsfrees,
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
        element: <Product />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
