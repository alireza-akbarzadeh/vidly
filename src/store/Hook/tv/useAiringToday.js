import { useQuery } from "react-query";
import { fetchAiringToday } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useAiringToday = () => {
  return useQuery(queryKeys.tv_ON_THE_AIR, fetchAiringToday);
};

export default useAiringToday;
