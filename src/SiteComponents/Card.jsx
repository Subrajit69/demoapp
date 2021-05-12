import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/Maintenance_1.svg";

const Card = () => {
  return (
    <>
      <div className="col-10 col-sm-4 mx-auto">
        <div className="card">
          <img src={web} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Service</h5>
            <p className="card-text text-center">Coming Very Soon</p>
            <NavLink to="/" className="btn btn-get-started">
              Coming Soon
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
