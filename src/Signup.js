import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
class Signup extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {user_name : "", gender : "", email: "", password: "", mobile:" ", address:"",errors: {}, formSubmitted: false };
    }
    
  handleChange = (event) => {
    this.setState ( { [event.target.name]: event.target.value });
  };

  signSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
        this.setState({ formSubmitted: true });
        console.log('Form submitted');
      }
    

    let myformdata = new FormData();
    myformdata.append("user_name" , this.state.user_name);
    myformdata.append("user_gender" , this.state.gender);
    myformdata.append("user_email" , this.state.email);
    myformdata.append("user_password" , this.state.password);
    myformdata.append("user_contact" , this.state.mobile);
    myformdata.append("user_address" , this.state.address);

    axios.post("http://akashsir.in/myapi/venue_finder/api/api-signup.php", myformdata)
    .then(function (response) {
      console.log(response)

      if (response.data.flag == "1")
      {
        var msg = response.data.message;
        alert('Record Added successfully')
      }
    }).catch(function(response) {
      console.log(response)
    });
};  
    validateForm = () => {
        let errors = {};
        let formIsValid = true;
        // name
        if (!this.state.user_name) {
          errors.user_name = 'Name is required';
        } else if (this.state.user_name.length > 15) {
          errors.user_name = 'Must be 15 characters or less';
        }
        //gender
      if (!this.state.gender) {
          formIsValid = false;
          errors["gender"] = "Please enter your gender ";
        }
    
        // email
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
        // mobile
        if (!this.state.mobile) {
            formIsValid = false;
            errors["mobile"] = "Please enter your Mobile Number.";
        }

        if (typeof this.state.mobile !== "undefined") {

            var pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
            if (!pattern.test(this.state.mobile)) {
                formIsValid = false;
                errors["mobile"] = "Please Enter Number Only";
            } else if (this.state.mobile.length != 10) {
                formIsValid = false;
                errors["mobile"] = "Please enter valid  Mobile Number.";
            }
        }
        
        
        // password
        if (!this.state.password) {
          formIsValid = false;
          errors["password"] = "Please enter your password";
        }
      // address
      if (!this.state.address) {
        formIsValid = false;
        errors["address"] = "Please enter your address";
      }
    
    
        this.setState({ errors: errors });
        return formIsValid;
    }
    render() {
        return (
            <React.Fragment>
             <Header/>
                <div className="couple-bg-image">
                    <div className="couple-form">
                        <div className="container">
                            <div className="row ">
                                <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12  ">

                                    
                                    <div className='signup'>
                                        <div className='si'>

                                            <center><h2>Signup</h2></center>

                                            <form onSubmit={this.signSubmit}>

                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group">
                                                            <label className="control-label sr-only" >Enter Name : &nbsp;</label>
                                                            <input  type="text" name="user_name" placeholder="Name" className="form-control"  onChange={this.handleChange.bind(this)}/>
                                                            <span style={{ color: "red" }}>{this.state.errors.user_name}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group">
                                                            <label className="control-label sr-only" >Enter Gender : &nbsp;</label>
                                                            <input  type="text" name="gender" placeholder="Gender" className="form-control"  onChange={this.handleChange.bind(this)}/>
                                                            <span style={{ color: "red" }}>{this.state.errors.gender}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group service-form-group">
                                                            <label className="control-label sr-only" >Enter Email :&nbsp;</label>
                                                            <input  type="email" name="email" placeholder="Email" className="form-control"  onChange={this.handleChange.bind(this)}/>{" "}
                                                            <span style={{ color: "red" }}>{this.state.errors.email}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group service-form-group">
                                                            <label className="control-label sr-only" >Enter Password : &nbsp;</label>
                                                            <input  type="password" name="password" placeholder="Password" className="form-control" onChange={this.handleChange.bind(this)}/>{" "}
                                                            <span style={{ color: "red" }}>{this.state.errors.password}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group">
                                                            <label className="control-label sr-only" >Enter Contact : &nbsp;</label>
                                                            <input  type="tel" name="mobile" placeholder="mobile" className="form-control" onChange={this.handleChange.bind(this)}/>{" "}
                                                            <span style={{ color: "red" }}>{this.state.errors.mobile}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group">
                                                            <label className="control-label sr-only" >Enter Address : &nbsp;</label>
                                                            <input type="text" name="address" placeholder="Address" className="form-control" onChange={this.handleChange.bind(this)}/>
                                                            <span style={{ color: "red" }}>{this.state.errors.address}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                        <center><button type="submit"  className="btn btn-default">Sign up</button></center>
                                                    </div>
                                                </div>
                                            </form>

                                            <h3><p className="mt-2"> Have you subscribed? <Link to="/Login" className="wizard-form-small-text"> Login</Link> </p></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
</div>
                
<Footer/>
            </React.Fragment>
        );
    }
}

export default Signup;