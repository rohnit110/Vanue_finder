
import { BrowserRouter,Link,Switch,Route} from "react-router-dom";
import axios from "axios";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
export default class Ratingview extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rate_list:[]};
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    componentDidMount() {
        var a = JSON.parse(localStorage.getItem("user_id"));
        console.log("UID " + a)
        let myformdata = new FormData();
        myformdata.append("user_id", a);
      
       console.log(myformdata);
       

        axios.post(`https://akashsir.in/myapi/venue_finder/api/api-rating-view.php`, myformdata)
            .then(function (res) {
                console.log(res.data.rate_list);
                var rate_list = res.data.rate_list;
                this.setState({rate_list});
                
            });
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
                     <h1 className="page-title">Review List</h1>
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
                <h3 align="center">Review list</h3>
                <form >
                <table className="table" border='1'>
        
  
    <tr>
      <th>Rating Name</th>
      <th>Rating Email</th>
      
      <th>Rating Date</th>
      <th>Rating Number</th>
      
      
      <th>Rating Message</th>
      
    </tr>
  
  <tbody>
    {JSON.stringify(this.state.rate_list)}
      {
          this.state.rate_list.map(rate_list=>
    <tr>
        <td> {rate_list.rating_name}</td>
    
      <td>{rate_list.rating_email}</td>
      
      <td>{rate_list.rating_date}</td>
      <td>{rate_list.rating_number}</td>
      <td>{rate_list.rating_message}</td>
      
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




