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
import Footer from "./components/Footer";
import About from "./Pages/About";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsofService";
import ContactUs from "./Pages/ContactUs";
import UpdateProduct from "./components/updateProduct";
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
        <Route path="/update/:productId" element={<UpdateProduct />} />
        <Route path="/About" element={<About />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/TermsOfService" element={<TermsOfService />}></Route>
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
