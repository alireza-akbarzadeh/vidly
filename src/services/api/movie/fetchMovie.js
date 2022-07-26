import React from "react";
import { http } from "../../httpService";

const fetchMovie = async () => {
  const res = await http(`movies`, {
    method: "get",
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return res.data;
};

export default fetchMovie;
