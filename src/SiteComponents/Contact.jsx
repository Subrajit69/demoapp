import React from "react";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <label at="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label at="exampleFormControlInput1" className="form-label">
                  Contact No
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Contact Number"
                />
              </div>
              <div className="mb-3">
                <label at="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label at="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn-get-started" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
