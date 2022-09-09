import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyScreen from "../screens/dashboard";
import LogIn from "../screens/logIn";
// import Dashboard from "../../pages/dashboard";
// import Login from "../../pages/login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MyScreen />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}