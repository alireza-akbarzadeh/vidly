import { http } from "../../httpService";

const fetchTVONTHEAIR = async () => {
  const res = await http(`tv/on_the_air`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchTVONTHEAIR;
