import { useEffect } from "react";
import { EffectMovie } from "components/organisms";
import { useParams } from "react-router-dom";
import { useSearchMovie } from "store/Hook";
import Card from "components/organisms/card";

const SearchResult = () => {
  const { slug } = useParams();
  const { data, isLoading, refetch } = useSearchMovie(slug);
  useEffect(() => {
    refetch();
  }, [slug]);
  console.log(data, "data");
  return (
    !isLoading && (
      <div>
        <div className='grid xl:grid-cols-8 sm:grid-cols-4  gap-5 gap-y-52'>
          {data?.results?.length === 0 ? (
            <p className='text-xl md:text-2xl text-gray-200 mt-5 text-center whitespace-pre'>
              Not Result for This Search
            </p>
          ) : (
            data?.results?.map((item) => (
              <Card
                className={"col-span-2"}
                key={item.id}
                id={item.id}
                title={item.original_title}
                img={item.poster_path}
                rate={item.vote_average}
              />
            ))
          )}
        </div>
      </div>
    )
  );
};

export default SearchResult;
