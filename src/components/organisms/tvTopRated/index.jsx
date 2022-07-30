import React from "react";
import { useTopRatedTv } from "store/Hook";
import MovieSlide from "../MovieSlide";

const TVTopRated = () => {
  const { data, isLoading } = useTopRatedTv();
  return (
    !isLoading && (
      <MovieSlide type='tv' data={data?.results} title='Top Rated' />
    )
  );
};

export default TVTopRated;
