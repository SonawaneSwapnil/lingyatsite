import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
         {/* <!-- ==========Banner-Section========== --> */}
    <div className="banner-section">
        <img className="img1 wow fadeInLeft" src="assets/images/banner/aimg1.png" alt=""/>
        <img className="img2 wow fadeInRight" src="assets/images/banner/aimg2.png" alt=""/>
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-5">
                    <h3 className="main-title wow fadeInLeft">
                        Find Love Your Life
                    </h3>
                    <div className="join-now-box wow fadeInUp">
                        <div className="single-option">
                            <p className="title">
                                I am a :
                            </p>
                            <div className="option">
                                <div className="s-input mr-3 ml-5">
                                    <input type="radio" name="gender" id="male"/><label htmlFor="male">Male</label>
                                </div>
                                <div className="s-input ml-5">
                                    <input type="radio" name="gender" id="female"/><label htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="single-option gender">
                            <p className="title">
                                Seeking a :
                            </p>
                            <div className="option">
                                <div className="s-input mr-2 ml-4">
                                    <input type="radio" name="seeking" id="males"/><label htmlFor="males">Male</label>
                                </div>
                                <div className="s-input ml-5">
                                    <input type="radio" name="seeking" id="females"/><label htmlFor="females">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="single-option age">
                            <p className="title">
                                Ages :
                            </p>
                            <div className="option">
                                <div className="s-input mr-3 ml-5">
                                    <select className="select-bar">
                                        <option value="">18</option>
                                        <option value="">20</option>
                                        <option value="">24</option>
                                    </select>
                                </div>
                                <div className="separator">
                                    -
                                </div>
                                <div className="s-input  mr-5  ml-5">
                                    <select className="select-bar">
                                        <option value="">30</option>
                                        <option value="">35</option>
                                        <option value="">40</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="single-option last">
                            <p className="title">
                             City:
                            </p>
                            <input type="text"></input>
                            
                        </div>
                        <div className="joun-button">
                    <Link to="login">
                            <button className="custom-button">Find Your Perfect Partner</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ==========Banner-Section========== -->

    <!-- ==========Feature-Section========== --> */}
    <section className="feature-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single-feature wow fadeInUp" data-wow-delay="0.1s">
                        <div className="icon">
                            <img src="assets/images/feature/icon01.png" alt=""/>
                        </div>
                        <h4>
                            100% Verifide
                        </h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-feature wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon">
                            <img src="assets/images/feature/icon02.png" alt=""/>
                        </div>
                        <h4>
                            Most Secure
                        </h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-feature wow fadeInUp" data-wow-delay="0.3s">
                        <div className="icon">
                            <img src="assets/images/feature/icon03.png" alt=""/>
                        </div>
                        <h4>
                            100% Privacy
                        </h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-feature wow fadeInUp" data-wow-delay="0.4s">
                        <div className="icon">
                            <img src="assets/images/feature/icon04.png" alt=""/>
                        </div>
                        <h4>
                            Smart Matching
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========How it work Section========== --> */}
    <section className="how-it-work-section">
        <img className="shape1" src="assets/images/h-it-w/circle-shape.png" alt=""/>
        <img className="shape2" src="assets/images/h-it-w/bird.png" alt=""/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="content">
                        <div className="section-header">
                            <h6 className="sub-title extra-padding wow fadeInUp">
                                Meet New People Today!
                            </h6>
                            <h2 className="title wow fadeInUp">
                                How Does It Work?
                            </h2>
                            <p className="text wow fadeInUp">
                                You’re just 3 steps away from a great date
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.1s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon1.png" alt=""/>
                            <div className="number">
                                01
                            </div>
                        </div>
                        <h4 className="title">
                            Tell us who you are!
                        </h4>
                        <Link to="#" className="custom-button">Join Now !</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon2.png" alt=""/>
                            <div className="number">
                                02
                            </div>
                        </div>
                        <h4 className="title">
                            Find the right person
                        </h4>
                        <Link to="#" className="custom-button">Join Now !</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.3s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon3.png" alt=""/>
                            <div className="number">
                                03
                            </div>
                        </div>
                        <h4 className="title">
                            Get Connect/Contact
                        </h4>
                        <Link to="#" className="custom-button">Join Now !</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========How it work Section==========  */}
    </div>
  )
}
