import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../images/logo.png";
import { useLocation } from 'react-router-dom';
import { useTranslation  } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const headerStyle = {
    color: location.pathname === '/startcreating' ? 'white' : location.pathname === '/order' ? 'white' : '',
    
  };
  const logoStyle = {
    filter: location.pathname === '/startcreating' ? 'invert(100%)' : location.pathname === '/retry' ? 'invert(100%)' : location.pathname === '/order' ? 'invert(100%)' : ''
  }
  return (
    <>
      <nav className="mycustomNavBar navbar navbar-expand bg-body-tertiary fixed-top">
        <div className="container-fluid myheader">
          <div className="container">
          <a className="navbar-brand" href="/mvp">
            <img src={logo} alt="logo" style={logoStyle}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="myNavbar collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/mvp" style={headerStyle}>
                  AR
                </a>
              </li>
              {location.pathname !== '/mvp' && location.pathname !== '/mvp/' &&  (
              <li className="nav-item d-none d-md-block">
                <a className="nav-link active" aria-current="page" href="/mvp" style={headerStyle}>
                {t('How its works')}
                </a>
              </li>
              )}
              <button
                className="menubutton"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                style={headerStyle}
              >
                {t('MENU')}
              </button>
              
            </ul>
          </div>
          </div>
        </div>
      </nav>

      <div>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title mycanvastitle" id="offcanvasRightLabel">
              <Link to='/mvp'>MVP</Link>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body mycanvas">
            <ul className="list-group">
             <Link to="/startcreating">
              <li className={`list-group-item ${location.pathname === '/startcreating' ? 'myactive' : ''}`} aria-current="true">
              {t('Start Creating')}
              </li>
              </Link>
              <Link to="/retry"><li className={`list-group-item ${location.pathname === '/retry' ? 'myactive' : ''}`}>{t('Retry')}</li></Link>
              <Link to="/goodjob"><li className={`list-group-item ${location.pathname === '/goodjob' ? 'myactive' : ''}`}>Good Job</li></Link>
              <Link to="/canvasprinting"><li className={`list-group-item ${location.pathname === '/canvasprinting' ? 'myactive' : ''}`}>Canvas Printing</li></Link>
              <Link to="/order"><li className={`list-group-item ${location.pathname === '/order' ? 'myactive' : ''}`}>Order Detail</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
