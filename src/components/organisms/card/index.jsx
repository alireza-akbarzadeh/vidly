import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ img, id, title, rate, isHoverCard = true, ...rest }) => {
  return (
    <Link to={`/movie/${id}`} {...rest} className={"cursor-pointer mt-6"}>
      <div className={"mx-1  relative"}>
        <LazyLoadImage
          className={"w-full h-full object-contain  rounded-2xl"}
          alt={title}
          src={`${process.env.REACT_APP_API_IMG}/${img}`}
        />
        {isHoverCard && (
          <div className='absolute w-full flex items-center justify-between rounded-tr-xl py-2 rounded-tl-xl px-5 top-0 bg-[rgba(0,0,0,0.6)]'>
            <h4 className={"text-gray-200 font-medium text-sm mt-2"}>
              {title}
            </h4>
            <div className={"flex items-center gap-2 mt-2"}>
              <FaStar color={"#FFD700"} />
              <span className={"text-yellow-600 font-bold text-lg"}>
                {rate.toFixed()}
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
