import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const http = (
  url,
  { params, data, method, headers = {}, token, body, ...res }
) => {
  return axios({
    baseURL,
    url,
    headers: {
      ...headers,
      "Accept-Language": "en",
    },
    params,
    data,
    body,
    method,
    ...res,
  })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};
