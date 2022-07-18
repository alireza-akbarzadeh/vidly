import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "context/ThemeContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider } from "react-query";
import queryClient from "store/queryClient";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

// @Render
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
