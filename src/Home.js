import React from 'react';
import { BrowserRouter,Link,Switch,Route} from "react-router-dom";

import axios from "axios";
import Header from './Header';
import Footer from './Footer';



export default class Home extends React.Component 
{


    constructor(props) 
    {
        super(props);
        this.state = {area_list : [],type_list:[],areaid:0,typeid:0};
        this.updateStateno1 = this.updateStateno1.bind(this);
        this.updateStateno2 = this.updateStateno2.bind(this);
    }
    updateStateno1(e) {
        console.log(this.state.areaid);
        this.setState({areaid: e.target.value});
     }
     updateStateno2(e) {
        console.log(this.state.typeid);
        this.setState({typeid: e.target.value});
     }

    handleSubmit = (event) => {

        //alert("Form Data is " + this.state.areaid + this.state.typeid );
        window.location = `/ProductSearch/${this.state.areaid}/${this.state.typeid}`;
        event.preventDefault(); //Function Will Print Data as it is
    }
    componentDidMount()
    {
        axios.post("https://akashsir.in/myapi/venue_finder/api/api-type-list.php")
        .then(res => {
            const type_list = res.data.type_list;
            this.setState({type_list});
            console.log(type_list);
        })
        axios.post("http://akashsir.in/myapi/venue_finder/api/api-area-list.php")
        .then(res => {
            const area_list = res.data.area_list;
            this.setState({area_list});
            console.log(area_list);
        })
    }
    render()
    {
        return(
            <div>
                   
   <Header/>
    
    <div className="hero-section-second">
        <div className="container">
            <div className="row">
                <div className="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="hero-section-caption">
                        <div className="text-center search-head">
                            <h1 className="search-head-title text-white">Find Local Wedding Venue</h1>
                            <p className="d-none d-xl-block d-lg-block d-sm-block text-white">Choose from 500+ local wedding venues, services and providers.</p>
                        </div>
                        <div className="search-form">
                            <form className="form-row" onSubmit={this.handleSubmit}>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <select className="wide" onChange = {this.updateStateno1}  style={{color: "red",display: "block"}}>
                                        <option value="">Venue Type</option>
                                    { this.state.type_list.map ((type_listdata =>
                                    <>
                                        <option value={type_listdata.type_id}  key={type_listdata.type_name}>{type_listdata.type_name}</option>
                                    </>
                                    ))}
                                    </select>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <select className="wide" onChange = {this.updateStateno2} style={{color: "red",display: "block"}}> 
                                    <option value="">Area</option>
                                    { this.state.area_list.map ((area_listdata =>
                                    <>
                                        <option value={area_listdata.area_id} key={area_listdata.area_name}>{area_listdata.area_name}</option>
                                    </>
                                    ))}
                                    </select>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <button className="btn btn-default btn-block" type="submit">Find Venue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="space-medium">
        <div className="container">
            <div className="row">
                <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="section-title text-center">
                        
                        <h2 className="mb10">Vendors by Category</h2>
                        <p>Small content paragraph for heading title subtitle text. </p>
                    </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="venue-categories-block">
                        <div className="venue-categories-img zoomimg"> <a href="#"><img src="images/vendor-cat-img-1.jpg" alt="" className="img-fluid" /></a>
                            <div className="venue-categories-overlay">
                                <h3 className="mb0"><a href="#" className="venue-categories-title">Stately Homes (10)</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="venue-categories-block">
                        <div className="venue-categories-img zoomimg"> <a href="#"><img src="images/vendor-cat-img-2.jpg" alt="" className="img-fluid" /></a> 
                            <div className="venue-categories-overlay">
                                <h3 className="mb0"><a href="#" className="venue-categories-title">Photographer (14)</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="venue-categories-block">
                        <div className="venue-categories-img zoomimg"> <a href="#"><img src="images/vendor-cat-img-3.jpg" alt="" className="img-fluid" /></a>
                            <div className="venue-categories-overlay">
                                <h3 className="mb0"><a href="#" className="venue-categories-title">Florist (16)</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="venue-categories-block ">
                        <div className="venue-categories-img zoomimg"> <a href="#"><img src="images/vendor-cat-img-4.jpg" alt="" className="img-fluid" /></a>
                            <div className="venue-categories-overlay">
                                <h3 className="mb0"><a href="#" className="venue-categories-title">Hair & Makeup (18)</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="venue-categories-block">
                        <div className="venue-categories-img zoomimg"> <a href="#"><img src="images/vendor-cat-img-5.jpg" alt="" className="img-fluid" /></a>
                            <div className="venue-categories-overlay">
                                <h3 className="mb0"><a href="#" className="venue-categories-title">Wedding DJ(12)</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="venue-categories-block">
                        <div className="venue-categories-img zoomimg"> <a href="#"><img src="images/vendor-cat-img-6.jpg" alt="" className="img-fluid" /></a>
                            <div className="venue-categories-overlay">
                                <h3 className="mb0"><a href="#" className="venue-categories-title">Videographer (11)</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/*  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt60"><a href="#" className="btn btn-default btn-lg">View All category</a></div> */}
            </div>
        </div>
    </div>
     
    
    
    
     
   <Footer/> 
                    
                
            </div>
           
        )
    }
}