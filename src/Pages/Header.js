import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/CSS/style.css"; // Updated path for CSS

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3 flex-wrap">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img
                src={`../assets/images/logo.png`}
                alt="Cheeribook Logo"
                className="img-fluid"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Photobook
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Retouching
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <button
                  className="close"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </ul>
            </div>
          </nav>

          {/* Login Button */}
          <div className="login-button">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
