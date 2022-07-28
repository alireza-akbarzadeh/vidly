import { useMovie } from "context/MovieContext";
import { EffectMovie, PopularMovie, UpComingMovie } from "../organisms/";

const MoviePage = () => {
  const { search } = useMovie();

  return (
    <>
      <PopularMovie />
      <UpComingMovie />
    </>
  );
};

export default MoviePage;
