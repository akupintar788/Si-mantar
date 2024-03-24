import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import InputBarang from "./Data Peminjaman/InputBarang";
import Login from "./login/login";
import DataBarang from "./Data Peminjaman/DataBarang";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/InputBarang" component={InputBarang} />
        <Route path="/DataBarang" component={DataBarang} />
      </div>
    </BrowserRouter>
  );
}

export default App;
