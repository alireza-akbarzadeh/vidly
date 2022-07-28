import { http } from "../../httpService";

const fetchMovieCredit = async (id) => {
  const res = await http(`movie/${id}/credits`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchMovieCredit;
