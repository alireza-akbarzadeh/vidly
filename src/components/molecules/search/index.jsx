import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className={"relative grow shrink hidden sm:block"}>
        <RiSearch2Line
          fontSize={22}
          className={"absolute  text-[rgba(255,255,255,0.3)] top-4 left-5"}
        />
        <input
          placeholder={"Type to search"}
          className={
            "border rounded-3xl px-14 py-4 text-white border-[rgba(255,255,255,0.2)] bg-transparent w-full"
          }
          type="text"
        />
        <div
          className={
            "absolute text-[rgba(255,255,255,0.3)] top-5  top-0 right-5"
          }
        >
          <span
            className={
              "border-l absolute h-full right-10  border-[rgba(255,255,255,0.3)]"
            }
          />

          <FaFilter fontSize={20} />
        </div>
      </div>
      <button
        className={
          "border rounded-full p-4 text-white border-[rgba(255,255,255,0.2)]"
        }
      >
        <RiSearch2Line fontSize={22} className={" "} />
      </button>
    </>
  );
};

export default Search;
