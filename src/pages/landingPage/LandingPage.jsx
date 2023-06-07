// Landingpage.js

import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import uniLogo from "../../images/uwindsorLogo.png";

export default function Landingpage() {
  return (
    <div>
      <div className="login-page">
        <nav>
          <div className="uwindsorLogo">
            <img src={uniLogo} alt="logo" />
          </div>
          <div className="contact-about-container">
            <Link to="#" className="about-us">
              {/* <span className="about-icon"></span> */}
              About us
            </Link>
            <Link to="#" className="contact-us">
              {/* <span className="contact-icon"></span> */}
              Contact us
            </Link>
            <Link to="https://ask.uwindsor.ca/" className="ask-link">
              <span className="ask-text">ask</span>.Uwindsor
            </Link>
          </div>
        </nav>
        <div className="content-area">
          <div className="left-section">
            <h1>Welcome to CuMA</h1>
            <p>
              Curriculum mapping is a process of documenting and analyzing the
              structure of program, and how individual courses work together to
              support student success through each year of study. It involves
              collecting, recording and analyzing data about curriculum
              structure, including course and program learning outcomes,
              teaching methods and assessments, and levels of expectation.{" "}
            </p>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          </div>
          <div className="right-section">
            <img
              src="https://cms.education.macleans.ca/wp-content/uploads/2022/10/windsoruni.jpeg"
              alt="App logo"
              className="app-logo"
            />
          </div>
        </div>
        
      </div>
      <footer className="footer">
          <div className="ask-button-container">
            {/* <Link to="https://ask.uwindsor.ca/" className="ask-link">
            <span className="ask-text">ask</span>.Uwindsor
          </Link> */}
          </div>
        </footer>
    </div>
  );
}
