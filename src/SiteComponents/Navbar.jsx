import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../images/Mindcys_logo.png"

const Navbar = () => {
    return (
      <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      src={logo}
                      width="175"
                      height="55"
                      alt="Mindcys Logo"
                    />
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link "
                          aria-current="page"
                          to="/home"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/about"
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/products"
                        >
                          Products
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/services"
                        >
                          Services
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Insights
                        </NavLink>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <NavLink className="dropdown-item" to="#">
                             White Papers
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="#">
                              Blog
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="#">
                              Analytics
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/contact"
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;