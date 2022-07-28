import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FaFilter, FaTimes } from "react-icons/fa";
import { searchMovie } from "services/api";
import { useMovie } from "context/MovieContext";
import { useNavigate } from "react-router-dom";

const Search = ({ setIsSearchOpen, isSearchOpen }) => {
  const [query, setQuery] = useState("");
  const { setSearch } = useMovie();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/movie/search/${query}`);
    }
  };
  const handleCleanSearch = () => {
    setSearch("");
    setQuery("");
  };
  return (
    <>
      <div
        style={isSearchOpen ? { display: "block" } : {}}
        className={`relative grow shrink hidden  md:block `}
      >
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
              "border rounded-3xl px-14 py-4 outline-none text-white border-[rgba(255,255,255,0.2)] bg-transparent w-full"
            }
            type='text'
          />
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
        onClick={() => setIsSearchOpen((prev) => !prev)}
        className={
          "border rounded-full p-4 text-white md:hidden border-[rgba(255,255,255,0.2)]"
        }
      >
        {isSearchOpen ? (
          <FaTimes />
        ) : (
          <RiSearch2Line fontSize={22} className={""} />
        )}
      </button>
    </>
  );
};

export default Search;
