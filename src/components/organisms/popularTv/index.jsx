import React from "react";
import { usePopularTv } from "store/Hook";
import HeadSlide from "../headSlider";

const PopularTV = () => {
  const { data: popular, isLoading } = usePopularTv();
  console.log(popular, "asd");
  return !isLoading && <HeadSlide page='tv-show' data={popular.results} />;
};
export default PopularTV;
