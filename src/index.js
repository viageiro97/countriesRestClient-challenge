import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
