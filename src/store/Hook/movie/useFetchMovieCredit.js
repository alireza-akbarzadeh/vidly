import { useQuery } from "react-query";
import { fetchMovieCredit } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchMoviesCredit = (id) => {
  return useQuery([queryKeys.credit, id], () => fetchMovieCredit(id));
};

export default useFetchMoviesCredit;
