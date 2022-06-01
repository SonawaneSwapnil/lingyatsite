import React from 'react'
import { Link } from 'react-router-dom'
export default function Single_profile2() {
  return (
    <div>

{/* <!-- ==========Breadcrumb-Section========== --> */}
    <section className="breadcrumb-area profile-bc-area">
        <div className="container">
            <div className="content">
                <h2 className="title extra-padding">
                    Single Profile
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                        <Link to="">
                            Home
                        </Link>
                    </li>

                    <li>
                        Single Profile
                    </li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- ==========Breadcrumb-Section========== --> */}


    {/* <!-- ========= Profile Section Start --> */}
    <section className="profile-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-7">
                    <div className="left-profile-area">
                        <div className="profile-about-box">
                            <div className="top-bg"></div>
                            <div className="p-inner-content">
                                <div className="profile-img">
                                    <img src="assets/images/profile/profile-user.png" alt=""/>
                                    <div className="active-online"></div>
                                </div>
                                <h5 className="name">
                                    Albert Don
                                </h5>
                                <ul className="p-b-meta-one">
                                    <li>
                                        <span>21 Years Old</span>
                                    </li>
                                    <li>
                                        <span> <i className="fas fa-map-marker-alt"></i>Paris,France</span>
                                    </li>
                                </ul>
                                {/* <!-- <div className="p-b-meta-two">
                                    <div className="left">
                                        <div className="icon">
                                            <i className="far fa-heart"></i>
                                        </div> 257
                                    </div>
                                    <div className="right">
                                        <Link to="#" className="custom-button">
                                            <i className="fab fa-cloudversify"></i> Get Premium
                                        </Link>
                                    </div>
                                </div> --> */}
                            </div>
                        </div>
                        <div className="profile-meta-box">
                            {/* <!-- <ul className="p-m-b">
                                <li>
                                    <Link to="#" data-toggle="modal" data-target="#usermessage">
                                        <i className="far fa-envelope"></i>
                                        <div className="number">04</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" data-toggle="modal" data-target="#usernotification">
                                        <i className="far fa-bell"></i>
                                        <div className="number">04</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fas fa-cogs"></i>
                                    </Link>
                                </li>
                            </ul> --> */}
                        </div>
                        <div className="profile-uplodate-photo">
                            <h4 className="p-u-p-header">
                                <i className="fas fa-camera"></i> 21 Upload Photos
                            </h4>
                            <div className="p-u-p-list">
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up1.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up2.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up2.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up3.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up3.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up4.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up4.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up5.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up5.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up6.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up6.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="profile-main-content">
                        <ul className="top-menu">
                        <li>
                                <Link to="/single_profile2" className="active">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/details">
                                    Add More Information
                                </Link>
                            </li>
                           
                            <li>
                                <Link to="/single_profile3">
                                    Members
                                  
                                </Link>
                            </li>
                            <li>
                                <Link to="/Search">
                                   search
                                    
                                </Link>
                            </li>
                           
                        </ul>
                        <div className="info-box">
                            <div className="header">
                                <h4 className="title">
                                    Base
                                </h4>
                            </div>
                            <div className="content">
                                <ul className="infolist">
                                    <li>
                                        <span>
                                            Name
                                        </span>
                                        <span>
                                            Albert Don
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Birthday
                                        </span>
                                        <span>
                                            1998-01-19
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            I am a
                                        </span>
                                        <span>
                                            Man
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Looking for a
                                        </span>
                                        <span>
                                            Woman
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Marital status
                                        </span>
                                        <span>
                                            single
                                        </span>
                                    </li>
                                    {/* <!-- <li>
                                        <span>
                                            Country
                                        </span>
                                        <span>
                                            France
                                        </span>
                                    </li> --> */}
                                    <li>
                                        <span>
                                            City
                                        </span>
                                        <span>
                                            Paris
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="header">
                                <h4 className="title">
                                    Education
                                </h4>
                                {/* <!-- <h4 className="title">
                                    Myself Summary
                                </h4>
                            </div>
                            <div className="content">
                                <p className="text">
                                    I don`t like talk too much to be honest and
                                    especially about myself. I am man of actions, I do a lot of sports, I adore to
                                    travel and to see the world.
                                </p> --> */}
                                <div className="content"> 
                                    <ul className="infolist">
                                        <li>
                                            <span>
                                                Qualification
                                            </span>
                                            <span>
                                                B.E
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Service/Business
                                            </span>
                                            <span>
                                                Business
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Service Name
                                            </span>
                                            <span>
                                                xyz2
                                            </span>
                                        </li>
                                       
                                    </ul>
                            </div>
                        </div>
                        
                        <div className="info-box">
                            <div className="header">
                                <h4 className="title">
                                    Physical
                                </h4>
                            </div>
                            <div className="content">
                                <ul className="infolist">
                                    <li>
                                        <span>
                                            Height
                                        </span>
                                        <span>
                                            5’10
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Blood Group
                                        </span>
                                        <span>
                                            o+ve
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Color
                                        </span>
                                        <span>
                                            Nimgora
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Weight
                                        </span>
                                        <span>
                                            55kg
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Body Type
                                        </span>
                                        <span>
                                            Tall
                                        </span>
                                    </li>
                                    {/* <!-- <li>
                                        <span>
                                            Ethnicity
                                        </span>
                                        <span>
                                            Middle Eastern
                                        </span>
                                    </li> --> */}
                                </ul>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="header">
                                <h4 className="title">
                                    Family Info
                                </h4>
                            </div>
                            <div className="content">
                                <ul className="infolist">
                                    <li>
                                        <span>
                                            Father Name
                                        </span>
                                        <span>
                                            Billiards
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Mother Name
                                        </span>
                                        <span>
                                            xyz
                                        </span>
                                    </li>
                                     <li>
                                        <span>
                                            Brother Name
                                        </span>
                                        <span>
                                            abc
                                        </span>
                                    </li> 
                                    <li>
                                        <span>
                                            Sister Name
                                        </span>
                                        <span>
                                            xyz1
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Family Income
                                        </span>
                                        <span>
                                            15lkh
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Property
                                        </span>
                                        <span>
                                            abc
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                  
            </div>
        </div>
        </div>
    </section>
   
    {/* <!-- ========= Profile Section Start -- */}
    </div>
  )
}
