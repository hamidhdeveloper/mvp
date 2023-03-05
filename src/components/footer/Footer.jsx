import React from "react";
import "./Footer.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { useLocation } from 'react-router-dom';
import logo from "../../images/logo.png";

const Footer = () => {
  
  const location = useLocation();
  const footerStyle = {
    background: location.pathname === '/retry' ? 'white' : location.pathname === '/canvasprinting' ? 'white' : location.pathname === '/order' ? 'white' : '',
  };
  return (
    <>
      <footer className="footer fixed-bottom" style={footerStyle}>
        <div className="container-fulid">
          <div className="row">
            <div className="col-md-7">
            {location.pathname !== '/mvp' && location.pathname !== '/mvp/' &&  (
              <img src={logo} alt="logo" className="footerlogo"/>
              )}
              <div className="footer-copyright text-lg-end text-md-center text-sm-center">
                <span>2023 © MyBrand. All rights reserved.</span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer-icons text-lg-end text-md-center text-sm-center">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-square-facebook fa-1x"></i>
                </a>
                <a href="https://www.snapchat.com/">
                  <i className="fab fa-square-snapchat fa-1x"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-square-twitter fa-1x"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-square-instagram fa-1x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
