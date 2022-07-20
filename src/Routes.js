import { useRoutes, Navigate } from "react-router-dom";
import { MovieTemplate } from "components/templates";
import {
  CustomerPage,
  LoginPage,
  MovieFormPage,
  MoviePage,
  Register,
} from "components/pages";

const RouteProvider = ({ children }) => {
  return useRoutes([
    {
      path: "/",
      element: <MovieTemplate />,
      children: [
        { path: "/movies", element: <MoviePage /> },
        { path: "/movies/new", element: <MovieFormPage /> },
        { path: "/movies/:slug", element: <MovieFormPage /> },
        { path: "/customer", element: <CustomerPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <Register /> },
        { path: "/", element: <Navigate replace to='/movies' /> },
        { path: "*", element: <p>Not Found</p> },
      ],
    },
  ]);
};

export default RouteProvider;
