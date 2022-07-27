import React from "react";
import { FaStar } from "react-icons/fa";
import useFetchReviewMovie from "store/Hook/movie/useFetchReviewMovie";

const Review = ({ id }) => {
  const { data } = useFetchReviewMovie(id);
  return (
    <div className='mt-4'>
      <h3 className='text-gray-100 text-2xl '>Reviews</h3>
      <div className='grid  grid-cols-2 md:grid-cols-4 gap-10'>
        {data?.results?.map((item) => (
          <div key={item.id} className='space-y-7 mt-6 col-span-2'>
            <div className='flex justify-between items-center'>
              <div className='inline-flex items-center gap-5'>
                <img
                  className='rounded-full'
                  src={item.author_details.avatar_path?.replace("/", "")}
                  alt={item.author_details.username}
                />
                <div>
                  <span className='text-gray-300'>
                    {item.author_details.username}
                  </span>
                  <p className='text-gray-300 mt-1'>{item.created_at}</p>
                </div>
              </div>
              <div className='bg-[#21242c] py-2 px-5 rounded-2xl inline-flex gap-3 items-center'>
                <FaStar className='text-yellow-400' />
                <p className='text-white'>{item.author_details.rating}</p>
              </div>
            </div>
            <p className='text-gray-200 leading-7 capitalize'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
