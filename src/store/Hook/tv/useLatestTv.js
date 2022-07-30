import { useQuery } from "react-query";
import { fetchLatestTv } from "services/api";
import { queryKeys } from "constant/queryKeys";

const usePopularMovie = () => {
  return useQuery(queryKeys.latest_Tv, fetchLatestTv);
};

export default usePopularMovie;
