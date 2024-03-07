import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import LogIn from "../Screens/Authantication/LogIn";
import SignUp from "../Screens/Authantication/SignUp";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/Home" />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
