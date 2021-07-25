import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
//import Services from "./Services";
//import Contact from "./Contact";
import Presentation from "./Presentation";
import Video from "./Video";
import Slideshow from "./Slideshow";
import Team from "./Team";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/about" component={About} />

      <Route path="/presentation" component={Presentation} />
      <Route path="/video" component={Video} />
      <Route path="/slideshow" component={Slideshow} />
      <Route path="/team" component={Team} />

{/*       <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Main;
