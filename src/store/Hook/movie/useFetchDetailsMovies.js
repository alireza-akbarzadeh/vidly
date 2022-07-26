import { useQuery } from "react-query";
import { fetchDetailsMovie } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchDetailsMovies = (id) => {
  return useQuery([queryKeys.movies, id], () => fetchDetailsMovie(id));
};

export default useFetchDetailsMovies;
