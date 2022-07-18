import React, { createContext, useContext, useEffect, useState } from "react";

const Theme = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  //@toggle Theme

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("mode", theme === "light" ? "dark" : "light");
  };
  function mode() {
    if (localStorage.getItem("mode") === null) return "light";
    return localStorage.getItem("mode");
  }

  return (
    <Theme.Provider value={{ theme, setTheme, toggleTheme, mode }}>
      {children}
    </Theme.Provider>
  );
};

export const useTheme = () => useContext(Theme);
export default ThemeProvider;
