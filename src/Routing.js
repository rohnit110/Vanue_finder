import React from "react";
import { BrowserRouter ,Link,Switch,Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Listsingle from "./Listsingle";
import Login from "./Login";
import Signup from "./Signup";
import Changepassword from "./Changepassword";
import Forgotpassword from "./Forgotpassword";
import Productlist from "./Productlist";
import Bookingform from "./Bookingform";
import Bookingview from "./Bookingview";
import Header from "./Header";
import Footer from "./Footer";
import Ratingview from "./Ratingview";



class Routing extends React.Component{

        render(){
            return(
                <>
                <BrowserRouter>
                <div align="center">
                <Home/>

            

                <Switch>
               <Header/>
                <Route path="/Login" component={Login}/>
                <Route path="/Productlist" component={Productlist}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Forgotpassword" component={Forgotpassword}/>
                <Route path="/Changepassword" component={Changepassword}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Bookingform" component={Bookingform}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/About" component={About}/>
                <Route path="/Listsingle" component={Listsingle}/>
                <Route path="/Bookingview" component={Bookingview}/>
                <Route path="/Ratingview" component={Ratingview}/>
               
                 <Footer/>   
                 
                </Switch>
                </div>
                </BrowserRouter>
                </>
            );
        }

}

export default Routing;