import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg">
              <Link className="navbar-brand" to="/">
                Wellness Industries
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
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
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink
                      exact
                      className="nav-link"
                      to="/"
                      activeClassName="menu_active"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/about"
                      activeClassName="menu_active"
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/presentation"
                      activeClassName="menu_active"
                    >
                      Presentation
                    </NavLink>
                  </li>


                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/video"
                      activeClassName="menu_active"
                    >
                      Video
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/slideshow"
                      activeClassName="menu_active"
                    >
                      Slide Show
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/team"
                      activeClassName="menu_active"
                    >
                      Team
                    </NavLink>
                  </li>

                  {/* <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/services"
                      activeClassName="menu_active"
                    >
                      Services
                    </NavLink>
                  </li> */}

                  {/* <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/contact"
                      activeClassName="menu_active"
                    >
                      Contact
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
