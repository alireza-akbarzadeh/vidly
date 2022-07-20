import React from "react";
import { Navbar } from "../organisms";
import { Outlet } from "react-router-dom";
const MovieTemplate = () => {
  return (
    <>
      <Navbar />
      <main className={"min-h-screen"}>
        <div className='container mx-auto max-w-screen-2xl'>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MovieTemplate;
