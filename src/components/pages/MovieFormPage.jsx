import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieForm } from "../organisms";

const MovieFormPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  return (
    <div>
      <MovieForm />
    </div>
  );
};

export default MovieFormPage;
