import React from "react";
import ReactDOM from "react-dom/client";  // <-- Usa createRoot en lugar de render
import App from "./App";
import "./styles/App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
