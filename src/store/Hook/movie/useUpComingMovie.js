import { useQuery } from "react-query";
import { fetchUpComingMovieVertical } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchDetailsMovies = () => {
  return useQuery(queryKeys.upcoming, () => fetchUpComingMovieVertical());
};

export default useFetchDetailsMovies;
