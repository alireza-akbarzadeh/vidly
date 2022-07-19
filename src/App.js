import { MoviePage } from "components/pages";
import { useTheme } from "context/ThemeContext";
import React from "react";
const App = () => {
  const { mode } = useTheme();
  return (
    <div className={`${mode()}`}>
      <div className=' dark:bg-gray-900 min-h-screen'>
        <MoviePage />
      </div>
    </div>
  );
};

export default App;
