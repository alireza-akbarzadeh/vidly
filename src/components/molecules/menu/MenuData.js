import { HiHome, HiTrendingUp } from "react-icons/hi";
import { RiMovie2Fill, RiSlideshow3Fill } from "react-icons/ri";
import { AiFillShopping, AiFillStar, AiOutlineLogout } from "react-icons/ai";
import {
  BsBookmarkFill,
  BsFillAwardFill,
  BsPatchCheckFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {
  TbLayoutDistributeHorizontal,
  TbSettingsAutomation,
} from "react-icons/tb";
import { SiPytorchlightning } from "react-icons/si";
import { MdDownload, MdOutlinePresentToAll } from "react-icons/md";

export const Menu = [
  {
    name: "Home",
    to: "/dashboard",
    id: 1,
    icons: (active) => (
      <HiHome
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Community",
    to: "/dashboard/community",
    id: 2,
    icons: (active) => (
      <BsShieldFillCheck
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Discover",
    to: "/dashboard/discover",
    id: 3,
    icons: (active) => (
      <SiPytorchlightning
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Awards",
    to: "/dashboard/awards",
    id: 4,
    icons: (active) => (
      <BsFillAwardFill
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Celeb",
    to: "/dashboard/celeb",
    id: 5,
    icons: (active) => (
      <FaUser
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
];

export const Library = [
  {
    name: "Recent",
    to: "/dashboard/Recent",
    id: 1,
    icons: (active) => (
      <MdOutlinePresentToAll
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "To Rated",
    to: "/dashboard/top-rated",
    id: 2,
    icons: (active) => (
      <AiFillStar
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Download",
    to: "/dashboard/download",
    id: 3,
    icons: (active) => (
      <MdDownload
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
];

export const General = [
  {
    name: "Setting",
    to: "/dashboard/setting",
    id: 1,
    icons: (active) => (
      <TbSettingsAutomation
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Log out",
    to: "/dashboard/logout",
    id: 2,
    icons: (active) => (
      <AiOutlineLogout
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
];
export const Category = [
  {
    name: "Tv Show",
    to: "/dashboard/tv-show",
    id: 1,
    icons: (active) => (
      <RiSlideshow3Fill
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Movie",
    to: "/dashboard/movies",
    id: 2,
    icons: (active) => (
      <RiMovie2Fill
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Anime",
    to: "/dashboard/anime",
    id: 3,
    icons: (active) => (
      <BsPatchCheckFill
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
  {
    name: "Trending",
    to: "/dashboard/trending",
    id: 4,
    icons: (active) => (
      <HiTrendingUp
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },

  {
    name: "Rentals",
    to: "/dashboard/rentals",
    id: 5,
    icons: (active) => (
      <TbLayoutDistributeHorizontal
        fontSize={20}
        className={active ? `text-blue-800` : "text-gray-400 opacity-40"}
      />
    ),
  },
];
