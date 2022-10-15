import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Futer from "./components/futer/futer";
import { Routes, Route } from "react-router-dom";
import Carts from "./pages/produkts/produkts";

import Meny from "./pages/meny/meny";
import Titul from './pages/titul/titul';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Titul />} />
        <Route path="/products" element={<div className="products"><Meny /> <Carts /></div>} />
      </Routes>
      <Futer />
    </div>
  );
}

export default App;
