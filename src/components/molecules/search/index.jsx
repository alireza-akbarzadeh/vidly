import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FaFilter, FaTimes } from "react-icons/fa";
import { searchMovie } from "services/api";
import { useMovie } from "context/MovieContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const { setSearch } = useMovie();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      searchMovie(query).then((res) => setSearch(res));
    }
  };
  const handleCleanSearch = () => {
    setSearch("");
    setQuery("");
  };
  return (
    <>
      <div className={"relative grow shrink hidden sm:block"}>
        <RiSearch2Line
          fontSize={22}
          className={"absolute  text-[rgba(255,255,255,0.3)] top-4 left-5"}
        />
        <form onSubmit={handleSearch}>
          <input
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            placeholder={"Type to search"}
            className={
              "border rounded-3xl px-14 py-4 text-white border-[rgba(255,255,255,0.2)] bg-transparent w-full"
            }
            type='text'
          />
          <div className='absolute top-0 cursor-pointer right-20 translate-y-5'>
            {query && (
              <FaTimes onClick={handleCleanSearch} fontSize={20} color='#fff' />
            )}
          </div>
          <div
            className={"absolute text-[rgba(255,255,255,0.3)] top-5   right-5"}
          >
            <span
              className={
                "border-l absolute h-full right-10  border-[rgba(255,255,255,0.3)]"
              }
            />
            <FaFilter fontSize={20} />
            <input type='submit' hidden />
          </div>
        </form>
      </div>
      <button
        className={
          "border rounded-full p-4 text-white lg:hidden border-[rgba(255,255,255,0.2)]"
        }
      >
        <RiSearch2Line fontSize={22} className={" "} />
      </button>
    </>
  );
};

export default Search;
