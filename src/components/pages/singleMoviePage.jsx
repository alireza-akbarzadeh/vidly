import { DetailsMovie, SimilarMovie } from "components/organisms";
import React from "react";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { id } = useParams();
  return (
    <div>
      <DetailsMovie id={id} />
      <SimilarMovie id={id} />
    </div>
  );
};

export default SingleMoviePage;
