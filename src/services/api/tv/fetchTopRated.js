import { http } from "../../httpService";

const fetchTopRated = async () => {
  const res = await http(`tv/top_rated`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchTopRated;
