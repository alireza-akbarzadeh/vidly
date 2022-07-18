import React from "react";
import { motion } from "framer-motion";

const Menu = ({ handleOpenMenu }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-1000px)" }}
        animate={{ opacity: 1, transform: "translateX(0 )" }}
        transition={{ duration: 0.5 }}
        className='bg-red-500 dark:bg-gray-900'
      >
        <div
          className={`fixed z-50 right-0  border-l w-[250px] min-h-screen top-0 
        transition-all ease-in-out duration-500`}
        >
          <span onClick={handleOpenMenu}>close</span>
          <ul className='flex flex-col gap-10 capitalize font-semibold justify-end items-end'>
            <li>
              <a href='#'>Item1</a>
            </li>
            <li>
              <a href='#'>Item2</a>
            </li>
            <li>
              <a href='#'>items3</a>
            </li>
            <li>
              <a href='#'>item4</a>
            </li>
            <li>
              <a href='#'>item5</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
