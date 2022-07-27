import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "context/ThemeContext";
import reportWebVitals from "./reportWebVitals";
import MovieProvider from "context/MovieContext";
import queryClient from "store/queryClient";

import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// @Render
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
