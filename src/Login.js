import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errors: {}, formSubmitted: false };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ formSubmitted: true });
      console.log("Form submitted");
    }

    let myformdata = new FormData();
    myformdata.append("user_email", this.state.email);
    myformdata.append("user_password", this.state.password);

    axios.post("http://akashsir.in/myapi/venue_finder/api/api-login.php",myformdata)
      .then(function (response) {
        console.log(response);

        localStorage.setItem("user_name", response.data.user_name);
        localStorage.setItem("user_gender", response.data.user_gender);
        localStorage.setItem("user_email", response.data.user_email);
        localStorage.setItem("user_contact", response.data.user_contact);
        localStorage.setItem("user_id", response.data.user_id);
        

        if (response.data.flag == 1) {
        var msg = response.data.message;
          alert("Record Added" + msg);
        //   this.props.navigate.push("/");

          window.location = "/home";
        } else {
          window.alert("Login Failed");
        }
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;
    //Email
    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = "Please enter your email address";
    }

    if (typeof this.state.email !== "undefined") {
      let pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i);
      if (!pattern.test(this.state.email)) {
        formIsValid = false;
        errors["email"] = "Please enter a valid email address";
      }
    }
    // password
    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "Please enter your password";
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="couple-bg-image">
          <div className="couple-form">
            <div className="container">
              <div className="row ">
                <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12  ">
                  <div className="Login">
                    <div className="lg">
                      <center>
                        <h2>Log In</h2>
                      </center>

                      <form onSubmit={this.signSubmit}>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group service-form-group">
                              <label className="control-label sr-only">
                                Enter Email : &nbsp;
                              </label>
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                              />{" "}
                              <span style={{ color: "red" }}>
                                {this.state.errors.email}
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group service-form-group">
                              <label className="control-label sr-only">
                                Enter Password : &nbsp;
                              </label>
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.handleChange}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors.password}
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <center>
                              <button type="submit" className="btn btn-default">
                                Log In
                              </button>
                            </center>
                          </div>
                        </div>

                        <h3>
                          <p className="mt-2">
                            {" "}
                            Create a New Account.
                            <Link
                              to="/Signup"
                              className="wizard-form-small-text"
                            >
                              {" "}
                              Sign up
                            </Link>
                          </p>
                        </h3>
                        <h3>
                          <Link
                            to="/Changepassword"
                            className="wizard-form-small-text"
                          >
                            {" "}
                            Change password
                          </Link>
                        </h3>
                        <h3>
                          <Link
                            to="/Forgotpassword"
                            className="wizard-form-small-text"
                          >
                            {" "}
                            Forgot password
                          </Link>
                        </h3>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Login;
