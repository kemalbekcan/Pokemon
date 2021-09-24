import React, { Fragment, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="d-flex flex-row align-items-center justify-content-between">
                <ul className="navbar-nav w-100 d-flex flex-row align-items-center justify-content-between">
                  <div>
                    <li className="nav-item">
                      <Link to="/">
                        <img
                          className="img-fluid"
                          src="../img/pokeapi_logo.png"
                          alt="logo"
                          width="100"
                          height="100"
                        />
                      </Link>
                    </li>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    <li className="nav-item mx-3">
                      <NavLink
                        exact
                        to="/"
                        className={`nav-link ${
                          splitLocation[1] === "" ? "active" : ""
                        }`}
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item mx-3">
                      <NavLink
                        to="/catch/pokemon"
                        className={`nav-link ${
                          splitLocation[1] === "pokemon" ? "active" : ""
                        }`}
                      >
                        Pokemon
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
