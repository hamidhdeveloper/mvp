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
      <div className="slider-body">
      <div className="carasol-slider">
        <div className="slide-track">
            <div className="slide-all">
              <img src={image1} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image2} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image3} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image4} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image5} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image6} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image3} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image4} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image5} alt="this is slider one" />
            </div>
            {/* double the slider */}
            <div className="slide-all">
              <img src={image1} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image2} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image3} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image4} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image5} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image6} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image3} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image4} alt="this is slider one" />
            </div>
            <div className="slide-all">
              <img src={image5} alt="this is slider one" />
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
