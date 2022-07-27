import { http } from "../../httpService";

const fetchReviewMovie = async (id) => {
  const res = await http(`movie/${id}/reviews`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};
export default fetchReviewMovie;
