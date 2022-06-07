import React from 'react'
import { Link , NavLink} from 'react-router-dom'
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
                                <i className="fas fa-camera"></i> 4 Upload Photos
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
                                {/* <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up2.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up2.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div> */}
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
                                <NavLink to="/details"  exact activeclassname="active-class" >
                                    Add More Information
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/single_profile3" exact activeclassname="active-class" >
                                    Members
                                  
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/search" exact activeclassname="active-class">
                                   search
                                    
                                </NavLink>
                            </li>
                           
                        </ul> 
                        <div className="info-box">
                            <div className="header">
                                <h4 className="title">
                                Basic Detail/ माहिती
                                </h4>
                            </div>
                            <div className="content">
                                <ul className="infolist">
                                    <li>
                                        <span>
                                        Name/नाव:
                                        </span>
                                        <span>
                                            Albert Don
                                        </span>
                                    </li>
                                      <li>
                                        <span>
                                            I am a:
                                        </span>
                                        <span>
                                            Man
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Looking for a:
                                        </span>
                                        <span>
                                            Woman
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Marital status/वैवाहिक स्थिती:
                                        </span>
                                        <span>
                                            single
                                        </span>
                                    </li>
                                    
                                    <li>
                                        <span>
                                            City/शहर:
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
                                Personal Detail/वैयक्तिक माहिती
                                </h4>
                            </div>
                            <div className="content">
                                <ul className="infolist">
                                    <li>
                                        <span>
                                        Name/नाव:
                                        </span>
                                        <span>
                                            Albert Don
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Date Of Birth/जन्मतारीख:
                                        </span>
                                        <span>
                                            1998-01-19
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Birth Place/जन्मतारीख ठिकाण:
                                        </span>
                                        <span>
                                          Nashik
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Birth time/जन्म वेळ:
                                        </span>
                                        <span>
                                            10:00
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Marital status/वैवाहिक स्थिती:
                                        </span>
                                        <span>
                                            single
                                        </span>
                                    </li>
                                    
                                    <li>
                                        <span>
                                        Educational Qualification/शैक्षणिक पात्रता:                                       </span>
                                        <span>
                                            BE
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Service or Business/सेवा किंवा व्यवसाय:
                                        </span>
                                        <span>
                                            Engg
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Income/उत्पन्न:
                                        </span>
                                        <span>
                                           400000
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Designation/हुद्दा:
                                        </span>
                                        <span>
                                           worker
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Workplace/कामाची जागा:
                                        </span>
                                        <span>
                                           Nashik
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Height/उंची:
                                        </span>
                                        <span>
                                          5
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Blood-Group/रक्त गट:
                                        </span>
                                        <span>
                                           B+ve
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Color/रंग:
                                        </span>
                                        <span>
                                           fear
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Weight/वजन:
                                        </span>
                                        <span>
                                           40
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        Address/पत्ता:
                                        </span>
                                        <span>
                                          Nashik
                                        </span>
                                    </li>
                                </ul>
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
