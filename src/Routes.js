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
        { path: "/dashboard/movie/popular", element: <Popular /> },
        { path: "/dashboard/", element: <HomePage /> },
        { path: "*", element: <p>Not Found</p> },
      ],
    },
  ]);
};

export default RouteProvider;
