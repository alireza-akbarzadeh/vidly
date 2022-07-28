import { useQuery } from "react-query";
import { fetchSimilarMovie } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchSimilarMovies = (id) => {
  return useQuery([queryKeys.similar, id], () => fetchSimilarMovie(id));
};

export default useFetchSimilarMovies;
