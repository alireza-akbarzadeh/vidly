import React from "react";
import { useFetchPopularVertical } from "store/Hook";
import HeadSlide from "../headSlider";

const PopularMovie = () => {
  const { data: popular, isLoading } = useFetchPopularVertical();

  return !isLoading && <HeadSlide page='movie' data={popular.results} />;
};
export default PopularMovie;
