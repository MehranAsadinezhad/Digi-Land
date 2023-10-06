import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";
import { Toaster } from "react-hot-toast";
import SearchResult from "./SearchResult";

export default function AppLayout({allProducts}) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-cols-12 grid-rows-[7rem_auto] md:grid-rows-[4rem_auto]">
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "green",
              color: "white",
              minWidth: "390px",
            },
          },
          error: {
            duration: 3000,
            style: {
              backgroundColor: "red",
              color: "white",
              minWidth: "390px",
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
      <Header allProducts={allProducts} />
      <Sidebar />

      <main className="col-span-12 overflow-y-scroll bg-medium md:col-span-9 lg:col-span-10">
        {!isLoading ? (
          <>
            <SearchResult />
            <Outlet />
          </>
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
}
