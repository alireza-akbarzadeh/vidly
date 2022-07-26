import React from "react";
import { useQuery } from "react-query";
import { fetchMovie } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchMovies = () => {
  const { data } = useQuery(queryKeys.movies, fetchMovie);
  return data;
};

export default useFetchMovies;
