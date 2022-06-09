import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Single_profile3() {
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
                                <NavLink to="/single_profile2" exact activeclassname="active-class">
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                            <NavLink to="/details" exact activeclassname="active-class">
                                    Add More Information
                                    </NavLink>
                            </li>
                           
                            <li>
                            <NavLink to="/single_profile3" exact activeclassname="active-class">
                                    Members
                                  
                                    </NavLink>
                            </li>
                            <li>
                            <NavLink to="/Search" exact activeclassname="active-class">
                                   search
                                    
                                   </NavLink>
                            </li>
                           
                        </ul>
                        <div className="profile-friends">
                            <div className="single-friend">
                                <img src="assets/images/profile/friend1.png" alt=""/>
                                <div className="content">
                                    <Link to="/profile" className="name">
                                        Erma Porter
                                        <div className="isvarify">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                    </Link>
                                    <p className="date">
                                        a month ago
                                    </p>
                                    <Link to="/profile" className="connnect-btn">
                                        View Profile
                                    </Link>
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
