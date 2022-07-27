import React, { createContext, useContext, useState } from "react";

const Movie = createContext(null);

const MovieProvider = ({ children }) => {
  const [search, setSearch] = useState(null);

  return (
    <Movie.Provider value={{ search, setSearch }}>{children}</Movie.Provider>
  );
};

export const useMovie = () => useContext(Movie);
export default MovieProvider;
