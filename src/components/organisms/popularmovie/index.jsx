import React from "react";
import { useFetchPopularVertical } from "store/Hook";
import MovieSlide from "../MovieSlide";

const PopularMovie = () => {
  const { data: popular, isLoading } = useFetchPopularVertical();
  console.log(popular, "popular");
  return (
    !isLoading && <MovieSlide title={"popular Movie"} data={popular.results} />
  );
};
export default PopularMovie;
