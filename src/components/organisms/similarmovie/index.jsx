import React from "react";
import { useSimilarMovie } from "store/Hook";
import MovieSlide from "../MovieSlide";

const SimilarMovie = ({ id }) => {
  const { data, isLoading } = useSimilarMovie(id);
  return !isLoading && <MovieSlide title='Similar Movie' data={data.results} />;
};

export default SimilarMovie;
