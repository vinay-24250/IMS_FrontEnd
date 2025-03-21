/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NewProduct from "./components/NewProduct";
import Remove from "./components/Remove";
import Products from "./components/Products";
import Search from "./components/Search";
const App = () => {
  
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewProduct" element={<NewProduct />} />
        <Route path="/Remove/:" element={<Remove />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
