import React, { Component } from "react";
import Web from "../images/hero-img.png";
import Common from "./Common";

class About extends Component {
  render() {
    return (
      <div>
        <Common
          name="About Wellness!"
          subtitle=""
          desc="The global wellness economy is currently valued at $4.5 trillion (2018 data). ... The industry grew by 6.4 percent annually from 2015–2017, from a $3.7 trillion to a $4.2 trillion market, nearly twice as fast as global economic growth (3.6 percent annually, based on IMF data)."
          imgsrc={Web}
          visit="/contact"
          btname="Contact Now"
        />
      </div>
    );
  }
}

export default About;
