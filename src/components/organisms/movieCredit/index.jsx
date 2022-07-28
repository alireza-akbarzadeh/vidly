import { useResponsive } from "hook";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import { useFetchMoviesCredit } from "store/Hook";

const MovieCredit = ({ id }) => {
  const { data, isLoading } = useFetchMoviesCredit(id);
  const { width } = useResponsive();
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
    slidesToShow: 2,
    slidesToScroll: 4,
    vertical: width < 700,
    verticalSwiping: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    !isLoading && (
      <>
        <h3 className='text-gray-100 text-font-semibold text-xl mb-6'>
          Cast & Crew
        </h3>
        <Slider {...settings}>
          {data?.cast?.map((item) => (
            <div
              className='flex  flex-col md:flex-row  items-center gap-3 cursor-pointer'
              key={item.id}
            >
              <div className='w-28 h-28 mt-8'>
                <LazyLoadImage
                  className={"w-full h-full object-cover  rounded-full"}
                  alt={item.name}
                  src={`${process.env.REACT_APP_API_IMG}/${item.profile_path}`}
                />
              </div>
              <div>
                <h4 className='text-gray-300 text-font-semibold mt-1 whitespace-nowrap'>
                  {item.name}
                </h4>
                <h4 className='text-gray-300 text-font-semibold mt-1 whitespace-nowrap'>
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
              <div className='w-28 h-28 mt-8'>
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
