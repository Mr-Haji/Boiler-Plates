import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import LogIn from "../Screens/Authantication/LogIn";
import SignUp from "../Screens/Authantication/SignUp";
import Products from "../Screens/Products/Products";
import ProductDetailedPage from "../Screens/Products/ProductDetailedPage";
import About from "../Screens/About/About";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/Home" />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetailedPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
