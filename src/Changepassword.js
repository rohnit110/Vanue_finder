import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
class Changepassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user_id: "", op: "", np: "", cp: "", errors: {}, formSubmitted: false };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    componentDidMount() {
        var p = JSON.parse(localStorage.getItem("user_id"));
        //  console.log(p)
        this.setState({ user_id: p });
        console.log(p);
    }
    signSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            this.setState({ formSubmitted: true });
            console.log('Form submitted');
        }

        let myformdata = new FormData();

        myformdata.append("user_id", this.state.user_id);
        myformdata.append("opass", this.state.op);
        myformdata.append("npass", this.state.np);
        myformdata.append("cpass", this.state.cp);
        // console.log(p)

        axios.post("http://akashsir.in/myapi/venue_finder/api/api-change-password.php", myformdata)
            .then(function (response) {
                console.log(response);

                if (response.data.flag == "1") {
                    // var msg = response.data.message;
                    alert("Your Passward Change SucessFully");
                } else {
                    alert("wrong");
                }
            });
    };
    validateForm = () => {
        let errors = {};
        let formIsValid = true;
        // password & confirm password
        if (!this.state.op) {
            formIsValid = false;
            errors["op"] = "Please enter your old password";
        }
        if (!this.state.np) {
            formIsValid = false;
            errors["np"] = "Please enter your new password";
        }


        if (!this.state.cp) {
            formIsValid = false;
            errors["cp"] = "Please your confirm password";
        }

        if (typeof this.state.np !== "undefined" && typeof this.state.cp !== "undefined") {
            if (this.state.cp !== this.state.cp) {
                formIsValid = false;
                errors["cp"] = "Passwords do not match";
            }
        }
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

                                        
                                        <div className='Changepassword'>
                                            <div className='cp'>
                                                <center><h2>Change Password</h2></center>
                                                {this.state.formSubmitted ?
                                                <div>

                                                    <p>Old Passward: {this.state.op}</p>
                                                    <p>New Password: {this.state.np}</p>
                                                    <p>confirm Password: {this.state.cp}</p>

                                                </div> :
                                                <form onSubmit={this.signSubmit}>

                                                    <div className="row">

                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                            <div className="form-group service-form-group">
                                                                <label className="control-label sr-only" >Enter Old Password : &nbsp;</label>
                                                                <input type="password" name="op" placeholder="Old Password" className="form-control" value={this.state.op} onChange={this.handleChange.bind(this)} />
                                                                <span style={{ color: "red" }}>{this.state.errors.op}</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                            <div className="form-group service-form-group">
                                                                <label className="control-label sr-only" >Enter New Password : &nbsp;</label>
                                                                <input type="password" name="np" placeholder=" New Password" className="form-control" value={this.state.np} onChange={this.handleChange.bind(this)} />
                                                                <span style={{ color: "red" }}>{this.state.errors.np}</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                            <div className="form-group service-form-group">
                                                                <label className="control-label sr-only" >Enter Confirm Password : &nbsp;</label>
                                                                <input type="password" name="cp" placeholder="Confirm Password" className="form-control" value={this.state.cp} onChange={this.handleChange.bind(this)} />
                                                                <span style={{ color: "red" }}>{this.state.errors.cp}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                            <center><button type="submit" className="btn btn-default">Change Password</button></center>
                                                        </div>
                                                    </div>
                                                </form>
        }

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

export default Changepassword;