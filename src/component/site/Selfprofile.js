import React, { Component, useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Service from "../../service/Service";
import { useReactToPrint } from "react-to-print";
const Selfprofile = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  let navigate = useNavigate();

  const [userData, setUserData] = useState();

  useEffect(() => {
    loadAllData();
  }, []);

  const userID = localStorage.getItem("USERID");

  const loadAllData = () => {
    Service.getSingleUser(JSON.parse(userID)).then((res) => {
      setUserData(res.data);
      console.log("USER ID", localStorage.getItem("USERID"));
    });
  };

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section class="breadcrumb-area profile-bc-area">
        <div class="container">
          <div class="content">
            <h2 class="title extra-padding">Single Profile</h2>
            <ul class="breadcrumb-list extra-padding">
              <li>
                <a href="index.html">Home</a>
              </li>

              <li>Single Profile</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        {userData &&
          userData.map((index) => (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-7">
                  <div className="left-profile-area">
                    <div className="profile-about-box">
                      <div className="top-bg"></div>
                      <div className="p-inner-content">
                        <div className="profile-img">
                          <img
                            src="assets/images/profile/profile-user.png"
                            alt=""
                          />
                          <div className="active-online"></div>
                        </div>
                        <h5 className="name">{index.user_name}</h5>
                        <ul className="p-b-meta-one">
                          <li>
                            <span>21 Years Old</span>
                          </li>
                          <li>
                            <span>
                              {" "}
                              <i className="fas fa-map-marker-alt"></i>
                              {index.city}
                            </span>
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
                            <img src="assets/images/profile/up1.jpg" alt="" />
                            <div className="overlay">
                              <Link
                                to="assets/images/profile/up1.jpg"
                                className="light-box mfp-iframe"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
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
                            <img src="assets/images/profile/up3.jpg" alt="" />
                            <div className="overlay">
                              <Link
                                to="assets/images/profile/up3.jpg"
                                className="light-box mfp-iframe"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="my-col">
                          <div className="img">
                            <img src="assets/images/profile/up4.jpg" alt="" />
                            <div className="overlay">
                              <Link
                                to="assets/images/profile/up4.jpg"
                                className="light-box mfp-iframe"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="my-col">
                          <div className="img">
                            <img src="assets/images/profile/up5.jpg" alt="" />
                            <div className="overlay">
                              <Link
                                to="assets/images/profile/up5.jpg"
                                className="light-box mfp-iframe"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-lg-6">
                  <div class="profile-main-content">
                    <ul class="top-menu">
                      <li>
                        <a href="single-profile2.html">Profile</a>
                      </li>
                    </ul>
                    <div class="print__section">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-12">
                            <div ref={componentRef}>
                              <div class="float__start">
                                <div className="info-box">
                                  <div className="header">
                                    <h2 className="title">
                                      Family Information/कौटुंबिक माहिती
                                    </h2>
                                  </div>

                                  <div className="content">
                                    <ul className="infolist">
                                      <li>
                                        <span>Father Name/वडीलांचे नावं:</span>
                                        <span>{index.father}</span>
                                      </li>
                                      <li>
                                        <span>
                                          Contact Number/संपर्क क्रमांक:
                                        </span>
                                        <span>{index.father_contact}</span>
                                      </li>
                                      <li>
                                        <span>Mother Name/आईचे नाव:</span>
                                        <span>{index.mother}</span>
                                      </li>
                                      <li>
                                        <span>
                                          Contact Number/संपर्क क्रमांक:
                                        </span>
                                        <span>{index.mother_contact}</span>
                                      </li>
                                      <li>
                                        <span>Brother Name/भावाचे नाव</span>
                                        <span>{index.brother}</span>
                                      </li>
                                      <li>
                                        <span>
                                          Contact Number/संपर्क क्रमांक:
                                        </span>
                                        <span>{index.brother_contact}</span>
                                      </li>

                                      <li>
                                        <span>Sister Name/बहिणीचे नाव</span>
                                        <span>{index.sister}</span>
                                      </li>
                                      <li>
                                        <span>
                                          Contact Number/संपर्क क्रमांक:
                                        </span>
                                        <span>{index.sister_contact}</span>
                                      </li>
                                      <li></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="info-box">
                                  <div className="header">
                                    <h4 className="title">
                                      Expectation/अपेक्षा वधू/वर
                                    </h4>
                                  </div>
                                  <div className="content">
                                    <ul className="infolist">
                                      <li>
                                        <span>Expection/अपेक्षा वधू/वर:</span>
                                        <span>{index.expectation}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="info-box">
                              <div className="button-wrapper">
                                {/* <Link to="/single_profile2"> */}
                                <button
                                  type="submit"
                                  className="custom-button ml-5"
                                  onClick={() => navigate("/search")}
                                >
                                  Back
                                </button>
                                {/* </Link> */}

                                {/* <Link to="/registration"> */}
                                <button
                                  type="submit"
                                  onClick={handlePrint}
                                  className="print__button custom-button ml-5"
                                >
                                  {" "}
                                  Save as Pdf{" "}
                                </button>

                                {/* </Link> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
      </section>

      {/* <!-- ========= Profile Section Start -- */}
    </div>
  );
};

export default Selfprofile;
