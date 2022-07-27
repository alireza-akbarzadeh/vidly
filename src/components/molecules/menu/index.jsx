import React from "react";
import { motion, useCycle } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { RiMovie2Fill, RiCustomerService2Fill } from "react-icons/ri";
import { AiFillShopping, AiOutlinePlus } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import * as Images from "constant/images";
import { TbSettingsAutomation, TbLogout } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { Avatar } from "constant/images";
import { BsBookmarkFill } from "react-icons/bs";
import { useTheme } from "../../../context/ThemeContext";
const links = [
  {
    name: "Home",
    to: "/",
    id: 1,
    icons: (active) => (
      <HiHome
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Movie",
    to: "/movies",
    id: 2,
    icons: (active) => (
      <RiMovie2Fill
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Favorite",
    to: "/favorite",
    id: 3,
    icons: (active) => (
      <BsBookmarkFill
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Customer",
    to: "/customer",
    id: 4,
    icons: (active) => (
      <RiCustomerService2Fill
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Rentals",
    to: "/rentals",
    id: 5,
    icons: (active) => (
      <AiFillShopping
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
];

export default function App() {
  const { pathname } = useLocation();
  const [open, cycleOpen] = useCycle(false, true);
  const { setIsSidebar, isSidebar } = useTheme();

  return (
    <>
      <motion.aside
        className={` min-h-screen border-r top-0 left-0 border-[rgba(255,255,255,0.1)] px-6 pt-8  z-[9999] fixed ${
          isSidebar ? "block bg-black" : "hidden lg:block"
        }`}
      >
        <div className={"flex flex-col justify-between h-[90vh]"}>
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
            <div
              className={
                "rounded-3xl mt-5 bg-gradient-to-r from-sky-600 to-blue-600 p-4"
              }
            >
              <div className={"border-b border-[rgba(255,255,255,0.2)] py-2"}>
                <div className={"flex items-center pb-2 gap-3"}>
                  <div className={"relative"}>
                    <img
                      src={Avatar}
                      className={"rounded-full w-12 w-12"}
                      alt={"Alireza Akbarzadeh"}
                    />
                    <RiEditCircleFill
                      className={
                        "absolute text-gray-200 text-xl bottom-0 border border-2  border-blue-400 rounded-full right-0"
                      }
                    />
                  </div>
                  <div className={"text-white text-base"}>
                    <span>Alireza Akbarzadeh</span>
                    <span className={"block opacity-60 text-sm"}>
                      +98 0938 122 3880
                    </span>
                  </div>
                </div>
              </div>
              <div className={"flex justify-between items-center pt-4"}>
                <div className={"inline-flex  items-center gap-2"}>
                  <div className={"p-3 bg-white rounded-full opacity-40"}>
                    <MdOutlineAccountBalanceWallet
                      fontSize={20}
                      className={"text-gray-800 font-bold"}
                    />
                  </div>
                  <div className={"text-white"}>
                    <span className={"opacity-40 text-sm"}>balance</span>
                    <span className={"block "}>$ 38000</span>
                  </div>
                </div>
                <div
                  className={
                    "rounded-full flex items-center cursor-pointer justify-center text-gray-800 bg-gray-200 p-3"
                  }
                >
                  <AiOutlinePlus fontSize={20} />
                </div>
              </div>
            </div>
            <motion.ul className='flex items-start justify-start flex-col gap-3 mt-10'>
              {links.map(({ name, to, id, icons }) => (
                <motion.li
                  key={id}
                  className={`px-5 py-3 relative overflow-hidden
                        ${
                          to === pathname &&
                          "bg-[#27253a] w-full rounded-lg after:absolute after:w-1 after:rounded-tl-full  after:rounded-bl-full after:rounded-tr-lg after:rounded-br-lg after:h-full after:bg-gradient-to-r after:top-0  after:from-sky-600  after:left-0 after:content  after:to-blue-600"
                        }
                      `}
                >
                  <Link
                    className={`dark:text-gray-200 inline-flex gap-2 items-center relative  ${
                      to === pathname && ""
                    }`}
                    onClick={() => cycleOpen()}
                    to={to}
                  >
                    {icons()}
                    {name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className={"flex flex-col gap-5 "}>
            <Link
              to={"#"}
              className={"text-gray-200 inline-flex items-center gap-2"}
            >
              <TbSettingsAutomation />
              Setting
            </Link>
            <Link
              className={"text-redPrimary inline-flex items-center gap-2"}
              to={"#"}
            >
              <TbLogout />
              logout
            </Link>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
