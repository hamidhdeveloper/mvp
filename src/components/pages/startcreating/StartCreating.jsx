import React from "react";
// import ImageCarousel from "./ImageCarousel";
import "./StartCreating.scss";

const StartCreating = () => {
  return (
    <>
      <div class="container-fluid mycreating">
        <div class="row">
          <div class="col-md-12 mycreatingcol">
            <h1 className="text-center text-sm-1">
              St<span style={{ color: "#FEC30E" }}>art</span>
            </h1>
            <h2 className="text-center text-sm-1">Creating?</h2>
            <p>
              Write whatever you want and we will make it real. This is our
              promise of endless possibilities.
            </p>
            <div className="container createimgcontainer">
              <div className="row">
                <div className="col-md-12">
                  <input
                    className="search"
                    type="text"
                    placeholder="flying car in space..."
                    name="search"
                  />
                  <button className="createimg">Create Image</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fulid mycarouselControls">
        <div class="row">
          <div class="col-md-12">
            {/* <ImageCarousel /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default StartCreating;
