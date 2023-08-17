import { BrowserRouter,Link,Switch,Route} from "react-router-dom";
import axios from "axios";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
export default class Bookingview extends React.Component {

    constructor(props) {
        super(props);
        this.state = { booking_list:[] };
    }
    componentDidMount(){
        var uid = localStorage.getItem("user_id");
        axios.get(`http://akashsir.in/myapi/venue_finder/api/api-view-booking.php?user_id=${uid}`)
        .then(res=>{

        const booking_list=res.data.booking_list;
        this.setState({booking_list});

        })
    }
render() {
        return (
            <>
              <Header/>
 
 <div className="page-header">
     <div className="container">
         <div className="row">
            
             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                 <div className="page-caption">
                     <h1 className="page-title">Booking List</h1>
                 </div>
             </div>
          
         </div>
     </div>

     <div className="page-breadcrumb">
         <div className="container">
             <div className="row">
                 <nav aria-label="breadcrumb">
                     <ol className="breadcrumb">
                         <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                         <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Listing</a></li>
                      </ol>
                 </nav>
             </div>
         </div>
     </div>
  
 </div>

 <div className="content">
        <div className="container">
            
            <div className="row">

            <div>
                <br/>
                <h3 align="center">Booking list</h3>
                <form>
                <table className="table" border='1'>
        
  
    <tr>
   
      <th>Booking Name</th>
      <th>Booking Email</th>
      <th>Booking Contact</th>
      <th>Booking Date</th>
      <th>Booking Time</th>
      
      
    </tr>
  
  <tbody>
      {
          this.state.booking_list?.map(booking=>
    <tr>
      
        <td> {booking.booking_name}</td>
        <td> {booking.booking_email}</td>
        <td>{booking.booking_contact}</td>
        <td>{booking.booking_date}</td>
        <td>{booking.booking_time}</td>
      
      
      
    </tr>)
    }
</tbody>
</table>

                </form>

                </div>
              </div>
              </div>  
                
            </div>
        
    <Footer/>
            
            
            
            </>
            
        );
    }
}




