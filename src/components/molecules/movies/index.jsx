import React, { useEffect, useState } from "react";
import { getMovies } from "../../../services/fakeMovieService";
import MovieView from "./movie.view";

const MoviesComponents = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(getMovies());
  }, []);
  // @handle Delete
  const handleDelete = (id) => {
    const filterData = movies.filter((m) => m._id !== id);
    setMovies(filterData);
  };
  // @Jsx
  return movies.length === 0 ? (
    <p className='text-gray-400 text-xl'>We don't have movie yet</p>
  ) : (
    <>
      <p className='capitalize text-md mb-4 font-semibold'>
        currently we have <span className='font-bold '>{movies.length}</span>
        Movies
      </p>
      <MovieView handleDelete={handleDelete} movies={movies} />
    </>
  );
};

export default MoviesComponents;
