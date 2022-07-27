import { http } from "../../httpService";

const fetchSimilarMovie = async (id) => {
  const res = await http(`movie/${id}/similar`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchSimilarMovie;
