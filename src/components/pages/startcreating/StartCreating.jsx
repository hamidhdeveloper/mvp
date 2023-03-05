import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./StartCreating.scss";
import { Link } from "react-router-dom";

const StartCreating = () => {
  return (
    <>
      <div className="container-fluid myContainer">
        <div className="mycreating">
        <div className="row">
          <div className="col-md-12 mycreatingcol">
            <h1 className="text-center">
              St<span style={{ color: "#FEC30E" }}>art</span>
            </h1>
            <h2 className="text-center">Creating?</h2>
            <p>
              Write whatever you want and we will make it real. This is our
              promise of endless possibilities.
            </p>
            <div className="container createimgcontainer">
              <div className="row">
                <div className="col-md-12 createimgcol">
                  <input
                    className="search"
                    type="text"
                    placeholder="flying car in space..."
                    name="search"
                  />
                  <Link to='/canvasprinting'>
                  <button className="createimg">Create Image</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="container-fulid mycarouselControls">
        <div className="row">
          <div className="col-md-12 myImgCarouselcol">
            <ImageCarousel />
          </div>
        </div>
      </div>


      </div>
      
    </>
  );
};

export default StartCreating;
