import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Futer from "./components/futer/futer";
import { Routes, Route } from "react-router-dom";
import Carts from "./pages/produkts/produkts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./features/todoSlise";
import Meny from "./pages/meny/meny";
import Titul from './pages/titul/titul';
import Pars from './pages/pars/pars';
import Vallet from "./pages/vallet/vallet";

function App() {
  


 
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Vallet />} />
        <Route path="/products" element={<Carts />} />
        <Route path="/pars" element={<div className='pars'> <Pars /> </div>}/>
        <Route path="/vallet" element={ <Vallet />}/>
      </Routes>
      

    </div>
  );
}

export default App;
