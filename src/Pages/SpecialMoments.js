import React from "react";
import "../Assets/CSS/style.css"; // Your custom styles

const imageData = [
  { src: `../assets/images/Rectangle 1107.png`, label: "Preschool Yearbook" },
  { src: `../assets/images/Rectangle 1108.png`, label: "Newborn" },
  { src: `../assets/images/Rectangle 1109.png`, label: "Furry Friends" },
  { src: `../assets/images/Rectangle 1110.png`, label: "Family" },
];

// Duplicate imageData for seamless scroll
const duplicatedImageData = [...imageData, ...imageData];

const SpecialMomentsSection = () => {
  return (
    <section className="special-moments-section py-5">
      <div className="container text-center">
        <h2 className="font-weight-bold mb-5">Your Special Moments</h2>
        <div className="marquee-container">
          <div className="marquee">
            {duplicatedImageData.map((image, index) => (
              <div className="marquee-item" key={index}>
                <img
                  className="img-fluid rounded"
                  src={image.src}
                  alt={image.label}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <p>{image.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMomentsSection;
