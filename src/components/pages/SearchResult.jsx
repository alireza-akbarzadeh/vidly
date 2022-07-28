import { useEffect } from "react";
import { EffectMovie } from "components/organisms";
import { useParams } from "react-router-dom";
import { useSearchMovie } from "store/Hook";

const SearchResult = () => {
  const { slug } = useParams();
  const { data, isLoading, refetch } = useSearchMovie(slug);
  console.log(data, "data");
  useEffect(() => {
    refetch();
  }, [slug]);
  return (
    !isLoading && (
      <div>
        <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12'>
          {data?.results?.length === 0 ? (
            <p className='text-xl md:text-2xl text-gray-200 mt-5 text-center whitespace-pre'>
              Not Result for This Search
            </p>
          ) : (
            data?.results?.map((item) => (
              <EffectMovie key={item.id} isSearch={true} item={item} />
            ))
          )}
        </div>
      </div>
    )
  );
};

export default SearchResult;
