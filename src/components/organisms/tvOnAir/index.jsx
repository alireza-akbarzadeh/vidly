import React from "react";
import { useTvOnTheAir } from "store/Hook";
import MovieSlide from "../MovieSlide";

const TVOnAir = () => {
  const { data, isLoading } = useTvOnTheAir();
  return (
    !isLoading && (
      <MovieSlide type='tv' data={data?.results} title='On The Air ' />
    )
  );
};

export default TVOnAir;
