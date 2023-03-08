import React from "react";
import "./CanvasPrinting.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";

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
            style={{ backgroundImage: `url(${selectedimage})` }}
          >
            <h1>
              {t("Canvas")}
              <br />
              {t("Printing")}
            </h1>
            <p>{t("Turn your ideas real.")}</p>
          </div>
          <div className="col-md-6 canvasprinting-right">
            <h1>
              USD 12.31+{" "}
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textDecoration: "line-through",
                  color: "color: #625f5f;",
                }}
              >
                USD 14.48+
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  marginLeft: "5px",
                  color: "color: #625f5f;",
                }}
              >
                
                (15% Off)
              </span>
            </h1>
            <p style={{ fontSize: "12px", color: "color: #625f5f;" }}>
              Local taxes included (where applicable)
            </p>
            <p style={{ fontSize: "15px", marginBottom: "16px" }}>
              Basic Simple Wood Frame for Poster Photography. In 4 colors:
              Natural, Black, Walnut, White. A3 A4 11x14 18x24 24x36 15x21 30x40
              30x30 50x70
            </p>
            <p>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  marginRight: "5px",
                }}
              >
                
                MVP
              </span>
              <Link className="followbtn"
                style={{
                  border: '1px solid',
                  borderRadius: '50px',
                  padding: '1px 8px',
                  fontSize: "13px",
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#463D3D",
                }}
              >
                <i class="fa-solid fa-heart"></i> Follow{" "}
              </Link>
            </p>
            <p style={{ fontSize: "12px", color: "color: #625f5f;" }}>
              14,178 sales | <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
            <p>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                {t("Quantity")}
              </span>
              : 1
            </p>
            <p>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  marginBottom: "28px",
                }}
              >
                Frame
              </span>
              : Wood
            </p>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                marginBottom: "2px",
              }}
            >
              Shipping and return policies
            </p>
            <p
              style={{ fontSize: "15px", fontWeight: "300", marginLeft: "7px",marginBottom: "2px", }}
            >
              {" "}
              <i class="fa-sharp fa-solid fa-calendar-days"></i> Order today to
              get by Mar 20-May 9
            </p>
            <p
              style={{ fontSize: "15px", fontWeight: "300", marginLeft: "7px",marginBottom: "2px", }}
            >
              {" "}
              <i class="fa-solid fa-truck-fast"></i> Cost to ship: USD 22.28
            </p>
            <p
              style={{ fontSize: "15px", fontWeight: "300", marginLeft: "7px",marginBottom: "2px", }}
            >
              {" "}
              <i class="fa-regular fa-credit-card"></i> Returns &
              exchanges accepted within 14 days of delivery
            </p>

            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                marginBottom: "2px",
                marginTop: "5px",
              }}
            >
             Description
            </p>
            <p
              style={{ fontSize: "15px", fontWeight: "300", marginLeft: "7px",marginBottom: "2px", }}
            >
              High quality wood frames.
            </p>
            <p
              style={{ fontSize: "15px", fontWeight: "300", marginLeft: "7px",marginBottom: "2px", }}
            >
              Frames are delivered fully assembled  and are ready to mount on the wall. 
            </p>
            <p
              style={{ fontSize: "15px", fontWeight: "300", marginLeft: "7px",marginBottom: "2px", }}
            >
              When you buy a frame and a poster, the poster is placed in the frame and then all wrapped in foil and secured.
            </p>
          

            <div
              className="Paynow-container"
              style={{ marginTop: "58px" }}
            >
              <Link to="/goodjob">
                {t("Pay Now")}
                <i style={{ marginLeft: "8px" }} className="fa-sharp fa-regular fa-credit-card" ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanvasPrinting;
