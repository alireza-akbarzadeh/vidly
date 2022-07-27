import { queryKeys } from "constant/queryKeys";
import { useQuery } from "react-query";
import { fetchReviewMovie } from "services/api";

const useFetchReviewMovie = (id) => {
  return useQuery(queryKeys.review, () => fetchReviewMovie(id));
};

export default useFetchReviewMovie;
