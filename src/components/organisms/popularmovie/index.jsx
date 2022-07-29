import React from "react";
import { useFetchPopularVertical } from "store/Hook";
import HeadSlide from "../headSlider";

const PopularMovie = () => {
  const { data: popular, isLoading } = useFetchPopularVertical();

  return !isLoading && <HeadSlide data={popular.results} />;
};
export default PopularMovie;
