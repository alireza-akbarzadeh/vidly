import React from "react";
import { useFetchPopularMovies } from "../../store/Hook";
import Card from "../organisms/card";
import InfiniteScroll from "react-infinite-scroller";
import { Loading } from "components/organisms";

const Popular = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useFetchPopularMovies();
  if (isLoading) return <Loading />;

  return (
    <>
      <InfiniteScroll
        loadMore={fetchNextPage}
        className='grid grid-cols-4 md:grid-cols-12 '
        hasMore={hasNextPage}
      >
        {data.pages.map((pageData) =>
          pageData.results.map((item) => (
            <div key={item.id} className={"col-span-3 relative group"}>
              <Card
                isHoverCard={false}
                title={item.original_title}
                img={item.poster_path}
                rate={item.vote_average}
              />
              <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 overflow-hidden  transition-all ease-in-out duration-200'>
                <div className=' flex justify-between w-full bg-[rgba(0,0,0,0.5)] py-2 rounded-tr-2xl rounded-tl-2xl px-6 translate-y-5 items-center absolute top-1'>
                  <h3 className='text-gray-200 '>{item.original_title}</h3>
                  <span className='text-gray-200'>{item.vote_average}</span>
                </div>
                <ul className='absolute bottom-0    bg-[rgba(0,0,0,0.5)] py-2 rounded-br-2xl rounded-bl-2xl px-6 text-white'>
                  <li className='flex items-center justify-between'>
                    <span>Date :</span>
                    <span>{item.release_date}</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span>authorize :</span>
                    <span>{item.adult ? "adult" : "teen age"}</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span>Language :</span>
                    <span>{item.original_language}</span>
                  </li>
                  <li className='font-bold mt-2 capitalize'>
                    {item.overview.substring(1, 150) + "...."}
                  </li>
                </ul>
              </div>
            </div>
          ))
        )}
      </InfiniteScroll>
    </>
  );
};

export default Popular;