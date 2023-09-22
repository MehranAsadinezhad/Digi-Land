import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="grid grid-rows-[4rem_auto] grid-cols-12 h-screen">
      <Header />
      <Sidebar />
      <main className="col-span-10 bg-medium overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}
