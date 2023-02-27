import React from "react";
import image1 from "../../../images/coraimage1.png";
import image2 from "../../../images/coraimage2.png";
import image3 from "../../../images/coraimage3.png";
import image4 from "../../../images/coraimage4.png";
import image5 from "../../../images/coraimage2.png";
import image6 from "../../../images/coraimage3.png";
import "./ImageCarousel.scss";

const ImageCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card  ">
                <img src={image1} className="card-img-top" alt="..." />
              </div>
              <div className="card  ">
                <img src={image1} className="card-img-top" alt="..." />
              </div>
              <div className="card  ">
                <img src={image1} className="card-img-top" alt="..." />
              </div>
              <div className="card  ">
                <img src={image1} className="card-img-top" alt="..." />
              </div>
              <div className="card">
                <img src={image2} className="card-img-top" alt="..." />
              </div>
              <div className="card">
                <img src={image3} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex   justify-content-around">
              <div className="card  mycard">
                <img src={image4} className="card-img-top" alt="..." />
              </div>
              <div className="card  mycard">
                <img src={image1} className="card-img-top" alt="..." />
              </div>
              <div className="card  mycard">
                <img src={image1} className="card-img-top" alt="..." />
              </div>
              <div className="card  mycard">
                <img src={image1} className="card-img-top" alt="..." />
              </div>
              <div className="card mycard">
                <img src={image5} className="card-img-top" alt="..." />
              </div>
              <div className="card mycard">
                <img src={image6} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
