import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import Service from "../../service/Service";
import jsPDF from 'jspdf'
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Selfprofile = () => {
  const [usersData, setUsersData] = useState();
  const [logo, setLogo] = useState("header image.jpg");
  const [logof, setLogof] = useState("footer image.jpg");
  useEffect(() => {
    loadAllUsersData();
  }, []);

  const loadAllUsersData = () => {
    Service.getSingleUser(JSON.parse(localStorage.getItem("USERID"))).then(
      (res) => {
        setUsersData(res.data);
        console.log(res.data);
      }
    );
  };

  let navigate = useNavigate();

  const generatePdf = () => {
    var doc = new jsPDF('portrait', 'pt', 'a4', 'false');
    // A4 Page size in point width=595 x height=842
    //Important Site for study
    // https://mrrio.github.io/jsPDF/examples/basic.html

    doc.addImage(logo, 'jpg', 0, 0, 595, 150, 'header');


    doc.setFontSize(10);
    doc.setFont(undefined, 'bold')
    doc.text("Name : ", 50, 180);
    doc.text(usersData[0].user_name, 200, 180);

    doc.setFontSize(10);
    doc.text("Marital status: ", 50, 210);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].married_status, 200, 210);

    doc.setFontSize(10);
    doc.text("City : ", 50, 240);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].city, 200, 240);

    doc.setFontSize(10);
    doc.text("date of birth : ", 50, 270);
    doc.setFont(undefined, 'bold')
    doc.text(moment(`${usersData[0].dob}`).format('YYYY/MM/DD'), 200, 270);
    // doc.text(usersData[0].dob, 200 , 270);

    doc.setFontSize(10);
    doc.text("Birth-place : ", 50, 300);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].birth_place, 200, 300);

    doc.setFontSize(10);
    doc.text("Birth-Time : ", 50, 330);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].birth_time, 200, 330);

    doc.setFontSize(10);
    doc.text("Educational qualification : ", 50, 360);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].education, 200, 360);

    doc.setFontSize(10);
    doc.text(" Service-Business : ", 50, 390);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].bussiness, 200, 390);

    doc.setFontSize(10);
    doc.text("Income : ", 50, 420);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].income.toString(), 200, 420);

    doc.setFontSize(10);
    doc.text("Designation : ", 50, 450);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].designation, 200, 450);

    doc.setFontSize(10);
    doc.text("Workplace : ", 50, 480);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].workplace, 200, 480);

    doc.setFontSize(10);
    doc.text("Height : ", 50, 510);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].height.toString(), 200, 510);

    doc.setFontSize(10);
    doc.text("Blood-group : ", 50, 540);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].blood_group, 200, 540);

    doc.setFontSize(10);
    doc.text("Color : ", 50, 570);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].color, 200, 570);

    doc.setFontSize(10);
    doc.text("Weight : ", 50, 600);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].weight.toString(), 200, 600);

    doc.setFontSize(10);
    doc.text("Address : ", 50, 630);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].address, 200, 630);

    doc.setFontSize(10);
    doc.text("Fathet Name : ", 50, 660);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].father, 200, 660);

    doc.setFontSize(10);
    doc.text("Contact-No : ", 50, 690);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].father_contact.toString(), 200, 690);

    // doc.setFontSize(10);
    // doc.text("Expection : ", 50 , 720);
    // doc.setFont(undefined,'bold')
    // doc.text(usersData[0].expectation, 200 , 720);

    doc.addImage(logof, 'jpg', 0, 740, 595, 200, 'footer')
    doc.save("profile.pdf");
  }



  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section class="breadcrumb-area profile-bc-area">
        <div class="container">
          <div class="content">
            <h2 class="title extra-padding">Single Profile</h2>
            <ul class="breadcrumb-list extra-padding">
              <li><a href="index.html">Home</a></li>
              <li>Single Profile</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        {usersData &&
          usersData.map((index) => (
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
                              <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></Link>
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
                            <Link to="assets/images/profile/up3.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></Link>
                          </div>
                        </div>
                      </div> */}
                        {/* <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up4.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up4.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></Link>
                          </div>
                        </div>
                      </div> */}
                        {/* <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up5.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up5.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></Link>
                          </div>
                        </div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-lg-6">
                  <div class="profile-main-content">
                    <ul class="top-menu">
                      <li><a href="single-profile2.html">Profile</a></li>
                    </ul>
                    <div class="print__section">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-12">
                            <div ref={componentRef} >
                              <div class="float__start">
                                <div className="info-box">
                                  <div className="header">
                                    <h2 className="title">Family Information/कौटुंबिक माहिती</h2>
                                  </div>
                                  <div className="content">
                                    <ul className="infolist">
                                      <li>
                                        <span>Father Name/वडीलांचे नावं:</span>
                                        <span>{index.father}</span>
                                      </li>
                                      <li>
                                        <span>Contact Number/संपर्क क्रमांक: </span>
                                        <span>{index.father_contact}</span>
                                      </li>
                                      <li>
                                        <span>Mother Name/आईचे नाव:</span>
                                        <span>{index.mother}</span>
                                      </li>
                                      <li>
                                        <span>Contact Number/संपर्क क्रमांक:</span>
                                        <span>{index.mother_contact}</span>
                                      </li>
                                      <li>
                                        <span>Brother Name/भावाचे नाव:</span>
                                        <span>{index.brother}</span>
                                      </li>
                                      <li>
                                        <span>Contact Number/संपर्क क्रमांक:</span>
                                        <span>{index.brother_contact}</span>
                                      </li>
                                      <li>
                                        <span>Sister Name/बहिणीचे नाव</span>
                                        <span>{index.sister}</span>
                                      </li>
                                      <li>
                                        <span>Contact Number/संपर्क क्रमांक:</span>
                                        <span>{index.sister_contact}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="info-box">
                                  <div className="header">
                                    <h4 className="title">Expectation/अपेक्षा वधू/वर</h4>
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
                            <div className="button-wrapper">
                              {/* <Link to="/single_profile2"> */}
                              <button type="submit" className="custom-button ml-5" onClick={() => navigate("/single_profile2")} >Back</button>
                              {/* </Link> */}
                              {/* <Link to="/registration"> */}
                              <button type="submit" onClick={generatePdf} className="print__button custom-button ml-5"> Save as Pdf </button>
                              {/* </Link> */}
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
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

export default Selfprofile;
