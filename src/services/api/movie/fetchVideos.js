import { http } from "services/httpService";

const fetchUpComingMovieVertical = async (id) => {
  const res = await http(`movie/${id}/videos`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchUpComingMovieVertical;
