import { http } from "../../httpService";

const fetchUpComingMovie = async (pageParmas) => {
  const res = await http(`movie/upcoming`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY, page: pageParmas },
  });
  return res.data;
};

const fetchUpComingMovieVertical = async () => {
  const res = await http(`movie/upcoming`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export { fetchUpComingMovie, fetchUpComingMovieVertical };
