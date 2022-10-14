import React, { Component } from "react";
import Web from "../images/grow-business.svg";
import Common from "./Common";

class Home extends Component {
  render() {
    return (
      <div>
        <Common
          name="Grow your business with"
          subtitle="Network Marketing"
          desc="We are the team of talented entrepreneurship and making problem solving"
          imgsrc={Web}
          visit="/services"
          btname="Get Started"
        />

        {/* <img src={process.env.PUBLIC_URL + '/grow-business.svg'} /> */}
      </div>
    );
  }
}

export default Home;
