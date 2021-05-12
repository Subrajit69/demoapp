import React from "react";
import web from "../images/stepping_up_1.svg";
import Common from "./Common";

const Products = () => {
  return (
    <>
      <div className="col-10 mx-auto">
        <section></section>
      </div>
      <Common
        name="Products By "
        tline="Products Coming Soon Stay Connected"
        imgsrc={web}
        visit="/"
        btname="Coming Soon"
      />
    </>
  );
};

export default Products;
