import {
  SimilarMovie,
  ReviewMovie,
  SingleMovieDetails,
} from "components/organisms";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { id } = useParams();
  const [isReview, setIsReview] = useState(false);

  return (
    <>
      <SingleMovieDetails setIsReview={setIsReview} id={id} />
      <SimilarMovie id={id} />
      {isReview && <ReviewMovie id={id} />}
    </>
  );
};

export default SingleMoviePage;
