import React from 'react';
import "../Assets/CSS/style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={`../assets/images/footer_logo.png`} alt="Cheeribook Logo" className="logo" />
        </div>
        <ul className="footer-menu">
          <li>About</li>
          <li>Photobook</li>
          <li>Image Retouching</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <p className="footer-copyright">Copyright Cheeribook, 2023</p>
        <div className="footer-info">
          <p>Support Email: <a href="mailto:hello@cheeribook.com">hello@cheeribook.com</a></p>
          <ul className="footer-policy">
            <li>Terms And Conditions</li>
            <li className="policy">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

