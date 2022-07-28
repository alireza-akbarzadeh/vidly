import { useQuery } from "react-query";
import { queryKeys } from "constant/queryKeys";

import searchMovie from "services/api/movie/searchMovie";

const useSearchMovie = (query) => {
  return useQuery(queryKeys.search, () => searchMovie(query));
};

export default useSearchMovie;
