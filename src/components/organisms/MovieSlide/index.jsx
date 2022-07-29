import React from "react";
import Slider from "react-slick";
import Card from "../card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import styled from "styled-components";

const SliderContainer = styled(Slider)``;
const MovieSlide = ({ data, title }) => {
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
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3500,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // width <= 500 ? 1 : width <= 900 ? 3 : width >= 900 && 6
  return (
    <>
      <div className={"flex justify-between items-center mt-14"}>
        <div className=' border-l-4 flex items-center gap-1 border-l-bgSameColor pl-3'>
          <h3 className={"text-lg md:text-xl text-white font-medium "}>
            {title}
          </h3>
          <HiOutlineChevronRight color='#faf8f9' className='mt-1 text-xl' />
        </div>
        <Link
          className={"text-md text-gray-200 opacity-40"}
          to={"/movie/popular"}
        >
          See All
        </Link>
      </div>
      <SliderContainer {...settings}>
        {data?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.original_title}
            img={item.poster_path}
            rate={item.vote_average}
          />
        ))}
      </SliderContainer>
    </>
  );
};
export default MovieSlide;
