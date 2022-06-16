import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'

export default function Site() {
  let navigate = useNavigate();

  var isLoggedin = localStorage.getItem("USERID");

  const login = () => {
    navigate(isLoggedin ? '/single_profile2' : '/login')
  };

  const logout = () => {
    localStorage.removeItem('USERID');
    navigate("/")
  };

  return (
    <div>
      <div className="overlay"></div>
      <Link to="" className="scrollToTop"><i className="fas fa-angle-up"></i> </Link>

      {/* <!-- ==========Header-Section========== --> */}
      <div className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to=""><img src="./assets/images/logo/logo-old.png" alt="logo" /></Link>
            </div>
            <ul className="menu">
              <li><Link to="" activeClassName="active">Home</Link></li>
              <li><Link to="/about" activeClassName="active">About Us</Link></li>
              <li><Link to="/contact" activeClassName="active">Contact</Link></li>

              {isLoggedin ? (<li><Link to="/single_profile2" activeClassName="active">Profile</Link></li>) : ''}
              <li className="separator"><span>|</span></li>
              {/* <li>
                <div className="serch-icon">
                  <Link to="/user_setting"><i className="fa fa-cog" aria-hidden="true"></i></Link>
                </div>
              </li> */}

              <li className="user-profile">
                <Link to="#"><img src="./assets/images/user-demo.png" alt="" /></Link>
                {!isLoggedin ?
                  <ul className="submenu">
                    <li><Link to="" onClick={login()}>Login</Link></li>
                    <li><Link to="/registration">Registration</Link></li>
                  </ul> : <ul className="submenu"><li><Link to="" onClick={logout}>Logout</Link></li></ul>}
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
          <input type="text" placeholder="Write what you want.." />
        </form>
      </div>
      {/* <!-- ==========Header-Section========== --> */}

      <Outlet />

      {/* <!-- ==========Footer-Section========== --> */}
      <div className="footer-section">
        <div className="container">
          <div className="footer-links">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="link-wrapper one">
                  <h4 className="f-l-title mt-3">Our Information</h4>
                  <ul className="row f-solial-links">
                    <li className='col-lg-4'><Link to="/about"><i className="fas fa-angle-double-right"></i>About Us</Link></li>
                    <li className='col-lg-4'><Link to="/contact"><i className="fas fa-angle-double-right"></i>Contact Us</Link></li>
                    <li className='col-lg-4'><Link to="#"><i className="fas fa-angle-double-right"></i> Privacy policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper">
            <div className="row"><div className="col-lg-12"> <hr /></div></div>
            <div className="row">
              <div className="align-self-center">
                <div className="copyr-text">
                  <span className='text-end'>Copyright © 2022.All Rights Reserved By</span>
                  <Link to="#"><strong>&nbsp;ATJOIN PVT. LTD.</strong></Link>
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