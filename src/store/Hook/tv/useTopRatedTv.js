import { useQuery } from "react-query";
import { fetchTopRated } from "services/api";
import { queryKeys } from "constant/queryKeys";

const usePopularMovie = () => {
  return useQuery(queryKeys.top_Rated_Tv, fetchTopRated);
};

export default usePopularMovie;
