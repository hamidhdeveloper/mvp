import React from "react";
import "./Retry.scss";
import retryArrow from "../../../images/retry-arrow.png";
import retryMain from "../../../images/carimg.png";
import retry1 from "../../../images/ret1img.png";
import retry2 from "../../../images/ret2img.png";
import retry3 from "../../../images/ret3img.png";
import retry4 from "../../../images/ret4img.png";
import { Link } from "react-router-dom";

const Retry = () => {
  return (
    <>
      <div className="container-fulid retry-main-container">
        <div className="row retry-container">
          <div className="col-md-7 retry-left">
            <h1>Retry?</h1>
            <p>
              Don’t worry.
              <br /> Change your words and make again.
            </p>
            <div className="retry-input-container">
              <input
                className="retryinput"
                type="text"
                placeholder="flying car in space..."
                name="search"
              />
              <Link to='/canvasprinting'>
              <button className="retrycreate">Create Image</button>
              </Link>
            </div>
          </div>
          <div className="col-md-5 retry-right">
            <div className="reimgcontainer">
              <div className="rety-right-top">
                <img src={retryMain} alt="retry" />
              </div>
              <div className="rety-right-buttom">
                <img src={retry1} alt="retry" />
                <img src={retry2} alt="retry" />
                <img src={retry3} alt="retry" />
                <img src={retry4} alt="retry" />
              </div>
            </div>
            <div className="reimg-button-container">
              
              <Link to="/order">Better with frame
              <img src={retryArrow} alt="retry arrow" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Retry;
