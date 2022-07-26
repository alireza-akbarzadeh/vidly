import React, { useRef, useState } from "react";
import { BsSun } from "react-icons/bs";
import { RiMoonFill, RiNotification3Fill, RiSearch2Line } from "react-icons/ri";
import { useTheme } from "context/ThemeContext";
import useOutsideClick from "hook/useOutSideClick";
import { useCycle } from "framer-motion";
import { SiCircle } from "react-icons/si";
import { FaFilter } from "react-icons/fa";

const Navbar = ({ className }) => {
  const [open, cycleOpen] = useCycle(false, true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const handleOpenSearch = () => setIsSearchOpen((prev) => !prev);
  const handleOpenMenu = () => setIsMenuOpen((prev) => !prev);
  const ref = useRef(null);
  const { isOutSide } = useOutsideClick(ref);

  return (
    <header className={className} ref={ref}>
      <nav className="px-2 sm:px-4 py-6 ">
        <div className={"flex gap-5 items-center flex-row"}>
          <div className={"relative grow"}>
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
              "border rounded-3xl px-8 py-4 text-white inline-flex gap-4 items-center border-[rgba(255,255,255,0.2)]"
            }
          >
            <SiCircle />
            Easy login by phone
          </button>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
