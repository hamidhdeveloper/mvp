import React from "react";
import "./Retry.scss";
import retryArrow from "../../../images/retry-arrow.png";
import retryMain from "../../../images/carimg.png";
import retry1 from "../../../images/ret1img.png";
import retry2 from "../../../images/ret2img.png";
import retry3 from "../../../images/ret3img.png";
import retry4 from "../../../images/ret4img.png";
import { Link,useLocation } from "react-router-dom";
import { useTranslation  } from "react-i18next";

const Retry = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentdir = localStorage.getItem("dir");
  

  if(location.pathname === '/retry') {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight= '0px';
  }
  return (
    <>
      <div className="container-fulid retry-main-container" id="retry-main-container" style={
            currentdir === "rtl"
              ? { direction: "ltr" }
              : {}
          }>
        <div className="row retry-container">
          <div className="col-md-7 retry-left">
            <h1>{t('Retry?')}</h1>
            <p>
            {t('Don’t worry')}
              <br /> {t('Change your words and make again.')}
            </p>
            <div className="retry-input-container">
              <input
                className="retryinput"
                type="text"
                placeholder={t('flying car in space...')}
                name="search"
              />
              <Link to='/canvasprinting'>
              <button className="retrycreate">{t('Create Image')}</button>
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
              
              <Link to="/canvasprinting">{t('Better with frame')}
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
