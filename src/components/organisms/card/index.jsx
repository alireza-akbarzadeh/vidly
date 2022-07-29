import React, { useState } from "react";
import { FaPlay, FaPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImInfo } from "react-icons/im";
import { Modal } from "components/molecules";
const Card = ({
  img,
  id,
  title,
  rate,
  className,
  isHoverCard = true,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <>
      <div {...rest} className={`cursor-pointer mt-6 ${className}`}>
        <div className={"mx-1 h-[350px]  relative"}>
          <LazyLoadImage
            className={
              "w-full h-full  object-fill  rounded-tr-2xl rounded-tl-2xl"
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
            <Link
              to={`/movie/${id}`}
              className='bg-[#242323]  flex justify-center gap-3 items-center py-2 rounded-lg'
            >
              <FaPlus className='text-sky-600   text-lg' />
              <span className='text-sky-600 font-semibold'>Watch List</span>
            </Link>
            <div className='flex items-center  justify-between'>
              <div className=' inline-flex  hover:bg-[#242323]  px-3 pt-2  transition-all ease-in-out duration-300 rounded-md items-center gap-2'>
                <FaPlay className='text-gray-400' />
                <span className='text-white text-lg'>Trailer</span>
              </div>
              <div
                onClick={() => setOpen(true)}
                className='rounded-full px-3 py-3 transition-all ease-in-out duration-300 hover:bg-[#242323]'
              >
                <ImInfo className='text-gray-300 text-lg ' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Modal open={open} onClose={onClose}>
          test
        </Modal>
      )}
    </>
  );
};

export default Card;
