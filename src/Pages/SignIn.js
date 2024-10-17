import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Assets/CSS/style.css";

function SignIn() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign in</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <label>Your password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">Log in</button>
        </form>
        <p>
          <Link to="/create-account" className="create-account-btn">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
