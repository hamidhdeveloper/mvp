import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./StartCreating.scss";
import { Link } from "react-router-dom";
import { useTranslation  } from "react-i18next";

const StartCreating = () => {
  const { t } = useTranslation();
  const currentdir = localStorage.getItem("dir");
  

  return (
    <>
      <div className="container-fluid myContainer" >
        <div className="mycreating" id="mycreating" style={
            currentdir === "rtl"
              ? { direction: "ltr" }
              : {}
          }>
        <div className="row">
          <div className="col-md-12 mycreatingcol">
          {currentdir ==='rtl' ? (
            <h1 className="text-center">
              يبدأ
            </h1>
            ) : (
            <h1 className="text-center">
              St<span style={{ color: "#FEC30E" }}>art</span>
            </h1>
             )}
            <h2 className="text-center">{t('Creating?')}</h2>
            <p>
              {t('Write whatever you want and we')}
            </p>
            <div className="container createimgcontainer">
              <div className="row">
                <div className="col-md-12 createimgcol">
                  <input
                    className="search"
                    type="text"
                    placeholder={t('flying car in space...')}
                    name="search"
                  />
                  <Link to='/canvasprinting'>
                  <button className="createimg">{t('Create Image')}</button>
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
