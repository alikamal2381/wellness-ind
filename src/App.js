import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Hello world!</h1>
        <h2>Wellness Ind.</h2> */}
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
