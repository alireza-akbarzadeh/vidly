import { http } from "../../httpService";

const fetchAiringToday = async () => {
  const res = await http(`tv/airing_today`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchAiringToday;
