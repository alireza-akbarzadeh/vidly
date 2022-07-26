import React from "react";
import { http } from "../../httpService";

const fetchPopularMovie = async (pageParmas) => {
  const res = await http(`movie/popular`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY, page: pageParmas },
  });
  return res.data;
};
export default fetchPopularMovie;
