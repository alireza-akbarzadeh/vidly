import { useMovie } from "context/MovieContext";
import { EffectMovie, PopularMovie, UpComingMovie } from "../organisms/";

const MoviePage = () => {
  const { search } = useMovie();
  console.log(search, "page");

  return search ? (
    <div className='grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-12'>
      {search?.results.length === 0 ? (
        <p className='text-xl md:text-2xl text-gray-200 mt-5 text-center whitespace-pre'>
          Not Result for This Search
        </p>
      ) : (
        search?.results?.map((item) => (
          <EffectMovie key={item.id} isSearch={true} item={item} />
        ))
      )}
    </div>
  ) : (
    <>
      <PopularMovie />
      <UpComingMovie />
    </>
  );
};

export default MoviePage;
