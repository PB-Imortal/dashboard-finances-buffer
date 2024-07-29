import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppProviders from "./providers/AppProviders";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>
);
