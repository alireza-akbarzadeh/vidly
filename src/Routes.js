import { useRoutes } from "react-router-dom";
import { MovieTemplate } from "components/templates";
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

const RouteProvider = ({ children }) => {
  return useRoutes([
    {
      path: "/",
      element: <MovieTemplate />,
      children: [
        { path: "/movies", element: <MoviePage /> },
        { path: "/movies/new", element: <MovieFormPage /> },
        { path: "/movie/search/:slug", element: <SearchResult /> },
        { path: "/movie/:id", element: <SingleMoviePage /> },
        { path: "/customer", element: <CustomerPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <Register /> },
        { path: "/rentals", element: <Rentals /> },
        { path: "/favorite", element: <Favorite /> },
        { path: "/celeb", element: <Celeb /> },
        { path: "/movie/popular", element: <Popular /> },
        { path: "/", element: <HomePage /> },
        { path: "*", element: <p>Not Found</p> },
      ],
    },
  ]);
};

export default RouteProvider;
