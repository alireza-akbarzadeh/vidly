import { useState } from "react";
import { useFetchPopularMovies } from "store/Hook";
import InfiniteScroll from "react-infinite-scroller";
import DetailsModal from "components/organisms/detailsModal";
import { EffectMovie } from "components/organisms";
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
          className='grid grid-cols-4  gap-10 md:grid-cols-12 justify-center '
          hasMore={hasNextPage}
        >
          {data?.pages?.map((pageData) =>
            pageData?.results?.map((item) => (
              <EffectMovie
                item={item}
                handleOpenModal={handleOpenModal}
                key={item.id}
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
