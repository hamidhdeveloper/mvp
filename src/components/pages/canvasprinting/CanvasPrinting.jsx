import React from "react";
import "./CanvasPrinting.scss";
import leftarrow from "../../../images/leftarrow.png";
const CanvasPrinting = () => {
  return (
    <>
      <div className="container-fulid canvasprintingcontainer">
        <div className="row canvasprinting">
          <div className="col-md-6 canvasprinting-left">
            <h1>
              Canvas
              <br />
              Printing
            </h1>
            <p>Turn your ideas real.</p>
          </div>
          <div className="col-md-6 canvasprinting-right">
            <h1>Canvas with wooden frame</h1>
            <p>Size: Various</p>
            <p>Sides: 1 sided only</p>
            <p>Colors:Full (CMYK)</p>
            <p>Material: Cotton Canvas</p>
            <p>Minimum Order: 1</p>
            <p>Finishing: Wood frame</p>
            <div className="sizebox">
              <div className="size-top">
                <span style={{ fontWeight: "500" }}>SIZE</span>{" "}
                <span style={{ fontWeight: "500" }}>SIDE</span>
              </div>
              <div className="size-buttom">
                <select style={{ with: "62%" }}>
                  <option>A4</option> <option>A3</option>
                  <option>Legal</option>
                </select>{" "}
                <input type="radio" />
                One sided
              </div>
            </div>
            <div
              className="reimg-button-container"
              style={{ marginTop: "100px" }}
            >
              <a href="/mvp">We deliver</a>
              <img src={leftarrow} alt="retry arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanvasPrinting;
