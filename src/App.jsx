import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Mobiles from "./pages/Mobiles";
import Tablets from "./pages/Tablets";
import Handsfrees from "./pages/Handsfrees";
import SmartWatches from "./pages/SmartWatches";
import Speakers from "./pages/Speakers";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Product from "./pages/Product";
import ScrollUpButton from "./ui/ScrollUpButton";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  console.log(selectedProducts);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route
                path="home"
                element={
                  <Home
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
              <Route
                path="mobiles"
                element={
                  <Mobiles
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
              <Route
                path="tablets"
                element={
                  <Tablets
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
              <Route
                path="smartWatches"
                element={
                  <SmartWatches
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
              <Route
                path="handsfrees"
                element={
                  <Handsfrees
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
              <Route
                path="speakers"
                element={
                  <Speakers
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
              <Route
                path="cart"
                element={
                  <Cart
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
              <Route path="user" element={<User />} />
              <Route
                path="product/:productId"
                element={
                  <Product
                    setSelectedProducts={setSelectedProducts}
                    selectedProducts={selectedProducts}
                  />
                }
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        {/* <ScrollUpButton/> */}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "whitesmoke",
              color: "black",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
