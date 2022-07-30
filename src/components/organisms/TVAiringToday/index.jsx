import React from "react";
import { useAiringToday } from "store/Hook";
import MovieSlide from "../MovieSlide";

const TVAiringToday = () => {
  const { data, isLoading } = useAiringToday();
  return (
    !isLoading && (
      <MovieSlide type='tv' data={data?.results} title='Airing Today' />
    )
  );
};

export default TVAiringToday;
