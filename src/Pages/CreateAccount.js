import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons
import { Link } from 'react-router-dom'; // Import Link for navigation
import "../Assets/CSS/style.css";

function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="account-container">
      <div className="account-box">
        <h2 className="account-title">Create an account</h2>
        <p className="account-subtext">
          Already have an account?{" "}
          <Link to="/login" className="login-link">Log in</Link>
        </p>
        <form>
          <div className="input-group">
            <label className="input-label">What should we call you?</label>
            <input type="text" className="input-field profile-name" placeholder="Enter your profile name" required />
          </div>
          <div className="input-group">
            <label className="input-label">What's your email?</label>
            <input type="email" className="input-field email" placeholder="Enter your email address" required />
          </div>
          <div className="input-group password-group">
            <label className="input-label password-label">
              Create a password
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                <span className="toggle-text">{showPassword ? "Hide" : "Show"}</span>
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="input-field password"
              placeholder="Enter your password"
              required
            />
            <p className="password-hint">Use 8 or more characters with a mix of letters, numbers & symbols</p>
          </div>
          <button type="submit" className="submit-btn create-account-btn">Create an account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
