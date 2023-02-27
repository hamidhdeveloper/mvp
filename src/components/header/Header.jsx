import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../images/logo.png";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const headerStyle = {
    color: location.pathname === '/startcreating' ? 'white' : ''
  };
  const logoStyle = {
    filter: location.pathname === '/startcreating' ? 'invert(100%)' : ''
  }
  return (
    <>
      <nav className="mycustomNavBar navbar navbar-expand bg-body-tertiary fixed-top">
        <div className="container-fluid myheader">
          <div className="container">
          <a className="navbar-brand" href="/">
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
                <a className="nav-link active" aria-current="page" href="/" style={headerStyle}>
                  AR
                </a>
              </li>
              <button
                className="menubutton"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                style={headerStyle}
              >
                Menu
              </button>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
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
              <Link to='/'>MVP</Link>
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
              <li className="list-group-item myactive" aria-current="true">
              Start Creating
              </li>
              </Link>
              <Link to="/aboutus"><li className="list-group-item">About Us</li></Link>
              <a href="/"><li className="list-group-item">Shop</li></a>
              <a href="/"><li className="list-group-item">Login</li></a>
              <a href="/"><li className="list-group-item">Register</li></a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
