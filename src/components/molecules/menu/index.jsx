import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Button } from "components/atomes";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import {
  RiMovie2Fill,
  RiCustomerService2Fill,
  RiLoginBoxFill,
} from "react-icons/ri";
import { AiFillShopping, AiOutlineLogin } from "react-icons/ai";
const links = [
  { name: "Home", to: "/", id: 1, icons: <HiHome /> },
  { name: "Movie", to: "/movie", id: 2, icons: <RiMovie2Fill /> },
  {
    name: "Customer",
    to: "/customer",
    id: 3,
    icons: <RiCustomerService2Fill />,
  },
  { name: "Rentals", to: "/rentals", id: 4, icons: <AiFillShopping /> },
  { name: "login", to: "/login", id: 5, icons: <RiLoginBoxFill /> },
  { name: "register", to: "/register", id: 6, icons: <AiOutlineLogin /> },
];
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export default function App() {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.aside
            className='dark:bg-gray-800 absolute min-h-screen top-0 right-0'
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <div className='text-right mt-4'>
              <Button icon={<FaTimes />} onClick={cycleOpen} />
            </div>
            <motion.ul
              className='flex items-start justify-start flex-col gap-8  mt-10 px-4'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              {links.map(({ name, to, id, icons }) => (
                <motion.a
                  className={`dark:text-gray-200 inline-flex gap-2 items-center relative ${
                    id === 5 && "border-t  w-full pt-10 "
                  }`}
                  onClick={() => cycleOpen()}
                  key={id}
                  href={to}
                  whileHover={id !== 5 ? { scale: 1.1 } : { scale: 1 }}
                  variants={itemVariants}
                >
                  {icons}
                  {name}
                </motion.a>
              ))}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
      <button
        onClick={() => cycleOpen()}
        type='button'
        className='inline-flex items-center p-2 text-sm
         text-gray-500 rounded-lg  hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
           dark:text-gray-400 dark:hover:bg-gray-700
            dark:focus:ring-gray-600'
      >
        <HiMenuAlt3 fontSize={26} />
      </button>
    </main>
  );
}
