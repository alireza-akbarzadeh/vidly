import { useState } from "react";
import { useFetchPopularMovies } from "store/Hook";
import InfiniteScroll from "react-infinite-scroller";
import DetailsModal from "components/organisms/detailsModal";
import { EffectMovie } from "components/organisms";
import Card from "components/organisms/card";
const Popular = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const onClose = () => setOpen(false);
  const handleOpenModal = (id) => {
    setOpen(true);
    setId(id);
  };
  const { data, hasNextPage, fetchNextPage, isLoading } =
    useFetchPopularMovies();
  return (
    !isLoading && (
      <>
        <InfiniteScroll
          loadMore={fetchNextPage}
          className='grid xl:grid-cols-8 sm:grid-cols-4  gap-5 gap-y-52'
          hasMore={hasNextPage}
        >
          {data?.pages?.map((pageData) =>
            pageData?.results?.map((item) => (
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
        </InfiniteScroll>
        {open && <DetailsModal open={open} id={id} onClose={onClose} />}
      </>
    )
  );
};

export default Popular;
