import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import { RiEditCircleFill, RiNotification3Fill } from "react-icons/ri";
import { useTheme } from "context/ThemeContext";
import { Search } from "../../molecules";
import { RiMenu3Line } from "react-icons/ri";
import { Avatar } from "constant/images";

const Navbar = ({ className }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { setIsSidebar } = useTheme();
  return (
    <header className={className}>
      <nav
        className={`lg:px-2 inset-x-0 z-50 py-2 px-1 sm:px-4  lg:py-6 bg-[rgba(0,0,0,0.9)] rounded-tr-2xl rounded-tl-2xl md:rounded-none md:bg-transparent
         fixed md:relative bottom-0 w-full`}
      >
        <div className={"flex gap-5 items-center justify-between flex-row"}>
          <Search
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />
          <div className={` relative ${isSearchOpen && "hidden"}`}>
            <img
              src={Avatar}
              className={"rounded-full w-12"}
              alt={"Alireza Akbarzadeh"}
            />
            <RiEditCircleFill
              className={
                "absolute text-gray-200 text-xl bottom-0  border-2  border-blue-400 rounded-full right-0"
              }
            />
          </div>
          <button
            className={`border rounded-full p-4  text-white border-[rgba(255,255,255,0.2)] ${
              isSearchOpen && "hidden"
            }`}
          >
            <RiNotification3Fill fontSize={22} />
          </button>

          <div className='hidden md:block'>
            <button
              className={`border rounded-full p-4 text-white border-[rgba(255,255,255,0.2)] ${
                isSearchOpen && "hidden"
              }`}
            >
              <BsSun fontSize={22} />
            </button>
          </div>

          <div className={`lg:hidden block ${isSearchOpen && "hidden"}`}>
            <button
              onClick={() => setIsSidebar((prev) => !prev)}
              className={
                "border rounded-full p-4 text-white border-[rgba(255,255,255,0.2)]"
              }
            >
              <RiMenu3Line fontSize={22} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
