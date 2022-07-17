import React from "react";
import { MoviePage } from "../pages";
import Navbar from "../organisms/navbar";
const Template = () => {
  return (
    <>
      <Navbar />
      <main className={"container max-w-3xl mx-auto mt-5"}>
        <MoviePage />
      </main>
    </>
  );
};

export default Template;
