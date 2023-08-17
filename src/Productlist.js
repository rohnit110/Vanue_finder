import React from "react";
import axios from "axios";
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
class Productlist extends React.Component{
    constructor(props) 
    {
        super(props);
        this.state = {venu_list : []};
    }

    componentDidMount()
    {
        axios.post("http://akashsir.in/myapi/venue_finder/api/api-list-venue.php")
        .then(res => {
            const venu_list = res.data.venu_list;
            this.setState({venu_list});
        })
    }
    

    render(){
        return(

            <>
                   
 <Header/>
    <div className="page-header">
        <div className="container">
            <div className="row">
               
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="page-caption">
                        <h1 className="page-title">Listing Venue</h1>
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
            <h1>Venue List</h1>
            <div className="row">
            {
                                   this.state.venu_list.map ((venu_listitem =>
                                    <>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="vendor-thumbnail">
                    
                        <div className="vendor-img zoomimg">
                          
                            <a href="#"><Link  to={`Listsingle/${venu_listitem.venue_id}`} > <img src={venu_listitem.venue_image} style={{"height" : "250px", "width" : "350px"}} alt="" className="img-fluid"/></Link></a>
                            
                        </div>
                        
                        <div className="vendor-content">
                          
                            <h2 className="vendor-title"><a href="#" className="title">{venu_listitem.venue_name}</a></h2>
                            <p className="vendor-address">{venu_listitem.venue_details}</p>
                         </div>
                        <div className="vendor-meta">
                            <div className="vendor-meta-item vendor-meta-item-bordered">
                                <span className="vendor-price">
                                {venu_listitem.venue_price}
                                </span>
                                <span className="vendor-text">Start From</span></div>
                            <div className="vendor-meta-item vendor-meta-item-bordered">
                                <span className="vendor-guest">
                                    {venu_listitem.venue_capacity}
                                </span>
                                <span className="vendor-text">Guest</span>
                            </div>
                            <div className="vendor-meta-item vendor-meta-item-bordered">
                                <span className="rating-star">
                                    <i className="fa fa-star rated"></i>
                                    <i className="fa fa-star rated"></i>
                                    <i className="fa fa-star rated"></i>
                                    <i className="fa fa-star rated"></i>
                                    <i className="fa fa-star rate-mute"></i> 
                                    </span>
                                <span className="rating-count vendor-text"> </span></div>
                        </div>
                       
                    </div>
                   
                </div>
                
                </> 
                                    ))}
                   
            </div>
          
        </div>
    </div>
  
    
            
            
            <Footer/>
            </>
        );
    }
}

export default Productlist;