import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/CSS/style.css";

const HeroSection = () => {
  return (
    <section className="hero-section text-center py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-12 col-lg-6 text-left">
            <h1 className="display-4 font-weight-bold">
              Your Premier <br /> Photobook <br /> Agency
            </h1>
            <p className="lead mt-3">
              “Sometimes, The Smallest Things Take Up The Most <br /> Room In
              Your Heart.” - Pooh
            </p>
            <a href="#" className="btn btn-primary mt-4 text-left">
              Let’s Begin
            </a>
          </div>

          {/* Right Side Images */}
          <div className="col-12 col-lg-6 position-relative">
            <div className="row mysonari-image-section">
              {/* First Image */}
              <div className="img-1">
                <img
                  src={`../assets/images/Rectangle 1084.png`}
                  alt="Image 1"
                  className="img-fluid rounded"
                />
              </div>
              {/* Second Image */}
              <div className="img-2">
                <img
                  src={`../assets/images/Rectangle 1083.png`}
                  alt="Image 2"
                  className="img-fluid rounded"
                />
              </div>
              {/* Third Image */}
              <div className="img-3">
                <img
                  src={`../assets/images/Rectangle 1085.png`}
                  alt="Image 3"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
