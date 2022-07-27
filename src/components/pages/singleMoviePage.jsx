import { SimilarMovie, ReviewMovie, Videos } from "components/organisms";
import React from "react";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { id } = useParams();
  return (
    <>
      <Videos id={id} />
      <SimilarMovie id={id} />
      <ReviewMovie id={id} />
    </>
  );
};

export default SingleMoviePage;
