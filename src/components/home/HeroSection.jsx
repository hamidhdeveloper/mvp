import React from "react";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid heroSecction vh-100 d-flex align-items-top">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slide1}
                className="d-block w-100 mySliderImg img-fluid"
                alt="Slide 1"
              />
              <div class="carousel-caption  d-none d-md-block mycarousel1">
                <h6>ARTIFICIAL INTELLIGENCE</h6>
                <h1>Endless</h1>
                <h1>Possibilities</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={slide2}
                className="d-block w-100 mySliderImg img-fluid"
                alt="Slide 2"
              />
              <div class="carousel-caption d-none d-md-block mycarousel">
                <h6>INTO THE REALITY</h6>
                <h1>Make</h1>
                <h1>your Art</h1>
                <h1>Works</h1>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
