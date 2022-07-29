import { http } from "../../httpService";

const createToken = async () => {
  const res = await http(`authentication/token/new`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default createToken;
