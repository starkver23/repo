import React from "react";
import "./loginform.css"; // Using the same CSS as LoginForm
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SignUp = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>SIGN UP</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="email" required />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
          <FaLock className="icon" />
        </div>
        <button type="submit">Sign Up</button>
        <div className="register-link">
          <p>
            {" "}
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
