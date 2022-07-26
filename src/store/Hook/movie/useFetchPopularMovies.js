import { useInfiniteQuery, useQuery } from "react-query";
import { fetchPopularMovie } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchPopularMovies = () => {
  return useInfiniteQuery(
    queryKeys.popular,
    ({ pageParam = 1 }) => fetchPopularMovie(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.page + 1 || undefined,
    }
  );
};

export default useFetchPopularMovies;
