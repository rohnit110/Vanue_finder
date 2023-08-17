import React from 'react';
function Footer() {
  return (
    <React.Fragment>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">

              <div className="footer-widget">
                <a href="#"><img src="images/footer-logo.png" alt="" className="mb20" /></a>
                <p className="mb10">Vestibulum ante elit, convallis quis nibh in, vulputate rhoncus massa. In hac habitasse platea dictumst.</p>
                <p>In hac habitasse platea dictumst simple dummy content here.</p>
              </div>
            </div>


            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="widget-title">
                  Contact Address
                </h3>
                <p>4998 Elk Creek Road Canton,
                  <br /> GA 30114</p>
                <p className="mb0 text-default">+0-800-1234-123</p>
                <p className="mb0 text-default">info@realwed.com</p>
              </div>
            </div>


            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="widget-title">
                  About Company
                </h3>
                <ul className="listnone">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Faq</a></li>
                  <li><a href="#">Pricing Plan</a></li>
                  <li><a href="#">Meet The Team</a></li>
                </ul>
              </div>
            </div>


            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="widget-title">
                  List you Business
                </h3>
                <p>Are you vendor ? List your venue and service get more from listing business.</p>
                <a href="#" className="btn btn-default">List your Business</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="tiny-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-right">
              <p>© 2018 RealWed. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}

export default Footer;