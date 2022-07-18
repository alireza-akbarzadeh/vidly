import React from "react";
import { MoviePage } from "../pages";
import Navbar from "../organisms/navbar";
const MovieTemplate = () => {
  return (
    <>
      <Navbar />
      <main className={"min-h-screen"}>
        <MoviePage />
      </main>
    </>
  );
};

export default MovieTemplate;
