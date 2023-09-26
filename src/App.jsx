import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Mobiles from "./pages/Mobiles";
import Tablets from "./pages/Tablets";
import Handsfrees from "./pages/Handsfrees";
import SmartWatches from "./features/home/HomeSmartWatches";
import Speakers from "./pages/Speakers";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Product from "./pages/Product";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="mobiles" element={<Mobiles />} />
              <Route path="tablets" element={<Tablets />} />
              <Route path="smartWatches" element={<SmartWatches />} />
              <Route path="handsfrees" element={<Handsfrees />} />
              <Route path="speakers" element={<Speakers />} />
              <Route path="cart" element={<Cart />} />
              <Route path="user" element={<User />} />
              <Route path="product/:productName" element={<Product />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
