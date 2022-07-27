import React from "react";
import { useParams } from "react-router-dom";
import { useSimilarMovie } from "store/Hook";
import { DetailsMovie } from "..";
import MovieSlide from "../MovieSlide";

const SimilarMovie = ({ id }) => {
  const similar = useSimilarMovie(id);
  return <MovieSlide title='Similar Movie' data={similar.data.results} />;
};

export default SimilarMovie;
