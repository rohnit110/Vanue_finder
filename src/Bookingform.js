import React from "react";
import axios from "axios";

class Bookingform extends React.Component{
    state = {venue_id : '',user_id : '',booking_name : '',booking_email: '',booking_date: '',booking_contact: '',booking_time: ''}

        handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value});
        }
        handleSubmit = (event) => {
            event.preventDefault();

            let formData = new FormData();
            formData.append('user_id', this.state.user_id)
            formData.append('venue_id', this.state.venue_id)
            formData.append('booking_name', this.state.booking_name)
            formData.append('booking_email', this.state.booking_email)
            formData.append('booking_date', this.state.booking_date)
            formData.append('booking_contact', this.state.booking_contact)
            formData.append('booking_time', this.state.booking_time)
          

            axios.post('http://akashsir.in/myapi/venue_finder/api/api-add-booking.php',formData)
            .then(function (response) {
                    console.log(response)
                    if(response.data.flag === 1)
                    {
                        var msg = response.data.message;
                        console.log('Record Added'+msg)
                    }
            }).catch(function (response) {
                console.log(response)
            });
        };

    render(){
        return(
            <>
            <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h3 className="mb20">Booking Form</h3>
                                        </div>
                                     
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label sr-only" htmlFor="user_id">User ID</label>
                                                <input id="user_id" name="user_id" type="text" placeholder="User ID" className="form-control input-md" onChange={this.handleChange} required=""/>
                                            </div>
                                        </div>
                                
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className=" control-label sr-only" htmlFor="venue_id">Venue ID</label>
                                                <input id="venue_id" name="venue_id" type="text" placeholder="Venue ID" className="form-control input-md" onChange={this.handleChange} required=""/>
                                            </div>
                                        </div>
                                    
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className=" control-label sr-only" htmlFor="booking_name">Booking Name</label>
                                                <input id="booking_name" name="booking_name" type="text" placeholder="Booking Name" className="form-control input-md" onChange={this.handleChange} required=""/>
                                            </div>
                                        </div>
                                    
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label sr-only" htmlFor="booking_email">Booking Email</label>
                                                <input id="booking_email" name="booking_email" type="text" placeholder="Booking Email" className="form-control input-md" onChange={this.handleChange} required=""/>
                                                <div className="venue-form-calendar"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                                <label className="control-label sr-only" htmlFor="booking_contact">Contact</label>
                                                <input id="booking_contact" name="booking_contact" type="text" placeholder="Booking Contact" className="form-control input-md" onChange={this.handleChange} required=""/>
                                                <div className="venue-form-calendar"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                                <label className="control-label sr-only" htmlFor="booking_date">Booking Date</label>
                                                <input id="booking_date" name="booking_date" type="text" placeholder="Booking Date" className="form-control input-md" onChange={this.handleChange} required=""/>
                                                <div className="venue-form-calendar"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                                <label className="control-label sr-only" htmlFor="booking_date">Booking Time</label>
                                                <input id="booking_time" name="booking_time" type="text" placeholder="Booking Time" className="form-control input-md" onChange={this.handleChange} required=""/>
                                                <div className="venue-form-calendar"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-default btn-block">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
            
            </>
        );
    }
}

export default Bookingform;