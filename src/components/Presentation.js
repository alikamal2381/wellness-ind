import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Presentation extends Component {
  render() {
    return (
      <div>
                <div className="my-5">
          <h1 className="text-center"> Presentation </h1>
        </div>


        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">

{/*               <NavLink to="">View</NavLink>
              <a href="#">View</a> */}

        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Description</th>
      <th>Type</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>GoPro Book</td>
      <td>PDF</td>
      <td>PDF</td>
      <td><a href="#">View</a></td>
    </tr>
    <tr>
    <td>2</td>
      <td>GoPro Book</td>
      <td>PDF</td>
      <td>PDF</td>
      <td><a href="#">View</a></td>
    </tr>
    <tr>
    <td>3</td>
      <td>Cordyceps Capsules</td>
      <td>Official Presentation of Cordyceps</td>
      <td>Powerpoint</td>
      <td><a href="#">View</a></td>
    </tr>
  </tbody>
</Table>

</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Presentation;
