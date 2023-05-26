//Landingpage.js
import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";

export default function Landingpage() {
  return (
    <div className="login-page">
      <nav>
        <div className="logo">
          <img
            src={
              "https://www.uwindsor.ca/cleancombustion/sites/uwindsor.ca.cleancombustion/files/uwin_logo.jpg"
            }
            alt="logo"
          />
        </div>
        <div className="ask-button-container">
          <Link to="https://ask.uwindsor.ca/" className="ask-button">
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
            collecting, recording and analyzing data about curriculum structure,
            including course and program learning outcomes, teaching methods and
            assessments, and levels of expectation.
          </p>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
        <div className="right-section">
          <img
            src="https://cms.education.macleans.ca/wp-content/uploads/2022/10/windsoruni.jpeg"
            alt="App logo"
          />
        </div>
      </div>
      <footer className="footer">
        <div className="soicon">
          <ul className="icon-list">
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <p>Contact us</p>
          <p>About us</p>
        </div>
      </footer>
    </div>
  );
}
