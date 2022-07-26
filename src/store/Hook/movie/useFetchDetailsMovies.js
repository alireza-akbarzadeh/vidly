import { useQuery } from "react-query";
import { fetchDetailsMovie } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchDetailsMovies = (id) => {
  const { data } = useQuery([queryKeys.movies, id], () =>
    fetchDetailsMovie(id)
  );
  return data;
};

export default useFetchDetailsMovies;
