import { Button, Like } from "components/atomes";
import { Table } from "components/molecules";
import List from "components/molecules/list";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
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
    sort,
    setSort,
    handleDelete,
    handlePaginated,
    handleFilterMovie,
  } = useMovieController();
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link className='text-blue-400' to={`/movies/${movie._id}`}>
          {movie.title}
        </Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { content: (movie) => <Like /> },
    {
      content: (movie) => (
        <Button label={"Delete"} onClick={() => handleDelete(movie._id)} />
      ),
    },
    {},
  ];
  // @Jsx
  return movies.length === 0 ? (
    <p className='text-gray-400 text-xl'>We don't have movie yet</p>
  ) : (
    <div className='grid grid-cols-2 lg:grid-cols-4    gap-10 mt-10'>
      <div className='col-span-1'>
        <List
          selected={filter}
          handelSelectList={handleFilterMovie}
          items={genres}
        />
      </div>
      <div className='col-span-2'>
        <Table setSort={setSort} sort={sort} columns={columns} data={data} />
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          itemCount={filtered.length}
          onPageChange={handlePaginated}
        />
      </div>
    </div>
  );
};

export default MoviesComponents;
