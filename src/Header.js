import React from "react";
import axios from "axios";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Routing from './Routing';
import About from './About';
import Contact from './Contact';

class Header extends React.Component{

     handleLogout = () => {
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_gender");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_contact");
    }


    render(){

        let myBtn = null;

        console.log(localStorage.getItem('user_email'));
        var email = localStorage.getItem('user_email');
        var myname = localStorage.getItem('user_name');

        if (email == null ) {
            myBtn = <Link to="/Login">Login</Link>
        } else {
           
            myBtn = <Link to="#" onClick={this.handleLogout} >Logout</Link>
        }


        if(myname == null) {
            myname = ""
        }else
        
        {
            myname = "Hello," +myname;
        }
        

        return(

            <>
            
            <div className="header">
        
            <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-6 col-md-6 col-sm-6 col-6 d-none d-xl-block d-lg-block d-md-block">
                        <div className="header-text">
                            <p className="wlecome-text">Welcome to Wedding Directory.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-6 col-md-6 col-sm-12 col-12">
                        <div className="header-text text-right">
                            <b><p> {myname}</p></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        
        <div className="container">
            <div className="header-bottom">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="header-logo">
                            <a className="navbar-brand" href="/"> <img src="/images/logo.png" alt="Weddings | Find A Wedding Venue &amp; Supplier WordPress Theme" /></a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-2 col-sm-12 col-12 d-none d-xl-block d-lg-block text-right">
                        <div className="header-btn">
                            <a href="#" className="btn btn-default btn-sm">
                            {myBtn}
                                </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    
        
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <nav className="navbar navbar-expand-lg navbar-classic navbar-second">
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-classic" aria-controls="navbar-classic" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar top-bar mt-0"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-classic">
                            <ul className="navbar-nav mt-2 mt-lg-0 mr-3">
                                <li className="nav-item">
                                    <a className="nav-link" href="/Home" id="menu-1" aria-haspopup="true" aria-expanded="false">
                                    <Link to="/Home">Home</Link>&nbsp;&nbsp;
                                    </a>
                                    
                                </li>
                                 
                                

                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="menu-3" aria-haspopup="true" aria-expanded="false">
                                    <Link to="/About">About</Link>&nbsp;&nbsp;
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="menu-3" aria-haspopup="true" aria-expanded="false">
                                    <Link to="/Productlist">Venue List</Link>&nbsp;&nbsp;
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="menu-4" aria-haspopup="true" aria-expanded="false">
                                    <Link to="/Contact">Contact</Link>&nbsp;&nbsp;
                                    </a>
                                    
                                           
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="menu-4" aria-haspopup="true" aria-expanded="false">
                                    <Link to="/Bookingview">Bookingview</Link>&nbsp;&nbsp;
                                    </a>
                                    
                                           
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="menu-4" aria-haspopup="true" aria-expanded="false">
                                    <Link to="/Ratingview">Ratingview</Link>&nbsp;&nbsp;
                                    </a>
                                    
                                           
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="menu-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Account
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="menu-5">
                                        <li >
                                            <a className="dropdown dropdown" href="#">
                                                <Link to="./Changepassword">Changepassword</Link></a>
                                            
                                        </li>
                                        
                                        
                                    </ul>
                                </li>
                               
                                
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    </div>
            
            </>
        );
    }
}

export default Header;