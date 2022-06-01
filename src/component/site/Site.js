import React from 'react'
import { Outlet,NavLink,Link} from 'react-router-dom'


export default function Site() {
 
  return (
    <div>
            {/* <!-- ==========Header-Section========== --> */}
      
    <div className="header-section">
        <div className="container">
            <div className="header-wrapper">
                <div className="logo">
                    <NavLink to="">
                        <img src="./assets/images/logo/logo-old.png" alt="logo"/>
                    </NavLink>
                </div>
                <ul className="menu">
                    <li>
                        <NavLink to="" activeClassName="active-link">Home</NavLink>
                       </li> 
                    <li>
                        <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                    </li>
                    <li className="separator">
                        <span>|</span>
                    </li>
                    <li>
                        <div className="serch-icon">
                        <NavLink to="/user_setting">
                        <i className="fa fa-cog" aria-hidden="true"></i></NavLink>
                        </div>
                    </li>
                    
                   
                    <li className="user-profile">
                        <Link to="#">
                            <img src="./assets/images/user-demo.png" alt=""/>
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link to="/login">Login</Link>
                               
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
    <div className="search-overlay">
        <div className="close"><i className="fas fa-times"></i></div>
        <form action="#">
            <input type="text" placeholder="Write what you want.."/>
        </form>
    </div>
    {/* <!-- ==========Header-Section========== --> */}
    
    <Outlet/>
  {/* <!-- ==========Footer-Section========== --> */}
    <div className="footer-section">
        
        <div className="container">
            <div className="footer-links">
                
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="link-wrapper one">
                            <h4 className="f-l-title">
                                Our Information
                            </h4>
                            <ul className="f-solial-links">
                                <li>
                                    <Link to="#">
                                        <i className="fas fa-angle-double-right"></i> About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fas fa-angle-double-right"></i> Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fas fa-angle-double-right"></i> Privacy policy
                                    </Link>
                                </li>   
                            </ul>
                        </div>
                    </div>
                    
                   
                   
                </div>
            </div>
            <div className="copyright-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <hr className="hr2"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="copyr-text">
                            <span>
                                Copyright © 2022.All Rights Reserved By
                            </span>
                            <Link to="#"><strong>ATJOIN PVT. LTD.</strong></Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
   </div>
    {/* <!-- ==========Footer-Section========== --> */}
  
        
    </div>
  )
}
