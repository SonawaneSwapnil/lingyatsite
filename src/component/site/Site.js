import React from 'react'
import { Outlet, NavLink, Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Site() {
  const [contact, setcontact] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const isLoggedin = localStorage.getItem("login");

  const login = (e) => {
    e.preventDefault();
    console.log(contact, password);
    const userData = {
      contact,
      password,
    };
    localStorage.setItem('login', JSON.stringify(userData));
    setcontact('');
    setPassword('');
    if (isLoggedin) {
      navigate('/single_profile2');
    } else {
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem('login');
    navigate("/login")
  };

  return (
    <div>
      <div className="overlay"></div>
      <Link to="" className="scrollToTop">
        <i className="fas fa-angle-up"></i>
      </Link>
      {/* <!-- ==========Header-Section========== --> */}
      <div className="header-section">
        <div className="container">

          <div className="header-wrapper">

            <div className="logo">
              <Link to="">
                <img src="./assets/images/logo/logo-old.png" alt="logo" />
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link to="" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="/about" activeClassName="active">About Us</Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">Contact</Link>
              </li>
              <li className="separator">
                <span>|</span>
              </li>
              <li>
                <div className="serch-icon">
                  <Link to="/user_setting">
                    <i className="fa fa-cog" aria-hidden="true"></i></Link>
                </div>
              </li>


              <li className="user-profile">
                <Link to="#">
                  <img src="./assets/images/user-demo.png" alt="" />
                </Link>
                {!isLoggedin ? (
                  <ul className="submenu">
                    <li>
                      <Link to="" onClick={login}>Login</Link>
                    </li>
                    <li>
                      <Link to="/registration">Registration</Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="submenu">
                    <li>
                      <Link to="" onClick={logout}>Logout</Link>
                    </li>
                  </ul>)}
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
                <hr className="hr2" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="copyr-text">
                  <span>
                    Copyright © 2022.All Rights Reserved By
                  </span>
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
