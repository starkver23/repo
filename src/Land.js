// src/LandingPage.js
import React from "react";
import "./Land.css";
import Save from "./Save";
import { Link } from "react-router-dom";
const Land = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1>Savings Goal Tracker</h1>
        <div className="navbar-buttons">
          <Link to="/Login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/SignUp">
            <button className="signup-button">Sign Up</button>
          </Link>
        </div>
      </nav>
      <section className="tracker">
        <h2>Track Your Savings</h2>
        <Save />
      </section>
      <footer className="footer">
        <p>© 2024 Savings Goal Tracker. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Land;
