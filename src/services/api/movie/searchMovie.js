import { http } from "services/httpService";

const fetchUpComingMovieVertical = async (query) => {
  const res = await http(`search/multi`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY, query },
  });
  return res.data;
};

export default fetchUpComingMovieVertical;
