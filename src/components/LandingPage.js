import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import content from "../data/Content";
import "../styles/LandingPage.css";
import image1 from "../assets/landing-page-images/robot.jpg"; 
import image2 from "../assets/landing-page-images/resume1.png";

const LandingPage = () => {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      
      // Reset rotation status after animation completes
      setTimeout(() => {
        setIsRotating(false);
      }, 1000);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="landing-page">
      <div className="title">
        <h1>
          Analyka's <span className="highlight">Resume Builder</span> helps you get hired at top companies
        </h1>
      </div>
      <div className="buttons">
        <Link to="/build-resume" className="btn btn-primary">
          {content.buttons.buildResume}
        </Link>
        <Link to="/resume-score" className="btn btn-secondary">
          {content.buttons.resumeScore}
        </Link>
      </div>
      <div className="companies">
        <p>Loved by interviewers at</p>
        <div className="company-logos">
          {content.companies.map((company, index) => (
            <img key={index} src={company.logo} alt={company.name} className="company-logo" />
          ))}
        </div>
      </div>

      {/* Spherical Rotating Image Container */}
      <div className={`rotating-image-container ${isRotating ? "rotating" : ""}`}>
        <img src={image1} alt="Resume Preview 1" className="rotating-image" />
        <img src={image2} alt="Resume Preview 2" className="rotating-image" />
      </div>
    </section>
  );
};

export default LandingPage;