import React from "react";

import * as Images from "constant/images";
import MenuItem from "./MenuItem";
import UserInfo from "../userInfo";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "context/ThemeContext";
import { TbSettingsAutomation, TbLogout } from "react-icons/tb";

export default function App() {
  const { setIsSidebar, isSidebar } = useTheme();
  return (
    <>
      <motion.aside
        className={` min-h-screen border-r top-0 left-0 border-[rgba(255,255,255,0.1)] px-6 pt-8  z-[9999] fixed ${
          isSidebar
            ? "block bg-gradient-to-r  from-bgPrimary to-[#1c2536]"
            : "hidden  lg:block"
        }`}
      >
        <div
          className={`${
            isSidebar &&
            "bg-[rgba(0,0,0,0.4)] w-full h-full inset-0 fixed z-[-1]"
          }`}
          onClick={() => setIsSidebar(false)}
        />
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
            <UserInfo />
            <MenuItem />
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
