import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
class Forgotpassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", errors: {}, formSubmitted: false };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });



    };

    signSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            this.setState({ formSubmitted: true });
            console.log('Form submitted');
        }
    
        let myformdata = new FormData();
        
        myformdata.append("user_email", this.state.email);
    
        axios.post("http://akashsir.in/myapi/venue_finder/api/api-forgot-password.php",myformdata)
        .then(function (response) {
        console.log(response);
    
            if (response.data.flag == "1") {
              // var msg = response.data.message;
              alert("Your Password Is : ");
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
        this.setState({ errors: errors });
        return formIsValid;

    };
    render() {
        return (
          <React.Fragment>
            <Header/>
            <body className="couple-bg-image">
                    <div className="couple-form">
                        <div className="container">
                            <div className="row ">
                                <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12  ">

                                   
                                    <div className='forgetpassword'>
                                        <div className='fp'>
                                            <center><h2>Forget Password</h2></center>
                                           
                                            <form onSubmit={this.signSubmit}>

                                                <div className="row">

                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group service-form-group">
                                                            <label className="control-label sr-only" >Enter Email : &nbsp; </label>
                                                            <input id="email" type="email" name="email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)} />
                                                            <span style={{ color: "red" }}>{this.state.errors.email}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                        <center><button type="submit" name="singlebutton" className="btn btn-default">Forget Password</button></center>
                                                    </div>
                                                </div>
                                            </form>
    
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </body>
<Footer/>
          </React.Fragment>  
        );
    }
}

export default Forgotpassword;