import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./loader";
import { Toaster } from "react-hot-toast";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [userCart, setUserCart] = useState([]);
  const allQuantity = userCart.length;
  return (
    <div className="grid h-screen grid-cols-12 grid-rows-[4rem_auto]">
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "0px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "green",
              color: "white",
            },
          },
          error: {
            duration: 3000,
            style: {
              backgroundColor: "red",
              color: "white",
            },
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
      <Header quantity={allQuantity} />
      <Sidebar />
      <main className="col-span-10 overflow-y-scroll bg-medium">
        {isLoading && <Loader />}
        {!isLoading && (
          <Outlet context={[userCart, setUserCart, allQuantity]} />
        )}
      </main>
    </div>
  );
}
