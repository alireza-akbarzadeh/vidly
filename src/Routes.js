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
} from "components/pages";

const RouteProvider = ({ children }) => {
  return useRoutes([
    {
      path: "/",
      element: <MovieTemplate />,
      children: [
        { path: "/movies", element: <MoviePage /> },
        { path: "/movies/new", element: <MovieFormPage /> },
        { path: "/movie/:id", element: <SingleMoviePage /> },
        { path: "/customer", element: <CustomerPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <Register /> },
        { path: "/rentals", element: <Rentals /> },
        { path: "/favorite", element: <Favorite /> },
        { path: "/movie/popular", element: <Popular /> },
        { path: "/", element: <HomePage /> },
        { path: "*", element: <p>Not Found</p> },
      ],
    },
  ]);
};

export default RouteProvider;
