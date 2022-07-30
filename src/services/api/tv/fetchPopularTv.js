import { http } from "../../httpService";

const fetchPopular = async () => {
  const res = await http(`tv/popular`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchPopular;
