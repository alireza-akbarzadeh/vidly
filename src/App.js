import React from "react";
import { useTheme } from "context/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import RouteProvider from "Routes";
import { Loading } from "components/organisms";
import GlobalStyle from "globalStyle";

const App = () => {
  const { mode } = useTheme();
  return (
    <div className={`${mode()}`}>
      <Router>
        <RouteProvider />
        <Loading />
        <GlobalStyle />
      </Router>
    </div>
  );
};

export default App;
