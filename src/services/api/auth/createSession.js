import { http } from "../../httpService";

const createSession = async () => {
  const res = await http(`authentication/session/new`, {
    method: "post",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default createSession;
