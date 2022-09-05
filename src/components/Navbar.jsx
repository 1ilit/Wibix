import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    setState(!state);
  };

  const logout = (e) => {
    localStorage.clear();
    var url = window.location.href;
    if (url.slice(url.length - 7, url.length) === "profile") {
      navigate("/signup");
    }
    else{e.reload();}
  };

  return (
    <div id="le-navbar">
      <nav
        className={
          !state
            ? "navbar navbar-expand-lg d-flex justify-content-between"
            : "navbar navbar-expand-lg d-flex justify-content-between bg-white"
        }
      >
        <Link className="navbar-brand logo mt-2 ms-5" to="/">
          <i className="fa-brands fa-hubspot h2"></i>
          <span className="h2 mx-2 fw-bold">wibix</span>
        </Link>
        <div className={props.color==="white"?"d-md-none text-white":"d-md-none"}>
          <i
            className={
              state ? "fa fa-times h2 me-5 mt-2 text-dark" : "fa fa-bars h2 me-5 mt-2"
            }
            onClick={handleMenu}
          ></i>
          <ul
            className={
              state
                ? "active text-center p-0 navbar-nav"
                : "non-active text-center d-none p-0 navbar-nav"
            }
          >
            <li className="nav-item fw-bold mx-2" onClick={handleMenu}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item fw-bold mx-2" onClick={handleMenu}>
              <Link to="/resources" className="nav-link">
                Resources
              </Link>
            </li>
            <li className="nav-item fw-bold mx-2" onClick={handleMenu}>
              <Link to="/forum" className="nav-link">
                Forum
              </Link>
            </li>
            <li className="nav-item fw-bold mx-2" onClick={handleMenu}>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            {!props.data && (
              <li className="nav-item fw-bold mx-2" onClick={handleMenu}>
                <Link
                  to="/signup"
                  className="btn-burnt-umber m-2 px-3 nav-link"
                >
                  Join wibix
                </Link>
              </li>
            )}
            {props.data && (
              <li className="nav-item fw-bold mx-2" onClick={handleMenu}>
                <Link
                  to="#"
                  onClick={logout}
                  className="btn-burnt-umber m-2 px-3 nav-link"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>

        <ul className="navbar-nav d-none d-md-flex justify-content-between mt-2">
          <div className="d-flex justify-content-between">
            <li className="nav-item fw-bold mx-2">
              <Link to="/" className={props.color==="white"?"nav-link text-white": "nav-link"}>
                Home
              </Link>
            </li>
            <li className="nav-item fw-bold mx-2">
              <Link to="/resources" className={props.color==="white"?"nav-link text-white": "nav-link"}>
                Resources
              </Link>
            </li>
            <li className="nav-item fw-bold mx-2">
              <Link to="/forum" className={props.color==="white"?"nav-link text-white": "nav-link"}>
                Forum
              </Link>
            </li>
            <li className="nav-item fw-bold mx-2">
              <Link to="/about" className={props.color==="white"?"nav-link text-white": "nav-link"}>
                About
              </Link>
            </li>
          </div>
        </ul>
        {!props.data && (
          <Link
            to="/signup"
            className="btn-burnt-umber px-4 py-2 d-none d-md-flex me-5 mt-2"
            id="signup"
          >
            Join wibix
          </Link>
        )}
        {props.data && (
          <div className="d-flex d-none d-md-flex me-5">
            <button
              type="button"
              onClick={logout}
              className="btn-burnt-umber px-4 py-2 mt-2 me-3"
              id="logout"
            >
              Logout
            </button>
            <Link
              to="/profile"
              className="btn-burnt-umber px-3 pt-2 mt-2"
              id="profile-icon"
            >
              <i className="fa-solid fa-user"></i>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
