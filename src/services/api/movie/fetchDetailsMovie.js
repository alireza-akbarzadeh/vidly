import React from "react";
import { http } from "../../httpService";

const fetchDetailsMovie = async (id) => {
  const res = await http(`movie/${id}`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchDetailsMovie;
