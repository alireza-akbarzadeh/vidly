import React from "react";
import { useFetchPopularMovies } from "store/Hook";
import Slider from "react-slick";
import Card from "../card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useResponsive } from "../../../hook";

const PopularMovie = () => {
  const { width } = useResponsive();
  const popular = useFetchPopularMovies();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: width <= 500 ? 1 : width <= 900 ? 3 : width >= 900 && 6,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={"flex justify-between items-center mt-4"}>
        <h3 className={"text-lg text-white font-medium rounded-xl"}>
          Popular Movie
        </h3>
        <Link
          className={"text-md text-gray-200 opacity-40"}
          to={"/movie/popular"}
        >
          See All
        </Link>
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
