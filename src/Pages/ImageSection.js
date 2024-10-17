import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/CSS/style.css";

const ImageSection = () => {
  return (
    <section className="image-section">
      <div className="container">
        <div className="row">
          {/* Left Column - 1 Large Image and 3 Smaller Images */}
          <div className="col-lg-6">
            <div className="row">
              {/* Large Image on top */}
              <div className="col-12 mb-4">
                <img
                  src={`../assets/images/Rectangle 1126.png`}
                  alt="Image 1"
                  className="img-fluid rounded"
                />
              </div>

              {/* 3 Images in a single row, 2 on the left and 1 on the right */}
              <div className="col-6 d-flex flex-column mb-4">
                <img
                  src={`../assets/images/Rectangle 1129.png`}
                  alt="Image 2"
                  className="img-fluid rounded mb-4"
                />
                <img
                  src={`../assets/images/Rectangle 1130.png`}
                  alt="Image 3"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-6">
                <img
                  src={`../assets/images/Rectangle 1128.png`}
                  alt="Image 4"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          {/* Right Column - 2 Images */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12 mb-4">
                <img
                  src={`../assets/images/Rectangle 1131.png`}
                  alt="Image 5"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-12">
                <img
                  src={`../assets/images/Rectangle 1127.png`}
                  alt="Image 6"
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

export default ImageSection;
