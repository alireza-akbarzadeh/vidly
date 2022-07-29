import React, { useState } from "react";
import { FaPlay, FaPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImInfo } from "react-icons/im";
import DetailsModal from "../detailsModal";
import { AiOutlineCheck } from "react-icons/ai";
import { BsBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";

const Card = ({
  img,
  id,
  title,
  rate,
  className,
  isHoverCard = true,
  ...rest
}) => {
  const [isWatchList, setIsWatchList] = useState(false);
  const handWatchList = () => setIsWatchList((prev) => !prev);
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <>
      <div {...rest} className={`cursor-pointer  relative  mt-6 ${className}`}>
        <div className={"mx-1 h-[350px]  relative "}>
          <LazyLoadImage
            className={
              "w-full h-full  object-fill  rounded-tr-2xl  rounded-tl-2xl"
            }
            alt={title}
            src={`${process.env.REACT_APP_API_IMG}/${img}`}
          />
          <div className='bg-[#1a1a1a] rounded-br-2xl rounded-bl-2xl space-y-4 py-2 px-4'>
            <div className='inline-flex items-center gap-2'>
              <FaStar className='text-yellow-400 text-lg' />
              <span className='text-lg text-gray-100'>{rate.toFixed()}</span>
            </div>
            <h3 className='text-gray-300'>{title ? title : "Not exist"}</h3>
            <div
              onClick={handWatchList}
              className='bg-[#242323]  flex justify-center gap-3 items-center py-2 rounded-lg'
            >
              {isWatchList ? (
                <AiOutlineCheck className=' text-blue-400  text-lg' />
              ) : (
                <FaPlus className=' text-blue-400  text-lg' />
              )}
              <span className='text-sky-600 font-semibold'>Watch List</span>
            </div>
            <div className='flex items-center  justify-between'>
              <Link
                to={`/dashboard/movie/${id}`}
                className=' inline-flex  hover:bg-[#242323]  px-3 pt-2  transition-all ease-in-out duration-300 rounded-md items-center gap-2'
              >
                <FaPlay className='text-gray-400' />
                <span className='text-white text-lg'>Trailer</span>
              </Link>
              <div
                onClick={() => setOpen(true)}
                className='rounded-full px-3 py-3 transition-all ease-in-out duration-300 hover:bg-[#242323]'
              >
                <ImInfo className='text-gray-300 text-lg ' />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute r  top-0 left-3 '>
          {isWatchList ? (
            <BsBookmarkCheckFill className='text-4xl text-yellow-400' />
          ) : (
            <BsBookmarkPlus className='text-4xl' />
          )}
        </div>
      </div>
      {open && <DetailsModal id={id} open={open} onClose={onClose} />}
    </>
  );
};

export default Card;
