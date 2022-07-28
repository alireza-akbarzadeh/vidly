import { CircleProgress } from "components/molecules";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useFetchDetailsMovies } from "store/Hook";
import { MovieCredit, Videos } from "..";
import { FaPlay } from "react-icons/fa";
import { BsBookmark, BsHeart, BsPlay, BsShare } from "react-icons/bs";

const SingleMovieDetails = ({ id }) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { data, isLoading } = useFetchDetailsMovies(id);
  return (
    !isLoading && (
      <>
        <div className='w-full relative lg:h-[700px]'>
          {playTrailer ? (
            <Videos id={id} />
          ) : (
            <>
              <LazyLoadImage
                className={
                  "w-full h-full   object-cover  rounded-2xl bg-blend-multiply backdrop-blur-sm"
                }
                alt={data.title}
                src={`${process.env.REACT_APP_API_IMG}/${data.backdrop_path}`}
              />
              <div
                onClick={() => setPlayTrailer(true)}
                className='absolute inset-[50%] cursor-pointer translate-x-[-50%] translate-y-[-50%] bg-bgSameColor w-20  h-20 flex items-center justify-center rounded-full'
              >
                <FaPlay fontSize={25} color='#faf8f9' />
              </div>
            </>
          )}
        </div>
        <div className='grid md:grid-cols-12 grid-cols-3  gap-16  px-4'>
          <div className='col-span-3 text-white order-2'>
            <div className='w-full h-300px'>
              <LazyLoadImage
                className={"w-full h-full object-cover  rounded-2xl"}
                alt={data.title}
                src={`${process.env.REACT_APP_API_IMG}/${data.poster_path}`}
              />
            </div>
            <div className='flex justify-center flex-col items-center'>
              <CircleProgress
                percentage={data.vote_average * 10}
                color='#ff515a'
              />

              <div className='space-y-2 '>
                <div className='flex items-center gap-1'>
                  <span className='text-gray-200 font-semibold'>
                    popularity
                  </span>
                  <span className='text-gray-300 opacity-40'>
                    {data.popularity}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-gray-200 font-semibold'>Vote</span>
                  <span className='text-gray-300 opacity-40'>
                    {data.vote_count}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-7'>
            <ul className='space-y-4'>
              <li>
                <h2 className='text-white font-semibold text-xl md:text-2xl'>
                  {data.title}
                </h2>
              </li>
              <li className='text-gray-200 '>
                <span>original Title : </span>
                <span>{data.original_title}</span>
              </li>
              <li className='text-gray-200 '>
                <span>Release Data : </span>
                <span>{data.release_date}</span>
              </li>
              <li className='flex items-center gap-10'>
                <div>
                  <button className='bg-bgSameColor inline-flex items-center gap-2 rounded-2xl text-gray-200 font-semibold px-4 py-3'>
                    Watch trailer
                    <BsPlay fontSize={22} color='#faf8f9' />
                  </button>
                </div>
                <div>
                  <button className='flex justify-center rounded-full w-14 h-14 items-center gap-2  text-gray-200 font-semibold  border border-[rgba(255,255,255,0.3)]'>
                    <BsBookmark fontSize={22} color='#faf8f9' />
                  </button>
                </div>
                <div>
                  <button className='flex justify-center rounded-full items-center gap-2  w-14 h-14 text-gray-200 font-semibold px-2 py-3 border border-[rgba(255,255,255,0.3)]'>
                    <BsHeart fontSize={22} color='#faf8f9' />
                  </button>
                </div>
                <div>
                  <button className='flex justify-center rounded-full items-center gap-2  w-14 h-14 text-gray-200 font-semibold px-2 py-3 border border-[rgba(255,255,255,0.3)]'>
                    <BsShare fontSize={22} color='#faf8f9' />
                  </button>
                </div>
              </li>
              <li>
                <p className='text-base lg-text-lg text-gray-300 leading-7 capitalize'>
                  {data.overview}
                </p>
              </li>
            </ul>
            <h5 className='text-white text-lg lg-text-3xl font-semibold mt-6'>
              Details
            </h5>
            <ul className='space-y-5'>
              <li className='border-b border-[rgba(255,255,255,0.3)] mt-6 pb-6 flex justify-between items-center'>
                <span className='text-gray-300 font-semibold'>Genres</span>
                <p>
                  {data?.genres?.map((genre) => (
                    <span
                      className='bg-[#454e50] rounded-3xl mr-3 text-white px-3 py-2'
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))}
                </p>
              </li>

              <li className='border-b border-[rgba(255,255,255,0.3)] mt-6 pb-6 flex justify-between items-center text-white'>
                <span>Country of Origin</span>
                <span>
                  {data?.production_countries.map((country) => (
                    <span ky={country.iso_3166_1}>{country.name}</span>
                  ))}
                </span>
              </li>
              <li className='border-b border-[rgba(255,255,255,0.3)] mt-6 pb-6 flex justify-between items-center text-white'>
                <span>Production companies</span>
                <span>
                  {data?.production_companies.map((product) => (
                    <span ky={product.id}>{product.name}</span>
                  ))}
                </span>
              </li>
              <li className='border-b border-[rgba(255,255,255,0.3)] mt-6 pb-6 flex justify-between items-center text-white'>
                <span>runtime</span>
                <span>
                  <span>{data.runtime}</span>
                </span>
              </li>
              <li className='border-b border-[rgba(255,255,255,0.3)] mt-6 pb-6 flex justify-between items-center text-white'>
                <span>budget</span>
                <span>
                  <span>{data.budget.toLocaleString()}</span>
                </span>
              </li>
            </ul>
          </div>
          <div className='col-span-2 order-[-1]'>
            <MovieCredit id={id} />
          </div>
        </div>
      </>
    )
  );
};

export default SingleMovieDetails;
