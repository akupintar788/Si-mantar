import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./login/login";
import InputBarang from "./Data Peminjaman/InputBarang";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <InputBarang />
    </Router>
  </React.StrictMode>
);
