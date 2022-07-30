import React from "react";

import * as Images from "constant/images";
import MenuItem from "./MenuItem";

import { Link } from "react-router-dom";
import { useTheme } from "context/ThemeContext";
import { Category, General, Library, Menu } from "./MenuData";
export default function App() {
  const { setIsSidebar, isSidebar } = useTheme();
  return (
    <aside
      className={`border-r  z-[9999] fixed w-[300px]  overflow-y-scroll h-screen top-0 left-0 border-[rgba(255,255,255,0.1)] px-6 pt-8  sidebar ${
        isSidebar ? "block bg-[#0c1216]" : "hidden  lg:block"
      }`}
    >
      <div
        className={`${
          isSidebar && "bg-[rgba(0,0,0,0.4)] w-full h-full inset-0 fixed z-[-1]"
        }`}
        onClick={() => setIsSidebar(false)}
      />
      <div>
        <Link to='/' className='flex items-center'>
          <img
            src={Images.Logo}
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Vidly
          </span>
        </Link>
        <MenuItem title='Menu' data={Menu} />
        <MenuItem title='Category' data={Category} />
        <MenuItem title='Library' data={Library} />
        <MenuItem title='General' data={General} />
      </div>
    </aside>
  );
}
