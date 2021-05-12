import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Home from "./SiteComponents/Home";
import About from "./SiteComponents/About";
import Products from "./SiteComponents/Products";
import Services from "./SiteComponents/Services";
import Insights from "./SiteComponents/Insights";
import Navbar from "./SiteComponents/Navbar";
import Contact from "./SiteComponents/Contact";
import Footer from "./SiteComponents/Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/insights" component={Insights} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
