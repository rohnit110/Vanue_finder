import React from 'react';
import Header from './Header';
import Footer from './Footer';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <div className="page-caption">
                                    <h1 className="page-title">About us</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="page-breadcrumb">
                        <div className="container">
                            <div className="row">
                                <nav aria-label="breadcrumb">
                                    
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="space-medium pb-0">
                    <div className="container">
                        <div className="row">

                            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 mb60">
                                <div className="about-descriptions text-center">
                                    <div className="circle-icon rounded-circle bg-default mb30">
                                        <i className="icon-051-balloons"></i>
                                    </div>
                                    <h2>A Vision Beyond Your Dreams</h2>
                                    <p className="lead">Founded in 2015, RealWed is online wedding directory. Elit sed lectus molestie dictum. Integer vehicula malesuada euismod. Vivamus tellus to id massa quis, pretium convallis augue. Phasellus efficitur aumetus ullamcs tempor erat quis accumsan simple dummy content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pl-xl-0 pr-xl-0">
                                <div className="card-group">
                                    <div className="card">
                                        <div className="card-body metrics-v1 metrics">
                                            <h1 className="metrics-title">Founded in</h1>
                                            <h2 className="metrics-subtitle">2015</h2>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body metrics-v1 metrics">
                                            <h1 className="metrics-title ">City</h1>
                                            <h2 className="metrics-subtitle ">13000</h2>
                                        </div>
                                    </div>
                                    <div className="card ">
                                        <div className="card-body metrics-v1 metrics">
                                            <h1 className="metrics-title">Our Team</h1>
                                            <h2 className="metrics-subtitle">45+</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-medium">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 text-center">
                                <div className="section-title">
                                    <h2>What we do</h2>
                                    <p>Sed iaculis elit sed lectus molestie dictum. Integer vehicula malesuada euismod. Vivamus tellus tortor, accumsan id massa quis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                                <div className="feature-block">
                                    <div className="circle-icon bg-info rounded-circle mb30">
                                        <i className="icon-038-bouquet"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Hire the right vendor</h3>
                                        <p>Sed iaculis elit sed lectus molestie dictger vehicullesuada euismod. Vivamus tellusassa quis, pretium convallis augue. </p>
                                        <a href="#" className="btn btn-outline-default">find now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                                <div className="feature-block">
                                    <div className="circle-icon bg-danger rounded-circle mb30">
                                        <i className="icon-013-calendar"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Wedding Planning Tools</h3>
                                        <p>Phasellus efficitur auctor felis, sit amet aliquet metus ullamcorper at. Aliquam rhoncus tempor erat quis accumsan. </p>
                                        <a href="#" className="btn btn-outline-default">Star Your Planning</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                                <div className="feature-block">
                                    <div className="circle-icon bg-secondary rounded-circle mb30">
                                        <i className="icon-021-love-1"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Wedding Tips & advice</h3>
                                        <p>Vivamus tellus tortor, accumsan id massa quis, pretium convallis augue. Aliquam rhoncus tempor erat quis accumsan.</p>
                                        <a href="#" className="btn btn-outline-default">read our articles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-medium bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12 ">
                                <div className="section-title">
                                    <h2>Core Values</h2>
                                    <p>Sed iaculis elit sed lectus molestie dictum. Integer vehicula malesuada euismod.
                                        <br /> Vivamus tellus tortor, accumsan id massa quis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12 ">
                                <ul className="list-group list-group-flush value-section">
                                    <li className="list-group-item pl-0 pr-0">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <h3 className="heading-btm-line">Leadership</h3>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                                                <p><strong>The courage to shape a better future.</strong> Phasellus efficitur auctor felis, sit amet aliquet metus ullamcorper at. Aliquam rhoncus tempor erat quis accumsan.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item pl-0 pr-0">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <h3 className="heading-btm-line">Perfactions</h3>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                                                <p>Phasellus efficitur auctor felis, <strong>sit amet aliquet metus ullamcorper at</strong>. Aliquam rhoncus tempor erat quis accumsan.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item pl-0 pr-0">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <h3 className="heading-btm-line">Focus on Impact</h3>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                                                <p>Fusce nec arcu ipsum. Aenean sit amet ante ante. <strong>Nulla ultricies vehicula purus id malesuada</strong>.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item pl-0 pr-0">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <h3 className="heading-btm-line">Create a Cluture</h3>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                                                <p>Phasellus efficitur auctor felis, sit <strong>amet aliquet metus ullamcorper at</strong>. Aliquam rhoncus tempor erat quis accumsan.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item pl-0 pr-0">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <h3 className="heading-btm-line">Supporting Sustainability</h3>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                                                <p>Maecenas commodo erat sit amet luctus aliquet. <strong>Maecenas ut mauris id orci lobortis tincidunt</strong>.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item pl-0 pr-0">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <h3 className="heading-btm-line">Passion</h3>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                                                <p>Nullam placerat, leo at vulputate iaculis, <strong>arcu dolor eleifend lorem, sed sodales</strong> ligula sem ornare ligula.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-medium">
                    <div className="container ">
                        <div className="row ">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="">Work with us - Career</h3>
                                        <div className="mb20">
                                            <img src="images/workplace-img-1.jpg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Nullam placerat, leo at vulputate iaculis, arcu dolor eleifend lorem, sed sodales ligula sem ornare ligula.</p>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#" className="btn-default-link">Our Open Position</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="">Our Leadership Principles</h3>
                                        <div className="mb20">
                                            <img src="images/workplace-img-2.jpg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Arcu dolor eleifend loremullam placerat, leo at vulputat a sed sodales ligula sem ornare ligulaculis.</p>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#" className="btn-default-link">Meet The Team</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
<Footer/>
            </React.Fragment>
        );
    }
}

export default About;