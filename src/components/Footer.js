import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="w-100 bg-light text-center mt-900px">
          <p>
            &copy; 2021 EZ Systems. All Rights Reserved | Terms & Conditions{" "}

            <br />
            <NavLink exact to="/">Home</NavLink> | 
            <NavLink to="/about">About</NavLink> | 
            <NavLink to="/presentation">Presentation</NavLink> | 
            <NavLink to="/video">Video</NavLink> | 
            <NavLink to="/slideshow">Slide Show</NavLink> | 
            <NavLink to="/team">Team</NavLink>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
