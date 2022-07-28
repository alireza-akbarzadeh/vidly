import { HiHome } from "react-icons/hi";
import { RiMovie2Fill } from "react-icons/ri";
import { AiFillShopping } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export const links = [
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
    name: "User",
    to: "/customer",
    id: 4,
    icons: (active) => (
      <FaUser
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
