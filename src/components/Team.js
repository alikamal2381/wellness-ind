import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import '../App.css';

class Team extends Component {
  render() {
    return (
      <div>
                <div className="my-5">
          <h1 className="text-center"> Team Member </h1>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
{/* 
      <td>https://www.facebook.com/mianmuhammadirfan661</td>
      <td>https://www.linkedin.com/in/muhammad-irfan-b02a20212</td>
      <td>https://youtube.com/user/Irfan9661</td>
      <td>https://instagram.com/mirfan_attari</td>
      <td>+92 (300) 791-9661</td>
 */}


        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Full Name</th>
      <th colSpan="5">Social Media</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Muhammad Irfan</td>
      <td><SocialIcon url="https://www.facebook.com/mianmuhammadirfan661" /></td>
      <td><SocialIcon url="https://www.linkedin.com/in/muhammad-irfan-b02a20212" /></td>
      <td><SocialIcon url="https://youtube.com/user/Irfan9661" /></td>
      <td><SocialIcon url="https://instagram.com/mirfan_attari" /></td>
      <td> <i class="fa fa-whatsapp whatsapp-icon"></i> +92 (300) 791-9661</td>
    </tr>
    <tr>
    <td>2</td>
      <td>Ali Kamal</td>
      <td><SocialIcon url="https://www.facebook.com/alikamal2381/" /></td>
      <td><SocialIcon url="https://www.linkedin.com/in/ali-kamal-8436537/" /></td>
      <td> - </td>
      <td> - </td>
      <td><a
            href="https://wa.me/923002465967"
            target="_blank"
            rel="noopener noreferrer"
          >
           <i class="fa fa-whatsapp whatsapp-icon"></i> +92 (300) 246-5967
          </a>
        </td>
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

export default Team;
