import { http } from "../../httpService";

const fetchPerson = async () => {
  const res = await http(`person/popular`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchPerson;
