import { useState, useEffect } from "react";
import { getMovies } from "services/fakeMovieService";
import { getGenres } from "services/fakeGenreService";
import { paginate } from "utils";
import _ from "lodash";
const useMovieController = () => {
  const [movies, setMovies] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenre] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ path: "title", order: "asc" });
  useEffect(() => {
    const AddGenres = [{ name: "All Genre" }, ...getGenres()];
    setGenre(AddGenres);
    setMovies(getMovies());
  }, []);
  // @handles
  const handleDelete = (id) => {
    const filterData = movies.filter((m) => m._id !== id);
    setMovies(filterData);
  };
  const handlePaginated = (page) => {
    setCurrentPage(page);
  };
  const handleFilterMovie = (sort) => {
    setFilter(sort);
    setCurrentPage(1);
    setSearch("");
  };
  const handleSearch = (val) => {
    const search = sorted.filter((x) =>
      x.title.toLowerCase().startsWith(val.toLowerCase())
    );
    setSearch(search);
    setCurrentPage(1);
  };

  // @filter
  const filtered =
    filter && filter !== "All Genre"
      ? movies.filter((m) => m.genre.name === filter)
      : movies;
  // @sort
  const sorted = _.orderBy(filtered, [sort.path], [sort.order]);
  // @sort

  const finalData = search.length > 0 ? search : sorted;
  const data = paginate(finalData, currentPage, pageSize);
  return {
    data,
    movies,
    currentPage,
    pageSize,
    filter,
    filtered,
    genres,
    handlePaginated,
    handleDelete,
    handleSearch,
    handleFilterMovie,
    setSort,
    sort,
  };
};

export default useMovieController;
