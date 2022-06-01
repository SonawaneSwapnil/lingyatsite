import React from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
    
  return (
    <div>
       
        {/* <!-- ==========Breadcrumb-Section========== --> */}
    <section className="breadcrumb-area profile-bc-area">
        <div className="container">
            <div className="content">
                <h2 className="title extra-padding">
                   Search
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                         <Link  to="index.html">
                            Home
                        </Link>
                    </li>

                    <li>
                        Search
                    </li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- ==========Breadcrumb-Section========== --> */}

    {/* <!-- ==========Community-Section========== --> */}
    <section className="community-section inner-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="top-filter">
                        <div className="left">
                             <Link  to="" data-toggle="modal" data-target="#exampleModalCenter">
                                <i className="fas fa-sliders-h"></i> Find your Perfect Partner
                            </Link>
                        </div>
                        {/* <div className="right">
                            <span className="span">
                                Order By :
                            </span>
                            <div className="filter-right">
                                <select className="nice-select select-bar">
                                    <option value="">Latest Active</option>
                                    <option value="">NEW</option>
                                    <option value="">OLD</option>
                                    <option value="">POPULAR</option>
                                </select>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend1.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Erma Porter
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend2.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Brad Barber
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend3.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Vicki Alvarez
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend4.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Amber Perry
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend5.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Kelly Fox
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend6.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Opal Farmer
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend7.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                May Hart
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend8.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Ana Byrd
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend9.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Arthur Bass
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-friend">
                        <img src="assets/images/profile/friend10.png" alt=""/>
                        <div className="content">
                             <Link  to="single-profile.html" className="name">
                                Stewart Bailey
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="single-profile.html" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- <div className="row">
                <div className="col-lg-12">
                    <div className="pagination-area text-center">
                         <Link  to="#"><i className="fas fa-angle-double-left"></i><span></span></Link>
                         <Link  to="#">1</Link>
                         <Link  to="#">2</Link>
                         <Link  to="#" className="active">3</Link>
                         <Link  to="#">4</Link>
                         <Link  to="#">5</Link>
                         <Link  to="#"><i className="fas fa-angle-double-right"></i></Link>
                    </div>
                </div>
            </div> --> */}
        </div>
    </section>
    {/* <!-- ==========Community-Section========== --> */}
    <div className="modal fade filter-p" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header justify-content-between">
                  
                    <h6 className="modal-title text-center" id="exampleModalCenterTitle">Find your Perfect Partner</h6>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="join-now-box">
                        <div className="single-option">
                            <p className="title">
                                I am a :
                            </p>
                            <div className="option">
                                <div className="s-input mr-3 ml-5">
                                    <input type="radio" name="gender" id="male"/><label for="male">Male</label>
                                </div>
                                <div className="s-input ml-5">
                                    <input type="radio" name="gender" id="female"/><label for="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="single-option gender">
                            <p className="title">
                                Seeking a :
                            </p>
                            <div className="option">
                                <div className="s-input mr-2 ml-4">
                                    <input type="radio" name="seeking" id="males"/><label for="males">Man</label>
                                </div>
                                <div className="s-input ml-5">
                                    <input type="radio" name="seeking" id="females"/><label for="females">Woman</label>
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
                                <div className="s-input mr-3 ml-5">
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
                            <button className="custom-button">Find</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
