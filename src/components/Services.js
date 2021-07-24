import React, { Component } from "react";
//import Sdata from "./Sdata";
import Card from "./Card";
import Web from "../images/s1.jpg";

class Services extends Component {
  render() {
    return (
      <div>
        <div className="my-5">
          <h1 className="text-center"> Our Services </h1>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <Card
                  imgsrc={Web}
                  title="Card# 1"
                  description="Card Description...."
                  btncaption="Button 1"
                />

                <Card
                  imgsrc={Web}
                  title="Card# 1"
                  description="Card Description...."
                  btncaption="Button 1"
                />

                <Card
                  imgsrc={Web}
                  title="Card# 1"
                  description="Card Description...."
                  btncaption="Button 1"
                />

                <Card
                  imgsrc={Web}
                  title="Card# 1"
                  description="Card Description...."
                  btncaption="Button 1"
                />

                {/*                 {Sdata.map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      description={val.desc}
                      btncaption=" Go LIVE "
                    />
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
