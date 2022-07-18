import { useTheme } from "context/ThemeContext";
import React from "react";
const App = () => {
  const { mode } = useTheme();
  return (
    <div className={`${mode()}`}>
      <div className=' dark:bg-gray-900 min-h-screen'></div>
    </div>
  );
};

export default App;
