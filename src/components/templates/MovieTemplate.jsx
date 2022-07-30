import React from "react";
import { Navbar } from "../organisms";
import { Outlet } from "react-router-dom";
import Sidebar from "../organisms/sidebar";

const MovieTemplate = () => {
  return (
    <div className={"grid grid-cols-12 lg:gap-8 lg:px-7 px-2"}>
      <Sidebar />
      <main
        className={
          "min-h-screen col-span-12 lg:col-span-8  xl:col-span-9 2xl:col-span-10"
        }
      >
        <Navbar />
        <Outlet />
        <div className='h-24 w-full' />
      </main>
    </div>
  );
};

export default MovieTemplate;
