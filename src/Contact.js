import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";

const Contact = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handle = () => {
    localStorage.setItem("FName", fname);
    localStorage.setItem("LName", lname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Message", message);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="page-caption">
                <h1 className="page-title">Contact us</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="page-breadcrumb">
          <div className="container">
            <div className="row">
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 mb60">
              <div className="text-center">
                <p className="lead">
                  We would like to talk with you, Talk to us and we'll show you
                  what we’ve done, and what we can do for you.
                </p>
              </div>
            </div>
            <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12">
              <form>
                <div className="contact">
                  <div className="mg">
                    <div className="contact-form">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                          <div className="form-group service-form-group">
                            <label
                              className="control-label sr-only"
                              for="fname"
                            ></label>
                            <input
                              id="fname"
                              type="text"
                              name="fname"
                              placeholder="First Name"
                              className="form-control"
                              value={fname}
                              onChange={(e) => setFName(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  ">
                          <div className="form-group service-form-group">
                            <label
                              className="control-label sr-only"
                              for="lname"
                            ></label>
                            <input
                              id="lname"
                              type="text"
                              name="lname"
                              placeholder="Last Name"
                              className="form-control"
                              value={lname}
                              onChange={(e) => setLName(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                          <div className="form-group service-form-group">
                            <label
                              className="control-label sr-only"
                              for="email"
                            ></label>
                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                          <div className="form-group service-form-group">
                            <label
                              className="control-label sr-only"
                              for="phone"
                            ></label>
                            <input
                              id="phone"
                              type="text"
                              name="phone"
                              placeholder="Phone"
                              className="form-control"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                          <div className="form-group">
                            <label
                              className="control-label sr-only"
                              for="message"
                            ></label>
                            <textarea
                              className="form-control"
                              id="message"
                              name="message"
                              rows="3"
                              placeholder="Messages"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                          <center>
                            <button
                              type="submit"
                              name="singlebutton"
                              className="btn btn-default"
                              onClick={handle}
                            >
                              submit
                            </button>
                          </center>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Contact;
