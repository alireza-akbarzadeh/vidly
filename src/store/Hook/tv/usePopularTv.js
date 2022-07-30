import { useQuery } from "react-query";
import { fetchPopularTv } from "services/api";
import { queryKeys } from "constant/queryKeys";

const usePopularMovie = () => {
  return useQuery(queryKeys.popular_Tv, fetchPopularTv);
};

export default usePopularMovie;
