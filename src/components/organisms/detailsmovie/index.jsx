import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaChevronRight, FaCircle, FaPlus, FaStar } from "react-icons/fa";
import { RiThumbDownFill, RiThumbDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useFetchDetailsMovies } from "store/Hook";
import { convertTime } from "utils";

const DetailsMovie = ({ id, page = "popular" }) => {
  const [like, setLike] = useState(false);
  const [isWatchList, setIsWatchList] = useState(false);
  const handWatchList = () => setIsWatchList((prev) => !prev);
  const handleLike = () => setLike((prev) => !prev);
  const { data: details, isLoading } = useFetchDetailsMovies(id);
  return (
    !isLoading && (
      <div className={""}>
        <div className='flex items-start gap-5'>
          <div className={"w-[300px] h-[300px]"}>
            <img
              className={"rounded-lg   w-full h-full object-fill"}
              src={`${process.env.REACT_APP_API_IMG}/${details.poster_path}`}
              alt={details.original_title}
            />
          </div>
          <ul className='space-y-3'>
            <li>
              <Link
                to={`/dashboard/movie/${id}`}
                className='flex items-center gap-3 group cursor-pointer'
              >
                <h3 className='text-base md:text-2xl text-gray-100 font-semibold'>
                  {details.original_title}
                </h3>
                <FaChevronRight className='text-2xl text-gray-200 mt-2 group-hover:text-yellow-400' />
              </Link>
            </li>
            <li className='space-x-2 inline-flex items-center'>
              <span className='text-gray-200 ml-2'>{details.release_date}</span>
              <FaCircle color='#fff' fontSize={4} />
              <span className='text-gray-200 ml-2'>
                {convertTime(details.runtime)}
              </span>
              <FaCircle color='#fff' fontSize={4} />
              <span className='text-gray-200 ml-2'>PG</span>
            </li>
            <li className='space-x-3  text-gray-300'>
              {details.genres?.map((genre) => (
                <>
                  <span
                    className=' after:inline-block after:ml-2 after:bg-slate-100 after:w-1 after:h-1 after:rounded-full'
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                </>
              ))}
            </li>
            <li className='inline-flex gap-1 items-center'>
              <FaStar className='text-lg text-yellow-400' />
              <span className='text-gray-200'>
                {details.vote_average} / {""}
                <span className='opacity-25'>10</span>
              </span>
            </li>
          </ul>
        </div>
        <div className='space-y-8'>
          <p className='leading-7  mt-3 capitalize text-base  text-gray-300 font-medium'>
            {details.overview}
          </p>
          <div className='flex gap-3'>
            <div
              onClick={handWatchList}
              className='bg-[#242323] cursor-pointer hover:bg-[#292727] transition-all ease-in-out duration-300 flex-grow  flex justify-center gap-3 items-center py-2 rounded-lg'
            >
              {isWatchList ? (
                <AiOutlineCheck className=' text-blue-400  text-lg' />
              ) : (
                <FaPlus className=' text-blue-400  text-lg' />
              )}
              <span className=' text-blue-400 font-semibold'>Watch List</span>
            </div>
            <div
              onClick={handleLike}
              className='bg-[#242323]  w-24 cursor-pointer flex hover:bg-[#292727] transition-all ease-in-out duration-300 justify-center gap-3 items-center py-2 rounded-lg'
            >
              {like ? (
                <RiThumbDownFill className='text-2xl text-blue-400' />
              ) : (
                <RiThumbDownLine className='text-2xl text-blue-400' />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DetailsMovie;
