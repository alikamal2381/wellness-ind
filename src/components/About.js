import React, { Component } from "react";
import Web from "../images/hero-img.png";
import Common from "./Common";

class About extends Component {
  render() {
    return (
      <div>
        <Common
          name="Welcome to About page"
          imgsrc={Web}
          visit="/contact"
          btname="Contact Now"
        />
      </div>
    );
  }
}

export default About;
