import React, { useRef, useState } from "react";
import * as Images from "constant/images";
import { BsSun } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { useTheme } from "context/ThemeContext";
import useOutsideClick from "hook/useOutSideClick";
import { Menu } from "components/molecules";
import { Link } from "react-router-dom";
import { useCycle } from "framer-motion";
const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const handleOpenSearch = () => setIsSearchOpen((prev) => !prev);
  const handleOpenMenu = () => setIsMenuOpen((prev) => !prev);
  const ref = useRef(null);
  const { isOutSide } = useOutsideClick(ref);

  return (
    <header ref={ref}>
      <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 border-b dark:border-gray-800'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
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
          <div className='flex gap-3 md:order-2'>
            <button
              onClick={handleOpenSearch}
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Search</span>
            </button>
            <div className='hidden relative md:block'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3  pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Search icon</span>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
            <Menu />
            <button
              className='inline-flex items-center p-1 px-3 text-sm text-gray-500 rounded-sm  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              type='button'
              onClick={() => toggleTheme()}
            >
              {mode() === "light" ? <BsSun /> : <RiMoonFill color='#faf8f9' />}
            </button>
          </div>
          <div
            className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
            id='navbar-search'
          >
            <div className='relative mt-3 md:hidden'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
