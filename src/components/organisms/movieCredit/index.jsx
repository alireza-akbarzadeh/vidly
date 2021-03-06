import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import { useFetchMoviesCredit } from "store/Hook";
import { useMediaQuery } from "react-responsive";

const MovieCredit = ({ id }) => {
  const { data, isLoading } = useFetchMoviesCredit(id);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1130px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          background: "transparent",
        }}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          background: "transparent",
        }}
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3500,
    pauseOnHover: true,
    slidesToShow: isMobile ? 3 : 5,
    slidesToScroll: 4,
    vertical: isBigScreen,
    verticalSwiping: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    !isLoading && (
      <>
        <h3 className='text-gray-100 text-font-semibold text-xl mb-6 mt-5 lg:mt-0'>
          Cast & Crew
        </h3>
        <Slider {...settings}>
          {data?.cast?.map((item) => (
            <div className='cursor-pointer' key={item.id}>
              <div className='w-14 h-14 lg:w-28 lg:h-28  mt-8'>
                <LazyLoadImage
                  className={"w-full h-full object-cover  rounded-full"}
                  alt={item.name}
                  src={`${process.env.REACT_APP_API_IMG}/${item.profile_path}`}
                />
              </div>
              <div className='text-white'>
                <h4 className='text-gray-300 text-font-semibold mt-1 whitespace-nowrap text-xs md:text-base'>
                  {item.name}
                </h4>
                <h4 className='text-gray-300 text-font-semibold mt-1 whitespace-nowrap text-xs md:text-base'>
                  {item.character}
                </h4>
              </div>
            </div>
          ))}
          {data?.crew?.map((item) => (
            <div
              className='flex flex-col md:flex-row  items-center gap-5 cursor-pointer'
              key={item.id}
            >
              <div className=' w-14 h-14 lg:w-28 lg:h-28  mt-8'>
                <LazyLoadImage
                  className={"w-full h-full object-cover  rounded-full"}
                  alt={item.name}
                  src={`${process.env.REACT_APP_API_IMG}/${item.profile_path}`}
                />
              </div>
              <h4 className='text-gray-300 text-font-semibold mt-1 whitespace-nowrap'>
                {item.name}
              </h4>
              <h4 className='text-gray-300 text-font-semibold mt-1 whitespace-nowrap'>
                {item.job}
              </h4>
            </div>
          ))}
        </Slider>
      </>
    )
  );
};

export default MovieCredit;
