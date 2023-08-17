import React from 'react';
import axios from 'axios';
class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name1: "", email: "", date: "", number: "", message: "" };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    signSubmit = (event) => {
        event.preventDefault();


        let myformdata = new FormData();
        myformdata.append("rating_name", this.state.name1);
        myformdata.append("rating_email", this.state.email);
        myformdata.append("rating_date", this.state.date);
        myformdata.append("rating_number", this.state.number);
        myformdata.append("rating_message", this.state.message);

        axios
            .post("http://akashsir.in/myapi/venue_finder/api/api-rating-add.php", myformdata)
            .then(function (response) {
                console.log(response);

                if (response.data.flag == "1") {
                    alert("SucessFull");
                    var a = response.data.user_id
                    var b = response.data.venue_id
                    var c = response.data.user_gender
                    var d = response.data.user_email
                    var e = response.data.user_contact

                    localStorage.setItem("user_id", JSON.stringify(a))
                    localStorage.setItem("venue_id", JSON.stringify(b))
                    localStorage.setItem("user_gender",JSON.stringify(c))
                    localStorage.setItem("user_email",JSON.stringify(d))
                    localStorage.setItem("user_contact",JSON.stringify(e))


                } else {
                    alert("something went wrong");
                }

            })
            .catch(function (response) {
                console.log(response);
            });


        
    };

    render() {
        return (
            <React.Fragment>
                 <div className="couple-bg-image">
                    <div className="couple-form">
                        <div className="container">
                            <div className="row ">
                                <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12  ">

                                    <div className="couple-head">
                                        <img src="images/logo.png" alt="Wedding Vendor & Supplier Directory HTML Template " />
                                    </div>
                                    <div className='feedback'>
                                        <div className='fb'>

                                            <center><h2>Feedback</h2></center>

                                            <form onSubmit={this.signSubmit}>

                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group">
                                                            <label className="control-label sr-only" >Enter Name : &nbsp;</label>
                                                            <input  type="text" name="name1" placeholder="Name" className="form-control"  onChange={this.handleChange.bind(this)}/>
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group service-form-group">
                                                            <label className="control-label sr-only" >Enter Email :&nbsp;</label>
                                                            <input  type="email" name="email" placeholder="Email" className="form-control"  onChange={this.handleChange.bind(this)}/>{" "}
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    
                                                    <div className="form-group">
                                                        <label className="control-label sr-only">Date</label>
                                                        <input id="weddingdate" name="date" type="date" placeholder="Date" className="form-control input-md"  onChange={this.handleChange.bind(this)}/>
                                                        
                                                    </div>
                                                </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group">
                                                            <label className="control-label sr-only" >Enter Number : &nbsp;</label>
                                                            <input  type="tel" name="number" placeholder="Number" className="form-control" onChange={this.handleChange.bind(this)}/>{" "}
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                                                        <div className="form-group">
                                                            <label className="control-label sr-only" >Enter Message : &nbsp;</label>
                                                            <input type="text" name="message" placeholder="Message" className="form-control" onChange={this.handleChange.bind(this)}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                        <center><button type="submit"  className="btn btn-default">Give Feedback</button></center>
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
                

            </React.Fragment>
        );
    }
}

export default Feedback;