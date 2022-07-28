import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useResponsive } from "hook";
import { useTheme } from "context/ThemeContext";
const MenuItem = ({ data, title }) => {
  const { pathname } = useLocation();
  const { setIsSidebar } = useTheme();
  const { width } = useResponsive();
  return (
    <>
      <h3 className='text-gray-300 opacity-30 mt-5 pl-5 uppercase font-semibold text-base'>
        {title}
      </h3>
      <motion.ul className='flex items-start justify-start flex-col gap-3 mt-5'>
        {data.map(({ name, to, id, icons }) => (
          <motion.li
            onClick={width >= 1020 ? () => setIsSidebar(false) : () => {}}
            key={id}
            className={`px-5 py-3 relative overflow-hidden
                        ${
                          to === pathname &&
                          "bg-[#27253a] w-full rounded-lg after:absolute after:w-1 after:rounded-tl-full  after:rounded-bl-full after:rounded-tr-lg after:rounded-br-lg after:h-full after:bg-gradient-to-r after:top-0  after:from-sky-600  after:left-0 after:content  after:to-blue-600"
                        }
                      `}
          >
            <Link
              className={`text-gray-200 inline-flex gap-2 items-center relative  ${
                to === pathname && ""
              }`}
              to={to}
            >
              {icons(pathname === to)}
              {name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default MenuItem;
