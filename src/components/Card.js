import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                {/* Card Template start */}
                <div className="card">
                  <img
                    src={props.imgsrc}
                    className="card-img-top"
                    alt={props.imgsrc}
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      {props.title}
                    </h5>
                    <p className="card-text">{props.description}</p>
                    <Link to="/" className="btn btn-primary">
                      {props.btncaption}
                    </Link>
                  </div>
                </div>
                {/* Card Template end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
