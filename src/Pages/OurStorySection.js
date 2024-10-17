import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/CSS/style.css"; // Link to your CSS file if needed

const OurStorySection = () => {
  return (
    <section className="our-story-section py-5">
      <div className="container">
        <div className="row align-items-start">
          {" "}
          {/* Ensure top alignment */}
          {/* Left Side: Image */}
          <div className="col-md-6">
            <img
              src={`../assets/images/Rectangle 1087.png`}
              alt="Our Story"
              className="img-fluid"
            />
          </div>
          {/* Right Side: Text Content */}
          <div className="col-md-6 text-md-left our-story">
            <h2 className="font-weight-bold mb-4 mt-0">Our Story</h2>
            <p className="lead">
              Welcome to Cheeribook, where we specialize in capturing life's
              little moments and turning them into something truly special. Our
              goal is to create a personalized photo book that will make your
              heart sing and bring joy to whoever flips through its pages.
            </p>
            <p className="lead">
              We believe that it's the small things that matter most, which is
              why we take great care to include all of the special details that
              make your memories unique.
            </p>
            {/* Left Aligned Button */}
            <div className="text-left mt-3">
              <a href="#" className="btn btn-primary btn-lg">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hrline">
        <span>
          <span>&diams;</span> Unveiling Tresured Memories: Your Photobook Journey, Crafted With
          Love. <span>&diams;</span>
        </span>
      </div>
    </section>
  );
};

export default OurStorySection;
