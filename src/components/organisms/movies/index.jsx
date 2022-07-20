import { Button, Like, Select } from "components/atomes";
import { Table } from "components/molecules";
import { Input } from "components/atomes";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import useMovieController from "./useMovieController";

const MoviesComponents = () => {
  const navigate = useNavigate();
  const {
    data,
    currentPage,
    movies,
    pageSize,
    genres,
    filtered,
    sort,
    setSort,
    handleDelete,
    handlePaginated,
    handleFilterMovie,
    handleSearch,
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
        <Button
          label={"Delete"}
          variant='danger'
          onClick={() => handleDelete(movie._id)}
        />
      ),
    },
    {},
  ];
  // @Jsx
  return movies.length === 0 ? (
    <p className='text-gray-400 text-xl'>We don't have movie yet</p>
  ) : (
    <div className='mt-10 max-w-screen-lg mx-auto w-full'>
      <Button label={"New"} onClick={() => navigate("/movies/new")} />
      <div className='flex flex-col md:flex-row items-center justify-between md:gap-8'>
        <div className='w-full'>
          <Select
            placeholder={"Select The Genre"}
            onChange={({ target }) => handleFilterMovie(target.value)}
            option={genres}
          />
        </div>
        <div className='w-full mt-2'>
          <Input
            placeholder='search ...'
            type='search'
            onChange={({ target }) => handleSearch(target.value)}
          />
        </div>
      </div>
      <Table setSort={setSort} sort={sort} columns={columns} data={data} />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        itemCount={filtered.length}
        onPageChange={handlePaginated}
      />
    </div>
  );
};

export default MoviesComponents;
