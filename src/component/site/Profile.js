import React, { useEffect, useState } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'
import Service from '../../service/Service';
import moment from 'moment'
export default function Profile() {
  const [userData, setUserData] = useState();


  let userId = useParams();
  useEffect(() => {
    loadAllData();
  }, []);

  const userID = localStorage.getItem("USERID");

  const loadAllData = () => {
    Service.getSingleUser(JSON.parse(userID)).then(
      (res) => {
        setUserData(res.data);
        console.log('USER ID', localStorage.getItem("USERID"));
      }
    );
  };

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Profile</h2>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="">Home</Link></li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        {userData && userData.map((index, key) => (
          <div className="container" key={index.user_id}>
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
                          <span>{index.age} Years Old</span>
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
                    <h4 className="p-u-p-header"><i className="fas fa-camera"></i>Uploaded Photos</h4>
                    <div className="p-u-p-list">
                      <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up1.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe">
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
                      {/* <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up3.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up3.jpg" className="light-box mfp-iframe">
                              <i className="fas fa-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up4.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up4.jpg" className="light-box mfp-iframe">
                              <i className="fas fa-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up5.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up5.jpg" className="light-box mfp-iframe">
                              <i className="fas fa-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="profile-main-content">
                  <ul className="top-menu">
                    <li><NavLink to="/single_profile2" exact activeclassname="active-class">Profile</NavLink></li>
                  </ul>
                  {/* Display User data */}
                  <div className="info-box">
                    <div className="header">
                      <h4 className="title">Basic Detail/ माहिती</h4>
                    </div>
                    <div className="content">
                      <ul className="infolist">
                        <li>
                          <span>Name/नाव:</span>
                          <span>{index.user_name}</span>
                        </li>
                        <li>
                          <span>I am a:</span>
                          <span>{index.gender}</span>
                        </li>
                        <li>
                          <span>Looking for a:</span>
                          <span>{index.looking_for_gender}</span>
                        </li>
                        <li>
                          <span>Marital status/वैवाहिक स्थिती:</span>
                          <span>{index.married_status}</span>
                        </li>
                        <li>
                          <span>City/शहर:</span>
                          <span>{index.city}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="header">
                      <h4 className="title">Personal Detail/वैयक्तिक माहिती</h4>
                    </div>
                    <div className="content">
                      <ul className="infolist">
                        <li>
                          <span>Name/नाव:</span>
                          <span>{index.user_name}</span>
                        </li>
                        <li>
                          <span>Date Of Birth/जन्मतारीख:</span>
                          <span>{moment(`${index.dob}`).format('YYYY/MM/DD')}</span>
                        </li>
                        <li>
                          <span>Birth Place/जन्मतारीख ठिकाण:</span>
                          <span>{index.birth_place}</span>
                        </li>
                        <li>
                          <span>Birth time/जन्म वेळ:</span>
                          <span>{index.birth_time}</span>
                        </li>
                        <li>
                          <span>Marital status/वैवाहिक स्थिती:</span>
                          <span>{index.married_status}</span>
                        </li>
                        <li>
                          <span>Educational Qualification/शैक्षणिक पात्रता:</span>
                          <span>{index.education}</span>
                        </li>
                        <li>
                          <span>Service or Business/सेवा किंवा व्यवसाय:</span>
                          <span>{index.bussiness}</span>
                        </li>
                        <li>
                          <span>Income/उत्पन्न:</span>
                          <span>{index.income}</span>
                        </li>
                        <li>
                          <span>Designation/हुद्दा:</span>
                          <span>{index.designation}</span>
                        </li>
                        <li>
                          <span>Workplace/कामाची जागा:</span>
                          <span>{index.workplace}</span>
                        </li>
                        <li>
                          <span>Height/उंची:</span>
                          <span>{index.height}</span>
                        </li>
                        <li>
                          <span>Blood-Group/रक्त गट:</span>
                          <span>{index.blood_group}</span>
                        </li>
                        <li>
                          <span>Color/रंग:</span>
                          <span>{index.color}</span>
                        </li>
                        <li>
                          <span>Weight/वजन:</span>
                          <span>{index.weight}</span>
                        </li>
                        <li>
                          <span>Address/पत्ता:</span>
                          <span>{index.address}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="button-wrapper d-grid gap-2 col-6 col-sm-8 col-md-10 mx-auto mt-3">
                  <Link to="/info">
                    <button type="submit" className="custom-button ml-5">
                      View More Information
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* <!-- ========= Profile Section Start -- */}
    </div>
  )
}