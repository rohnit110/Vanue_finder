import React from "react";
import { BrowserRouter ,Switch,Route,Link} from "react-router-dom";

import Routing from "./Routing";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Listsingle from "./Listsingle";
import Login from "./Login";
import Signup from "./Signup";
import Changepassword from "./Changepassword";
import Forgotpassword from "./Forgotpassword";
import Productlist from "./Productlist";
import Productsearch from "./Productsearch";

import Bookingform from "./Bookingform";
import Bookingview from "./Bookingview";
import Thankyou from "./Thankyou";

import Ratingview from "./Ratingview";

function App() {
  return (
    <div className="App">
   <>
                <BrowserRouter>
                <Switch>
                      <Route exact="/" path="/" component={Home}/>
                      <Route exact="/Home" path="/Home" component={Home}/>
                      <Route exact="/About" path="/About" component={About}/>
                      <Route exact="/Contact" path="/Contact" component={Contact}/>

                      <Route exact="/Signup" path="/Signup" component={Signup}/>
                      <Route  exact="/Login" path="/Login" component={Login}/>
                      
                      <Route exact="/Forgotpassword"  path="/Forgotpassword" component={Forgotpassword}/>
                      <Route   exact="/Changepassword" path="/Changepassword" component={Changepassword}/>

                      <Route  exact="/Productlist"  path="/Productlist" component={Productlist}/>
                      <Route  exact="/Listsingle/:id"  path="/Listsingle/:id" component={Listsingle}/>        
                      <Route exact="/Productsearch/:id/:id1"  path="/Productsearch/:id/:id1" component={Productsearch}/>                      
              
                      <Route path="/Bookingform" component={Bookingform}/>
                      <Route  exact="/Bookingview"  path="/Bookingview" component={Bookingview}/>
                      <Route  exact="/Ratingview"  path="/Ratingview" component={Ratingview}/>
                      <Route  exact="/Thankyou"  path="/Thankyou" component={Thankyou}/>
                     
                      
                </Switch>
                 </BrowserRouter>
                </>
    </div>
  );
}

export default App;
