import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Service from "../../service/Service";
import jsPDF from 'jspdf'
import moment from "moment";
import { useNavigate } from "react-router-dom";

const UserProfileOtherInfo = () => {
  const [usersData, setUsersData] = useState();
  useEffect(() => {
    loadAllUsersData();
  }, []);

  var loggedInUser = JSON.parse(localStorage.getItem("USERID"));
  var SearchUserID = JSON.parse(localStorage.getItem("SearchUserID"));

  var userID = !SearchUserID ? loggedInUser : SearchUserID;

  const loadAllUsersData = () => {
    Service.getSingleUser(JSON.parse(userID)).then(
      (res) => {
        setUsersData(res.data);
      }
    );
  };

  let navigate = useNavigate();

  const generatePdf = () => {
    var doc = new jsPDF('portrait', 'pt', 'a4', 'false');
    // A4 Page size in point width=595 x height=842
    //Important Site for study
    // https://mrrio.github.io/jsPDF/examples/basic.html

    var printHeader = new Image();
    printHeader.src = 'assets/images/print/print-header.png';
    var printFooter = new Image();
    printFooter.src = 'assets/images/print/print-footer.png';



    doc.addImage(printHeader, 'png', 0, 0, 595, 150, 'header');

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
    doc.text("Father Name : ", 50, 660);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].father, 200, 660);

    doc.setFontSize(10);
    doc.text("Contact-No : ", 50, 690);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].father_contact.toString(), 200, 690);

    doc.setFontSize(10);
    doc.text("Expectation : ", 50, 720);
    doc.setFont(undefined, 'bold')
    doc.text(usersData[0].expectation, 200, 720);

    doc.addImage(printFooter, 'png', 0, 740, 595, 220, 'footer')
    doc.save("profile.pdf");
  }

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Profile</h2>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to='/'>Home</Link></li>
              <li>Profile</li>
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
                          <img src="assets/images/profile/profile-user.png" alt="" />
                          <div className="active-online"></div>
                        </div>
                        <h5 className="name">{index.user_name}</h5>
                        <ul className="p-b-meta-one">
                          <li><span>{index.age} Years Old</span></li>
                          <li><span><i className="fas fa-map-marker-alt"></i>{index.city}</span></li>
                        </ul>
                      </div>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="profile-main-content">
                    <ul className="top-menu">
                      <li><NavLink to="/profile" exact activeclassname="active-class">Profile</NavLink></li>
                      {!SearchUserID ?
                        (<li><NavLink to="/update-profile" exact activeclassname="active-class">
                          Add/Update Information</NavLink></li>) : null}
                      <li><NavLink to="/Search" exact activeclassname="active-class">Search</NavLink></li>
                    </ul>
                    <div className="print__section">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="float__start">
                              <div className="info-box">
                                <div className="header">
                                  <h2 className="content-title info-main-title text-center">Family Information/कौटुंबिक माहिती</h2>
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
                                  <h4 className="content-title info-main-title text-center mb-3">Expectation/अपेक्षा वधू/वर</h4>
                                </div>
                                <div className="content">
                                  <ul className="infolist">
                                    <li><span>Expection/अपेक्षा वधू/वर:</span><span>{index.expectation}</span></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 button-wrapper text-center">
                            <button type="submit" className="custom-button w-25 mx-2" onClick={() => navigate("/profile")} >Back</button>
                            <button type="submit" onClick={generatePdf} className="print__button custom-button w-25 mx-2">Save as Pdf </button>
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

export default UserProfileOtherInfo;
