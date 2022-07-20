import { useRoutes, Navigate } from "react-router-dom";
import { MovieTemplate } from "components/templates";
import { CustomerPage, MovieFormPage, MoviePage } from "components/pages";

const RouteProvider = ({ children }) => {
  return useRoutes([
    {
      path: "/",
      element: <MovieTemplate />,
      children: [
        { path: "/movies", element: <MoviePage /> },
        { path: "/movies/:slug", element: <MovieFormPage /> },
        { path: "/customer", element: <CustomerPage /> },
        { path: "/", element: <Navigate replace to='/movies' /> },
        { path: "*", element: <p>Not Found</p> },
      ],
    },
  ]);
};

export default RouteProvider;
