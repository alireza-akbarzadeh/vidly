import { DetailsMovie, SimilarMovie } from "components/organisms";
import React from "react";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { id } = useParams();
  return (
    <>
      <DetailsMovie page='details' id={id} />
      <SimilarMovie id={id} />
    </>
  );
};

export default SingleMoviePage;
