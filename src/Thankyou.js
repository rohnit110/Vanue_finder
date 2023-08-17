import React from "react";
import { Link } from "react-router-dom";


class Thankyou extends React.Component{
    render(){
        return(
            <>
            
            <h1 align="center">Thankyou For Booking</h1>
            <h2 align="center">Your Booking Has Been Confirm <img src="images/confirm.png" style={{'width':'50px','height':'50px'}} /></h2>
            <h3 align="center">We'll Contact You Soon</h3>
            <Link to="/Bookingview"><h4 align="center">View Booking</h4></Link>
           
            </>
        );
    }
}
export default Thankyou;