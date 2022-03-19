import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/index";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Header />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
