import List from "components/molecules/list";
import Pagination from "../Pagination";
import MovieView from "./movie.view";
import useMovieController from "./useMovieController";

const MoviesComponents = () => {
  const {
    data,
    currentPage,
    movies,
    pageSize,
    genres,
    filter,
    filtered,
    handleDelete,
    handlePaginated,
    handleFilterMovie,
  } = useMovieController();

  // @Jsx
  return movies.length === 0 ? (
    <p className='text-gray-400 text-xl'>We don't have movie yet</p>
  ) : (
    <div className='container max-w-7xl  mx-auto'>
      <div className='grid grid-cols-2 lg:grid-cols-4    gap-10 mt-10'>
        <div className='col-span-1'>
          <List
            selected={filter}
            handelSelectList={handleFilterMovie}
            items={genres}
          />
        </div>
        <div className='col-span-2 '>
          <MovieView
            handleDelete={handleDelete}
            movies={data}
            count={filtered.length}
          />
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            itemCount={filtered.length}
            onPageChange={handlePaginated}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviesComponents;
