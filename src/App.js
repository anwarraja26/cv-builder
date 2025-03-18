import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import BuildResume from "./pages/BuildResume";
import ResumeScore from "./pages/ResumeScore";
import ResumeCarousel from "./components/ResumeCarousel";
import Navbar from "./components/Header/Navbar";
function App() {
  return (  
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/build-resume" element={<BuildResume />} />
          <Route path="/resume-score" element={<ResumeScore />} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/pricing" element={<h1>Pricing</h1>} />
          <Route path="/organizations" element={<h1>For Organizations</h1>} />
          <Route path="/signin" element={<h1>Sign In</h1>} />
          <Route path="/get-started" element={<h1>Get Started</h1>} />

        </Routes>
      </Router>
      <ResumeCarousel />
    </div>
  );
}

export default App;
