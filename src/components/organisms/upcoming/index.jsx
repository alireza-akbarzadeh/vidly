import React from "react";
import { useUpComingMovieVertical } from "store/Hook";
import MovieSlide from "../MovieSlide";

const UpComingMovie = () => {
  const { data, isLoading } = useUpComingMovieVertical();

  return !isLoading && <MovieSlide title={"Up Coming"} data={data.results} />;
};

export default UpComingMovie;
