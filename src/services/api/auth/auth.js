import { http } from "../../httpService";

const createSession = async ({ request_token, data }) => {
  const res = await http(`authentication/token/validate_with_login`, {
    method: "post",
    data,
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default createSession;
