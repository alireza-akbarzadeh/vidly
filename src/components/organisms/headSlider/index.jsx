import React, { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeadSlide = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute  right-0  cursor-pointer translate-y-[-50%] top-[50%] bg-[rgba(0,0,0,0.6)] rounded-tl fontSize={22}-lg rounded-bl-lg px-2 py-4`}
        onClick={onClick}
      >
        <HiOutlineChevronRight fontSize={22} color='#ffff' />
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-0  cursor-pointer translate-y-[-50%] z-50 top-[50%] bg-[rgba(0,0,0,0.6)] rounded-tr-lg rounded-br-lg px-2 py-4 `}
        onClick={onClick}
      >
        <HiOutlineChevronLeft fontSize={22} color='#ffff' />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    customPaging: (i) => {
      return (
        <div
          className={`bg-white ${
            i === currentSlide && "bg-bgSameColor"
          } w-3 h-3 mt-3 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300  rounded-full`}
        />
      );
    },
  };

  return (
    <Slider {...settings}>
      {data?.map((pop) => (
        <Link
          to={`/movie/${pop.id}`}
          key={pop.id}
          className='h-[700px] w-full cursor-pointer'
        >
          <LazyLoadImage
            className={"w-full h-full object-cover  rounded-2xl"}
            alt={pop.title}
            src={`${process.env.REACT_APP_API_IMG}/${pop.backdrop_path}`}
          />
        </Link>
      ))}
    </Slider>
  );
};

export default HeadSlide;
