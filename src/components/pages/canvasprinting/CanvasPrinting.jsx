import React from "react";
import "./CanvasPrinting.scss";
import leftarrow from "../../../images/leftarrow.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const CanvasPrinting = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentdir = localStorage.getItem("dir");
  if (location.pathname === "/canvasprinting") {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }
  // to show the data from store
  const data = useSelector((state) => {
    return state.StartCreatingPageImage;
  });
  
  const selectedimage = data;
  //  console.log(+selectedimage)

  return (
    <>
      <div
        className="container-fulid canvasprintingcontainer"
        id="canvasprintingcontainer"
        style={currentdir === "rtl" ? { direction: "ltr" } : {}}
      >
        <div className="row canvasprinting">
          <div
            className="col-md-6 canvasprinting-left"
            style={
              { backgroundImage: `url(${selectedimage})` }
            }
          >
            <h1>
              {t("Canvas")}
              <br />
              {t("Printing")}
            </h1>
            <p>{t("Turn your ideas real.")}</p>
          </div>
          <div className="col-md-6 canvasprinting-right">
            <h1>{t("Canvas with wooden frame")}</h1>
            <p>
              {t("Printing")}: {t("Inkjet")}
            </p>
            <p>
              {t("Size")}: {t("Various")}
            </p>
            <p>
              {t("Sides")}: {t("1 sided only")}
            </p>
            <p>
              {t("Colors")}:{t("Full (CMYK)")}
            </p>
            <p>
              {t("Material")}: {t("Cotton Canvas")}
            </p>
            <p>{t("Minimum Order")}: 1</p>
            <p>
              {t("Finishing")}: {t("Wood frame")}
            </p>
            <div className="sizebox">
              <div className="size-top">
                <span style={{ fontWeight: "500" }}>{t("Size")}</span>{" "}
              </div>
              <div className="size-buttom">
                <select style={{ with: "62%" }}>
                  <option>A4</option> <option>A3</option>
                  <option>Legal</option>
                </select>{" "}
              </div>
            </div>
            <div
              className="reimg-button-container"
              style={{ marginTop: "100px" }}
            >
              <Link to="/order">
                {t("Pay Now")}
                <img src={leftarrow} alt="retry arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanvasPrinting;
