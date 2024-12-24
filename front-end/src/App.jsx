import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Verification from "./pages/OTPVerfication";
import Layout from "./components/common/layout"

function App() {
  return (
    <Router>  
      <Routes>  
        
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App;
