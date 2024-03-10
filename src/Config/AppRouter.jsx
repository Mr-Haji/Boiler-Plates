import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import LogIn from "../Screens/Authantication/LogIn";
import SignUp from "../Screens/Authantication/SignUp";
import DashBoard from "../Screens/DonorIndex/DashBoard";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route element={<Home />} path="/regForm" />
      <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  );
};

export default AppRouter;
