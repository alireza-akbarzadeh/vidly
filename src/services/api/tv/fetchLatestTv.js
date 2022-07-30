import { http } from "../../httpService";

const fetchLatestTv = async () => {
  const res = await http(`tv/latest`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchLatestTv;
