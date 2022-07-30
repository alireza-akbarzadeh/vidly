import React from "react";
import { useLatestTv } from "store/Hook";
import MovieSlide from "../MovieSlide";

const TVLatests = () => {
  const { data, isLoading } = useLatestTv();
  return (
    !isLoading && <MovieSlide type='tv' data={data?.results} title='Latest' />
  );
};

export default TVLatests;
