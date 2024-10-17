import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/CSS/style.css"; // Link to your CSS file if needed

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I am so thrilled with the photobook I created with Cheeribook! It truly captures all the special moments from my life, and I know I will treasure it forever.",
      author: "Sarah",
    },
    {
      text: "Cheeribook helped me preserve the memories from my wedding day in the most beautiful way. The quality of the book is exceptional, and I love how customizable it was.",
      author: "Matt",
    },
    {
      text: "I was hesitant to create a photobook, but Cheeribook made the process so easy and fun! The end result exceeded my expectations, and I can't wait to order more.",
      author: "John",
    },
    {
      text: "I am thrilled to share my experience with XYZ Website, which has truly become an indispensable online resource for me. Whether you're seeking information, entertainment, or assistance, this website has got you covered.",
      author: "Victoria",
    },
    {
      text: "One of the standout aspects of XYZ Website is its vast and diverse content library. Whether you're interested in news, lifestyle, or any other subject, you can trust that this website will have something for you.",
      author: "Kyle",
    },
    {
      text: "Cheeribook helped me preserve the memories from my wedding day in the most beautiful way. The quality of the book is exceptional, and I love how customizable it was.",
      author: "Matt",
    },
  ];

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <div className="row">
          {/* Left Side: Title, Subtitle and Button */}
          <div className="col-md-4 text-left mb-4 mb-md-0">
            <h2 className="font-weight-bold mb-4">Our Client’s Stories</h2>
            <p className="subtitle mb-4">Without A Doubt, You'll Adore It.</p>
            <a href="#" className="btn btn-dark mt-3">Read All Stories</a>
          </div>

          {/* Right Side: Testimonials */}
          <div className="col-md-8">
            <div className="row testimonial-list">
              {testimonials.map((testimonial, index) => (
                <div className="col-md-6 mb-4 testimonial" key={index}>
                  <div className="testimonial-box p-4 shadow-sm rounded">
                    <p className="testimonial-text mb-4">{testimonial.text}</p>
                    <p className="testimonial-author font-weight-bold mb-0">
                      - {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
