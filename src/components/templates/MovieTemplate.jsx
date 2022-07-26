import React from "react";
import { Navbar } from "../organisms";
import { Outlet } from "react-router-dom";
import Sidebar from "../organisms/sidebar";

const MovieTemplate = () => {
  return (
    <div className={"grid gap-5 lg:grid-cols-12 grid-cols-10 lg:px-7 px-2"}>
      <div className={"w-full lg:col-span-2"}>
        <Sidebar />
      </div>
      <main className={"min-h-screen col-span-10"}>
        <Navbar className={"col-span-3"} />
        <Outlet />
      </main>
    </div>
  );
};

export default MovieTemplate;
