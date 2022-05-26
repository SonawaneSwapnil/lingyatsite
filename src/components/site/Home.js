import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div className="container-fluid header bg-white p-0">
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-5">
            <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect partner</span> Dream True</h1>
            
            <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <Link to="/login" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">FREE REGISTRATION</Link>
        </div>
        <div className="col-md-6 animated fadeIn">
        <img className="img-fluid" src="assets/img/top.jpg" alt=""/>
            <div className="owl-carousel header-carousel">
                <div className="owl-carousel-item">
                    <img className="img-fluid" src="assets/img/about.jpg" alt=""/>
                </div>
                <div className="owl-carousel-item">
                    <img className="img-fluid" src="assets/img/carousel-2.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>
     

{/* 
    <!-- Category Start --> */} 
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:600}}>
                <h1 className="mb-3">Property Types</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                    eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <Link className="cat-item d-block bg-light text-center rounded p-3" to="#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="assets/img/icon-apartment.png" alt="Icon"/>
                            </div>
                            <h6>Apartment</h6>
                            <span>123 Properties</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <Link className="cat-item d-block bg-light text-center rounded p-3" to="#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="assets/img/icon-villa.png" alt="Icon"/>
                            </div>
                            <h6>Villa</h6>
                            <span>123 Properties</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <Link className="cat-item d-block bg-light text-center rounded p-3" to="#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="assets/img/icon-house.png" alt="Icon"/>
                            </div>
                            <h6>Home</h6>
                            <span>123 Properties</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <Link className="cat-item d-block bg-light text-center rounded p-3" to="#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="assets/img/icon-housing.png" alt="Icon"/>
                            </div>
                            <h6>Office</h6>
                            <span>123 Properties</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <Link className="cat-item d-block bg-light text-center rounded p-3" to="#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="assets/img/icon-building.png" alt="Icon"/>
                            </div>
                            <h6>Building</h6>
                            <span>123 Properties</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <Link className="cat-item d-block bg-light text-center rounded p-3" to="#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="assets/img/icon-neighborhood.png" alt="Icon"/>
                            </div>
                            <h6>Townhouse</h6>
                            <span>123 Properties</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <Link className="cat-item d-block bg-light text-center rounded p-3" to="#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="assets/img/icon-condominium.png" alt="Icon"/>
                            </div>
                            <h6>Shop</h6>
                            <span>123 Properties</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <Link className="cat-item d-block bg-light text-center rounded p-3" to="#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="assets/img/icon-luxury.png" alt="Icon"/>
                                
                            </div>
                            <h6>Garage</h6>
                            <span>123 Properties</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Category End -->


    <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img src="assets/img/about.jpg" className="img-fluid w-100"  alt="noimage"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                        diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                    <Link className="btn btn-primary py-3 px-5 mt-3" to="#">Read More</Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End -->


    <!-- Property List Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 className="mb-3">Property Listing</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero
                            ipsum sit eirmod sit diam justo sed rebum.</p>
                    </div>
                </div>
                <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li className="nav-item me-2">
                            <Link className="btn btn-outline-primary active" data-bs-toggle="pill"
                                to="#tab-1">Featured</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="btn btn-outline-primary" data-bs-toggle="pill" to="#tab-2">For Sell</Link>
                        </li>
                        <li className="nav-item me-0">
                            <Link className="btn btn-outline-primary" data-bs-toggle="pill" to="#tab-3">For Rent</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-1.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Appartment</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-2.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-3.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Office</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-4.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Building</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-5.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Home</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-6.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Shop</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <Link className="btn btn-primary py-3 px-5" to="#">Browse More Property</Link>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-1.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Appartment</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-2.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-3.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Office</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-4.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Building</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-5.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Home</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-6.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Shop</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <Link className="btn btn-primary py-3 px-5" to="#">Browse More Property</Link>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-1.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Appartment</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-2.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-3.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Office</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-4.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Building</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-5.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Sell</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Home</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Link to="#"><img className="img-fluid" src="assets/img/property-6.jpg" alt=""/></Link>
                                    <div
                                        className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        For Rent</div>
                                    <div
                                        className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Shop</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">$12,345</h5>
                                    <Link className="d-block h5 mb-2" to="#">Golden Urban House For Sell</Link>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York,
                                        USA</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i
                                            className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i
                                            className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <Link className="btn btn-primary py-3 px-5" to="#">Browse More Property</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Property List End -->


    <!-- Call to Action Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="bg-light rounded p-3">
            {/* style="border: 1px dashed rgba(0, 185, 142, .3)" */}
                <div className="bg-white rounded p-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid rounded w-100" src="assets/img/call-to-action.jpg" alt=""/>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="mb-4">
                                <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit
                                    diam justo sed vero dolor duo.</p>
                            </div>
                            <Link to="#" className="btn btn-primary py-3 px-4 me-2"><i
                                    className="fa fa-phone-alt me-2"></i>Make A Call</Link>
                            <Link to="#" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get
                                Appoinment</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Call to Action End -->


    <!-- Team Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:600}}>
                <h1 className="mb-3">Property Agents</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                    eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src="assets/img/team-1.jpg" alt=""/>
                            <div
                                className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src="assets/img/team-2.jpg" alt=""/>
                            <div
                                className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src="assets/img/team-3.jpg" alt=""/>
                            <div
                                className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src="assets/img/team-4.jpg" alt=""/>
                            <div
                                className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End -->


    <!-- Testimonial Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:600}}>
                <h1 className="mb-3">Our Clients Say!</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                    eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item bg-light rounded p-3">
                    <div className="bg-white border rounded p-4">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet
                            diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div className="d-flex align-items-center">
                            <img src="assets/img/testimonial-1.jpg" className="img-fluid flex-shrink-0 rounded"  alt="not found"
                                style={{width:45,height:45}}/>
                                  
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item bg-light rounded p-3">
                    <div className="bg-white border rounded p-4">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet
                            diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div className="d-flex align-items-center">
                            <img src="assets/img/testimonial-2.jpg" className="img-fluid flex-shrink-0 rounded"  alt="not found"
                                style={{width:45,height:45}}/>
                                
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item bg-light rounded p-3">
                    <div className="bg-white border rounded p-4">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet
                            diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div className="d-flex align-items-center">
                            <img  src="assets/img/testimonial-3.jpg" className="img-fluid flex-shrink-0 rounded" alt="not found"
                                style={{width: 45,height: 45}}/>
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --!> */}
    </div>
  )
}
