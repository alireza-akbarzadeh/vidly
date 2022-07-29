import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const EffectMovie = ({ item, handleOpenModal, isSearch }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={
        isSearch
          ? () => navigate(`/movie/${item.id}`)
          : () => handleOpenModal(item.id)
      }
      className={"col-span-4 lg:col-span-3 relative group"}
    >
      <LazyLoadImage
        className='w-full h-full object-contain cursor-pointer rounded-2xl'
        alt={item.title}
        src={`${process.env.REACT_APP_API_IMG}/${item.poster_path}`}
      />
      <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 overflow-hidden  transition-all ease-in-out duration-200'>
        <div className=' flex justify-between w-full bg-[rgba(0,0,0,0.5)] py-2 rounded-tr-2xl rounded-tl-2xl px-6  items-center absolute top-0'>
          <h3 className='text-gray-200 '>{item.original_title}</h3>
          <span className='text-gray-200'>{item.vote_average}</span>
        </div>
        <ul className='absolute bottom-0    bg-[rgba(0,0,0,0.5)] py-2 rounded-br-2xl rounded-bl-2xl px-6 text-white'>
          <li className='flex items-center justify-between'>
            <span>Date :</span>
            <span>{item.release_date}</span>
          </li>
          <li className='flex items-center justify-between'>
            <span>authorize :</span>
            <span>{item.adult ? "adult" : "teen age"}</span>
          </li>
          <li>{item.vote_average}</li>
          <li>{item.title}</li>
          <li className='flex items-center justify-between'>
            <span>Language :</span>
            <span>{item.original_language}</span>
          </li>
          <li className='font-bold mt-2 capitalize'>
            {item.overview.substring(1, 150) + "...."}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EffectMovie;
