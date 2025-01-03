import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Verification from "./pages/OTPVerfication";
import Layout from "./components/common/layout";
import DemandeDevis from "./pages/DemandeDevis"
import PropositionDevis from "./pages/PropositionDevis"
import JoinUS from "./pages/Joinus"

function App() {
  return (
    <Router>  
      <Routes>  
        
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/DemandeDevis" element={<Layout><DemandeDevis/></Layout>} /> 
        <Route path="/PropositionDevis" element={<Layout><PropositionDevis/></Layout>} />
        <Route path="/JoinUs" element={<Layout><JoinUS/></Layout>} />


      </Routes>
    </Router>
  );
}

export default App;
