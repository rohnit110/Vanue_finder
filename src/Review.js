import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user_id:"",venue_id:"",rating_name:"",rating_email:"",rating_date:"",rating_number:"",rating_message:""  };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signSubmit = (event) => {
    event.preventDefault();
    

    let myformdata = new FormData();
    myformdata.append("user_id", this.state.user_id);
    myformdata.append("venue_id", this.state.venue_id);
    myformdata.append("rating_name", this.state.rating_name);
    myformdata.append("rating_email", this.state.rating_email);
    myformdata.append("rating_date", this.state.rating_date);
    myformdata.append("rating_number", this.state.rating_number);
    myformdata.append("rating_message", this.state.rating_message);

    axios.post("https://akashsir.in/myapi/venue_finder/api/api-rating-add.php",myformdata)
      .then(function (response) {
        console.log(response);

        localStorage.setItem("user_name", response.data.user_name);
        localStorage.setItem("Gender", response.data.gender);
        localStorage.setItem("Email", response.data.email);
        localStorage.setItem("Contact", response.data.contact);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("venue_id", response.data.venue_id);

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
                                Enter Name : &nbsp;
                              </label>
                              <input
                                type="text"
                                name="rating_name"
                                placeholder="Name"
                                className="form-control"
                                
                                onChange={this.handleChange.bind(this)}
                              />{" "}
                             
                            </div>
                          </div>
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
                                
                                onChange={this.handleChange.bind(this)}
                              />{" "}
                             
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group service-form-group">
                            
                              <label className="control-label sr-only">
                                Enter Date : &nbsp;
                              </label>
                              <input
                                type="date"
                                name="rating_date"
                                placeholder="Date"
                                className="form-control"
                                
                                onChange={this.handleChange.bind(this)}
                              />
                             
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group service-form-group">
                            
                              <label className="control-label sr-only">
                                Enter Number : &nbsp;
                              </label>
                              <input
                                type="tel"
                                name="rating_number"
                                placeholder="Number"
                                className="form-control"
                                
                                onChange={this.handleChange.bind(this)}
                              />{" "}
                             
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group service-form-group">
                              <label className="control-label sr-only">
                                Enter Message : &nbsp;
                              </label>
                              <input
                                type="text"
                                name="rating_message"
                                placeholder="Message"
                                className="form-control"
                                
                                onChange={this.handleChange}
                              />
                             
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <center>
                              <button type="submit" className="btn btn-default">
                                give Review
                              </button>
                            </center>
                          </div>
                        </div>

                        
                        
                           
                        
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
