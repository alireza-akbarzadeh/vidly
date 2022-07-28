import {
  SimilarMovie,
  ReviewMovie,
  SingleMovieDetails,
} from "components/organisms";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { id } = useParams();

  return (
    <>
      <SingleMovieDetails id={id} />
      <SimilarMovie id={id} />
      <ReviewMovie id={id} />
    </>
  );
};

export default SingleMoviePage;
