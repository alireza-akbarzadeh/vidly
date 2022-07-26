import React from "react";
import { MoviePage } from "components/pages";
import { useTheme } from "context/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import RouteProvider from "Routes";
import { Loading } from "./components/organisms";

const App = () => {
  const { mode } = useTheme();
  return (
    <div className={`${mode()}`}>
      <div className=" bg-gradient-to-r from-bgPrimary to-[#1c2536]  min-h-screen">
        <Router>
          <RouteProvider>
            <MoviePage />
            <Loading />
          </RouteProvider>
        </Router>
      </div>
    </div>
  );
};

export default App;
