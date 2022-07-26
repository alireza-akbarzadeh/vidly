import { useInfiniteQuery, useQuery } from "react-query";
import { queryKeys } from "constant/queryKeys";
import { http } from "../../../services/httpService";

const fetchUrl = async () => {
  const res = await http(`movie/popular`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

const useFetchPopularVertical = () => {
  return useQuery(queryKeys.popular, fetchUrl);
};

export default useFetchPopularVertical;
