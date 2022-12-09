import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Service from "../../service/Service";

// const useAuth=()=>{
//   const userLogin=JSON.parse(localStorage.getItem('USERID'));
//   if(userLogin){
//     return true
//   } else {
//     return false
//   }
// }

export default function Site() {
  // const auth=useAuth();
  let navigate = useNavigate();

  var isLoggedin = JSON.parse(localStorage.getItem("LOGGEDIN"));
  var USERNAME = JSON.parse(localStorage.getItem("USERNAME"));

  useEffect(() => {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }

    // To Clear All Cache
    // caches.keys().then((names) => {
    //   names.forEach((name) => {
    //     caches.delete(name);
    //   });
    // });
    // alert('Complete Cache Cleared')
  }, []);

  const login = () => {
    navigate(isLoggedin ? "/update-profile" : "/login");
    localStorage.setItem("LOGGEDIN", true);
  };

  const logout = () => {
    localStorage.removeItem("USERID");
    localStorage.setItem("LOGGEDIN", false);
    localStorage.removeItem("USERNAME");
    navigate("/");
  };

  const goProfile = () => {
    localStorage.setItem("LOGGEDIN", true);
    if (localStorage.getItem("SearchUserID")) {
      localStorage.removeItem("SearchUserID");
      window.location.reload(true);
      navigate("/profile");
    }
  };

  return (
    <div>
      <div className="overlay"></div>
      <Link to="" className="scrollToTop">
        <i className="fas fa-angle-up"></i>{" "}
      </Link>

      {/* <!-- ==========Header-Section========== --> */}
      <div className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="">
                <img src="./assets/images/logo/logo-1.png" alt="logo" />
              </Link>
            </div>
            <ul className="menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              {!isLoggedin && (
                <li>
                  <a style={{ cursor: "pointer" }} onClick={login}>
                    Login
                  </a>
                </li>
              )}
              {!isLoggedin && (
                <li>
                  <a href="/registration">Registration</a>
                </li>
              )}

              <li className="separator">
                <span>|</span>
              </li>
              {/* <li>
                <div className="serch-icon">
                  <Link to="/user_setting"><i className="fa fa-cog" aria-hidden="true"></i></Link>
                </div>
              </li> */}

              <li className="user-profile">
                <Link to="#">
                  <img src="./assets/images/user-demo.png" alt="" />
                </Link>
                {!isLoggedin ? (
                  <ul className="submenu">
                    <li>
                      <a onClick={login}>Login</a>
                    </li>
                    <li>
                      <Link to="/registration">Registration</Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="submenu">
                    <div className="row">
                      <li className="col-9">
                        <a href="/profile" onClick={goProfile}>
                          {USERNAME || "profile"}
                        </a>
                      </li>
                      <i className="fa fa-cog col-3 p-3" aria-hidden="true"></i>
                    </div>
                    {/* <li> <Link to="/profile" onClick={goProfile} activeclassname="active">Profile</Link></li> */}
                    <li>
                      <a href="/" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                )}
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
        <div className="close">
          <i className="fas fa-times"></i>
        </div>
        <form action="#">
          <input type="text" placeholder="Write what you want.." />
        </form>
      </div>
      {/* <!-- ==========Header-Section========== --> */}

      {/* {auth?<Outlet/>: <Navigate to="/login"/>} */}
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
                    <li className="col-lg-4">
                      <Link to="/about">
                        <i className="fas fa-angle-double-right"></i>About Us
                      </Link>
                    </li>
                    <li className="col-lg-4">
                      <Link to="/contact">
                        <i className="fas fa-angle-double-right"></i>Contact Us
                      </Link>
                    </li>
                    {/* <li className='col-lg-4'><Link to="#"><i className="fas fa-angle-double-right"></i> Privacy policy</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper">
            <div className="row">
              <div className="col-lg-12">
                {" "}
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="align-self-center">
                <div className="copyr-text">
                  <span className="text-end">
                    Copyright © 2022.All Rights Reserved By
                  </span>
                  <a href="https://mkvlvivah.com">
                    <strong>
                      &nbsp;महाराष्ट्र कर्नाटक वीरशैव लिंगायत निःशुल्क विवाह डॉट
                      कॉम
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==========Footer-Section========== --> */}
    </div>
  );
}
