import React from "react";
import "./loginform.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>LOGIN</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> remember me
          </label>
          <a href="#"> forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            {" "}
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
