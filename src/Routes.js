import { useRoutes } from "react-router-dom";
import { MovieTemplate, AuthTemplate } from "components/templates";
import {
  CustomerPage,
  Favorite,
  HomePage,
  LoginPage,
  MovieFormPage,
  MoviePage,
  Popular,
  Register,
  Rentals,
  SingleMoviePage,
  SearchResult,
  Celeb,
  Anime,
  Community,
  Discover,
  Recent,
  Download,
  Setting,
  TopRated,
  Trending,
  TvShow,
  Awards,
} from "components/pages";

const RouteProvider = () => {
  return useRoutes([
    {
      path: "/",
      element: <AuthTemplate />,
      children: [
        { path: "/register", element: <Register /> },
        { path: "/", element: <LoginPage /> },
      ],
    },
    {
      path: "/dashboard",
      element: <MovieTemplate />,
      children: [
        { path: "/dashboard/movies", element: <MoviePage /> },
        { path: "/dashboard/movies/new", element: <MovieFormPage /> },
        { path: "/dashboard/movie/search/:slug", element: <SearchResult /> },
        { path: "/dashboard/movie/:id", element: <SingleMoviePage /> },
        { path: "/dashboard/customer", element: <CustomerPage /> },
        { path: "/dashboard/rentals", element: <Rentals /> },
        { path: "/dashboard/favorite", element: <Favorite /> },
        { path: "/dashboard/celeb", element: <Celeb /> },
        { path: "/dashboard/awards", element: <Awards /> },
        { path: "/dashboard/popular", element: <Popular /> },
        { path: "/dashboard/tv-show", element: <TvShow /> },
        { path: "/dashboard/trending", element: <Trending /> },
        { path: "/dashboard/top-rated", element: <TopRated /> },
        { path: "/dashboard/setting", element: <Setting /> },
        { path: "/dashboard/download", element: <Download /> },
        { path: "/dashboard/recent", element: <Recent /> },
        { path: "/dashboard/discover", element: <Discover /> },
        { path: "/dashboard/community", element: <Community /> },
        { path: "/dashboard/anime", element: <Anime /> },
        { path: "/dashboard/", element: <HomePage /> },
        { path: "*", element: <p>Not Found</p> },
      ],
    },
  ]);
};

export default RouteProvider;
