import React, { Component } from "react";
import Web from "../images/grow-business.svg";
import Common from "./Common";

class Home extends Component {
  render() {
    return (
      <div>
        <Common
          name="Grow your business with"
          imgsrc={Web}
          visit="/services"
          btname="Get Started"
        />
      </div>
    );
  }
}

export default Home;
