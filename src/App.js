import { MoviePage } from "components/pages";
import { useTheme } from "context/ThemeContext";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteProvider from "Routes";

const App = () => {
  const { mode } = useTheme();
  return (
    <div className={`${mode()}`}>
      <div className='dark:bg-gray-900 min-h-screen'>
        <Router>
          <RouteProvider>
            <MoviePage />
          </RouteProvider>
        </Router>
      </div>
    </div>
  );
};

export default App;
