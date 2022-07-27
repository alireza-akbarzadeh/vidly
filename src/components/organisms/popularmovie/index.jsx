import React from "react";
import { useFetchPopularVertical } from "store/Hook";
import MovieSlide from "../MovieSlide";

const PopularMovie = () => {
  const { data: popular, isLoading } = useFetchPopularVertical();

  return !isLoading && <MovieSlide data={popular.results} />;
};
export default PopularMovie;
