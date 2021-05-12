import React from "react";
import Common from "./Common";
import web from "../images/about_us_1.svg";

const About = () => {
  return (
    <>
      <Common
        name="About "
        tline="Bring Better Digital Experience With Innovative Product And Consultancy Services."
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
