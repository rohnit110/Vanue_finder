import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
class Listsingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { venu_list: [], review_list: [], venue_rate_list: [],booking_list:[] };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  signSubmit = (event) => {
    event.preventDefault();

    let myformdata = new FormData();

    var uid = localStorage.getItem("user_id");
    var vid = this.props.match.params.id;
    myformdata.append("user_id", uid);
    myformdata.append("venue_id", vid);
    myformdata.append("rating_name", this.state.rating_name);
    myformdata.append("rating_email", this.state.rating_email);
    myformdata.append("rating_date", this.state.rating_date);
    myformdata.append("rating_number", this.state.rating_number);
    myformdata.append("rating_message", this.state.rating_message);

   
     

    console.log(myformdata);

    axios
      .post(
        `http://akashsir.in/myapi/venue_finder/api/api-rating-add.php`,
        myformdata
      )
      .then(function (response) {
        console.log(response);

        if (response.data.flag == "1") {
          alert("Record added SucessFully");
        } else {
          alert("wrong" + response.data.message);
        }
      });

  };


  handleSubmit = (event) => {
    event.preventDefault();

    let myformdata = new FormData();

    var uid = localStorage.getItem("user_id");
    var vid = this.props.match.params.id;
    myformdata.append("user_id", uid);
    myformdata.append("venue_id", vid);
    myformdata.append("booking_name", this.state.booking_name);
    myformdata.append("booking_email", this.state.booking_email);
    myformdata.append("booking_contact", this.state.booking_contact);
    myformdata.append("booking_date", this.state.booking_date);
    myformdata.append("booking_time", this.state.booking_time);

   
     

    console.log(myformdata);

    axios
      .post(
        `http://akashsir.in/myapi/venue_finder/api/api-add-booking.php`,
        myformdata
      )
      .then(function (response) {
        console.log(response);

        if (response.data.flag == "1") {
          alert("Record added SucessFully");
        } else {
          alert("wrong" + response.data.message);
        }
      });

  };

  componentDidMount() {
    var id = this.props.match.params.id;
    console.log("ID is " + id);

    axios
      .get(
        `http://akashsir.in/myapi/venue_finder/api/api-list-venue-details.php?venue_id=${id}`
      )
      .then((res) => {
        const venu_list = res.data.venu_list;
        this.setState({ venu_list });
        console.log(venu_list);
      });

    axios
      .get(
        `https://akashsir.in/myapi/venue_finder/api/api-venue-rating-list.php?venue_id=${id}`
      )
      .then((res) => {
        const review_list = res.data.venue_rate_list;
        this.setState({ review_list });
        console.log("aayaa " + review_list);
      });
  }

  render() {
    console.log("State " + this.state.venu_list);
    var mydata = JSON.stringify(this.state.venu_list);
    console.log(mydata);
    console.log("Image " + mydata.venue_image);
    return (
      <>
        <Header />

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
        </div>
        <div className="list-single-carousel">
          <div className="owl-carousel owl-theme owl-slider">
            <div className="item">
              {this.state.venu_list.map((item, i) => (
                <img src={item.venue_image} alt="" />
              ))}
            </div>
          </div>
        </div>

        {this.state.venu_list.map((venu_listitem) => (
          <>
            <div className="list-single-second">
              <div className="container">
                <div className="">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="vendor-head text-left">
                        <h2 className="mb10">{venu_listitem.venue_name} </h2>
                        <p className="vendor-address">
                          {venu_listitem.venue_address}
                          <a
                            href="#location"
                            className="btn-secondary-link ml-2"
                          >
                            View Map
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="vendor-head text-xl-right">
                              <a href="#" className="btn-default-wishlist"><i className="fa fa-heart"></i> <span className="pl-1">Add To Wishlist</span></a> 
                        </div>
                    </div>
                  */}
                  </div>
                </div>
                <div className="vendor-meta bg-white border m-0 ">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">
                      {venu_listitem.venue_price}
                    </span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-guest">
                      {venu_listitem.venue_capacity}
                    </span>
                    <span className="vendor-text">Capacity</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated"></i>
                      <i className="fa fa-star rated"></i>
                      <i className="fa fa-star rated"></i>
                      <i className="fa fa-star rated"></i>
                      <i className="fa fa-star rate-mute"></i>
                    </span>
                    <span className="rating-count vendor-text"></span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

        <div className="vendor-content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                <h1>Review</h1>

                {this.state.review_list.map((review_listitem) => (
                  <>
                    <div className="card border card-shadow-none ">
                      <div className="card-header bg-white mb0">
                        <div className="review-user">
                          <div className="user-img">
                            {" "}
                            <img
                              src="https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"
                              style={{ width: 50 }}
                              alt="star rating jquery"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="user-meta">
                            <h5 className="user-name mb-0">
                              {review_listitem.rating_name}{" "}
                              <span className="user-review-date">
                                {review_listitem.rating_date}
                              </span>
                            </h5>
                            <div className="given-review">
                              <span className="rated">
                                <i className="fa fa-star"></i>{" "}
                                <i className="fa fa-star"></i>{" "}
                                <i className="fa fa-star"></i>{" "}
                                <i className="fa  fa-star"></i>{" "}
                                <i className="fa  fa-star"></i>{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="review-descriptions">
                          <p>{review_listitem.rating_name} </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}

                <div className="card border card-shadow-none leave-review">
                  <div className="card-header bg-white mb0">
                    <h3 className="mb0">Write Your Reviews</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.signSubmit.bind(this)}>
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt30">
                          <div className="form-group">
                            <label className="control-label" for="review">
                              Write Your Review
                            </label>
                            <textarea
                              className="form-control"
                              id="review"
                              name="rating_message"
                              rows="5"
                              placeholder="Write Review"
                              onChange={this.handleChange.bind(this)}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group">
                            <label className="control-label" for="name">
                              Name
                            </label>
                            <input
                              id="name"
                              name="rating_name"
                              type="text"
                              placeholder="Name"
                              className="form-control input-md"
                              required=""
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group">
                            <label className="control-label" for="email">
                              Email
                            </label>
                            <input
                              id="email"
                              name="rating_email"
                              type="email"
                              placeholder="email"
                              className="form-control input-md"
                              required=""
                              onChange={this.handleChange.bind(this)}
                            />{" "}
                          </div>
                        </div>{" "}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group">
                            <label className="control-label" for="date">
                              Date
                            </label>
                            <input
                              id="email"
                              name="rating_date"
                              type="date"
                              placeholder="Date"
                              className="form-control input-md"
                              required=""
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group">
                            <label className="control-label" for="number">
                              Number
                            </label>
                            <input
                              id="email"
                              name="rating_number"
                              type="tel"
                              placeholder="Number"
                              className="form-control input-md"
                              required=""
                              onChange={this.handleChange.bind(this)}
                            />{" "}
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="form-group">
                            <button
                              id="submit"
                              name="submit"
                              type="submit"
                              className="btn btn-default"
                            >
                              Submit review
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                <div className="sidebar-venue">
                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={this.handleSubmit}>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h3 className="mb20">Booking</h3>
                          </div>

                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                for="Name"
                              >
                                Name
                              </label>
                              <input
                                id="name1"
                                name="booking_name"
                                type="text"
                                placeholder="Name"
                                onChange={this.handleChange.bind(this)}
                                className="form-control input-md"
                                required=""
                              />
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className=" control-label sr-only"
                                for="email"
                              >
                                Email
                              </label>
                              <input
                                id="email2"
                                name="booking_email"
                                type="email"
                                placeholder="Email"
                                onChange={this.handleChange.bind(this)}
                                className="form-control input-md"
                                required=""
                              />
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className=" control-label sr-only"
                                for="contact"
                              >
                                Contact
                              </label>
                              <input
                                id="phone"
                                name="booking_contact"
                                type="tel"
                                placeholder="Contact"
                                onChange={this.handleChange.bind(this)}
                                className="form-control input-md"
                                required=""
                              />
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                for="Bookingdate"
                              >
                                Booking Date
                              </label>
                              <input
                                id="weddingdate"
                                name="booking_date"
                                type="date"
                                placeholder="Booking Date"
                                onChange={this.handleChange.bind(this)}
                                className="form-control input-md"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                for="time"
                              >
                                Booking Time
                              </label>
                              <input
                                id="weddingdate"
                                name="booking_time"
                                type="time"
                                placeholder="Booking Time"
                                onChange={this.handleChange.bind(this)}
                                className="form-control input-md"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="form-group">
                            <button
                              id="submit"
                              name="submit"
                              type="submit"
                              className="btn btn-default"
                            >
                              Submit review
                            </button>
                          </div>
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

        <Footer />
      </>
    );
  }
}

export default Listsingle;
