import React from "react";
import { useFetchPopularMovies, useFetchPopularVertical } from "store/Hook";
import Slider from "react-slick";
import Card from "../card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useResponsive } from "hook";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PopularMovie = () => {
  const { width } = useResponsive();
  const {
    data: popular,
    isLoading,
    isError,
    error,
  } = useFetchPopularVertical();
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
    speed: 3000,
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
  if (isLoading) return <h1>Loading ..</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      <div className={"flex justify-between items-center mt-4"}>
        <h3 className={"text-lg text-white font-medium rounded-xl"}>
          Popular Movie
        </h3>
        <a
          className={"text-md text-gray-200 opacity-40"}
          href={"/movie/popular"}
        >
          See All
        </a>
      </div>
      <Slider {...settings}>
        {popular?.results.map((item) => (
          <Card
            key={item.id}
            title={item.original_title}
            img={item.poster_path}
            rate={item.vote_average}
          />
        ))}
      </Slider>
    </>
  );
};
export default PopularMovie;
