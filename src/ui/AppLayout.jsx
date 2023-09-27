import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ScrollUpButton from "./ScrollUpButton";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-12 grid-rows-[4rem_auto]">
      <Header />
      <Sidebar />
      <main className="col-span-10 overflow-y-scroll bg-medium">
        <Outlet />
      </main>
    </div>
  );
}
