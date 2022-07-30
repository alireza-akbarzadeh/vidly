import { useQuery } from "react-query";
import { fetchTVONTHEAIR } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useTvOnTheAir = () => {
  return useQuery(queryKeys.tv_ON_THE_AIR, fetchTVONTHEAIR);
};

export default useTvOnTheAir;
