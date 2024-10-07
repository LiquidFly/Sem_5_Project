import React from "react";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
