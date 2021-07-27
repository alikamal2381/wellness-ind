import React, { Component } from "react";
import ReactPlayer from 'react-player';

class Video extends Component {
  render() {
    return (
      <div>
                <div className="my-5">
          <h1 className="text-center"> Video </h1>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">


                  <h3>About Tiens</h3>
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=QUqpD7k7XVg" width="300px" height="300px"  />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=LKVWPQJAw50" width="300px" height="300px"  />

                  <h3>Network Marketing</h3>
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=6GL4kW_llds" width="300px" height="300px"  />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=nMSMHcGuGR4" width="300px" height="300px" />

                  <h3>Company (TIENS) related video</h3>
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=cjSwzJNYclI" width="300px" height="300px" />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=acoHM-APHJk" width="300px" height="300px" />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=P1Fm3n1bYs8" width="300px" height="300px" />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=qkm6kIj5vRQ" width="300px" height="300px" />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=E19k8S9SFO4" width="300px" height="300px" />
                  
                  <h3>Wellness Revolution</h3>
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=hAMWxJ49f9s" width="300px" height="300px" />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=pKBRmNbCIgg" width="300px" height="300px" />

                  <h3>Product DEMO</h3>
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=R_GFT0A2A30" width="300px" height="300px"  />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=_w2l9zgg-w4" width="300px" height="300px" />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=1PxFoddJAqc" width="300px" height="300px" />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=aSNxipUcwJM" width="300px" height="300px" />
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=jNJ6SSmUyFw" width="300px" height="300px" />

                  <h3>Sample Video</h3>
                  <ReactPlayer controls url="https://www.youtube.com/watch?v=5orpuu4ZN1s" width="300px" height="300px" />


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
