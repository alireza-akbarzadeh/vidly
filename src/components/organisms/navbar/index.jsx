import React, { useRef, useState } from "react";
import { BsSun } from "react-icons/bs";
import { RiMoonFill, RiNotification3Fill, RiSearch2Line } from "react-icons/ri";
import { useTheme } from "context/ThemeContext";
import useOutsideClick from "hook/useOutSideClick";
import { useCycle } from "framer-motion";
import { SiCircle } from "react-icons/si";
import { FaFilter } from "react-icons/fa";
import { Search } from "../../molecules";
import { RiMenu3Line } from "react-icons/ri";
import styled from "styled-components";

const Navbar = ({ className }) => {
  const [open, cycleOpen] = useCycle(false, true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode, toggleTheme, setIsSidebar } = useTheme();
  const handleOpenSearch = () => setIsSearchOpen((prev) => !prev);
  const handleOpenMenu = () => setIsMenuOpen((prev) => !prev);
  const ref = useRef(null);
  const { isOutSide } = useOutsideClick(ref);
  return (
    <header className={className} ref={ref}>
      <nav
        className={`lg:px-2 inset-x-0 z-50 py-1 px-1 sm:px-4 lg:py-6 
         fixed md:relative bottom-0 w-full`}
      >
        <div className={"flex gap-5 items-center justify-between flex-row"}>
          <Search />
          <button
            className={
              "border rounded-full p-4 text-white border-[rgba(255,255,255,0.2)]"
            }
          >
            <RiNotification3Fill fontSize={22} />
          </button>
          <div className={""}>
            <button
              className={
                "border rounded-full p-4 text-white border-[rgba(255,255,255,0.2)]"
              }
            >
              <BsSun fontSize={22} />
            </button>
          </div>
          <div className={"lg:hidden block"}>
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
