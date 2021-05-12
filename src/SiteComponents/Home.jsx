import React from 'react'
import web from "../images/business_deal_1.svg"
import Common from "./Common"


const Home = () => {
    return (
      <>
        <Common
          name="Grow Your Business with "
          tline="Create Better Experience For The Better World By Sustainable innovation."
          imgsrc={web}
          visit="/services"
          btname="Get Started"
        />
      </>
    );
};

export default Home;
