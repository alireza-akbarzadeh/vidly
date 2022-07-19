import React from "react";
import { Navbar, Movies } from "../organisms";
const MovieTemplate = () => {
  return (
    <>
      <Navbar />
      <main className={"min-h-screen"}>
        <Movies />
      </main>
    </>
  );
};

export default MovieTemplate;
