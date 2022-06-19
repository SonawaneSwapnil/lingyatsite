import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Service from "../../service/Service";
import jsPDF from 'jspdf'
import moment from "moment";
import { useNavigate } from "react-router-dom";
import LeftProfileArea from "../common/LeftProfileArea";
import * as pdfFonts from "../pdffonts/pdfFonts";

const UserProfileOtherInfo = () => {
  const [usersData, setUsersData] = useState();
  useEffect(() => {
    loadAllUsersData();
  }, []);

  var loggedInUser = JSON.parse(localStorage.getItem("USERID"));
  var SearchUserID = JSON.parse(localStorage.getItem("SearchUserID"));
  var LOGGEDIN = JSON.parse(localStorage.getItem("LOGGEDIN"));

  var userID = LOGGEDIN && !SearchUserID ? loggedInUser : SearchUserID;

  const loadAllUsersData = () => {
    Service.getSingleUser(JSON.parse(userID)).then(
      (res) => {
        setUsersData(res.data);
      }
    );
  };

  let navigate = useNavigate();

  const generatePdf = () => {
    var doc = new jsPDF('portrait', 'pt', 'a4', true);
    // A4 Page size in point width=595 x height=842
    //Important Site for study
    // https://mrrio.github.io/jsPDF/examples/basic.html

    doc.addFileToVFS('Poppins-Regular-normal.ttf', pdfFonts.poppinsRegular);
    doc.addFont('Poppins-Regular-normal.ttf', 'Poppins-Regular', 'normal');
    doc.addFileToVFS('Poppins-Bold-bold.ttf', pdfFonts.poppinsBold);
    doc.addFont('Poppins-Bold-bold.ttf', 'Poppins-Bold', 'bold');

    var printHeader = new Image();
    printHeader.src = 'assets/images/print/print-header.png';
    var printFooter = new Image();
    printFooter.src = 'assets/images/print/print-footer.png';

    doc.addImage(printHeader, 'png', 0, 0, 595, 120, 'header');

    doc.setFontSize(14);
    doc.setTextColor(158, 0, 53);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text("Personal Detail:", 50, 160);
    doc.line(50, 165, 545, 165);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Name : ", 50, 180);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].user_name.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 180);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Marital status: ", 50, 200);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].married_status.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 200);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("City : ", 50, 220);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].city.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 220);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Date of birth : ", 50, 240);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(moment(`${usersData[0].dob}`).format('DD/MM/YYYY'), 300, 240);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Birth-place : ", 50, 260);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].birth_place.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 260);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Birth-Time : ", 50, 280);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].birth_time, 300, 280);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Educational qualification : ", 50, 300);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].education.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 300);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Service-Business : ", 50, 320);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].bussiness.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 320);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Income : ", 50, 340);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].income.toString(), 300, 340);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Designation : ", 50, 360);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].designation.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 360);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Workplace : ", 50, 380);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].workplace.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 380);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Height : ", 50, 400);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].height.toString(), 300, 400);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Blood-group : ", 50, 420);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].blood_group.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 420);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Color : ", 50, 440);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].color.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 440);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Weight : ", 50, 460);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].weight.toString(), 300, 460);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Address : ", 50, 480);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].address.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 480);

    doc.setFontSize(14);
    doc.setTextColor(158, 0, 53);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text("Family Information:", 50, 520);
    doc.line(50, 525, 545, 525);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Father Name : ", 50, 540);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].father.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 540);

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Contact-No : ", 50, 560);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].father_contact.toString(), 300, 560);

    doc.setFontSize(14);
    doc.setTextColor(158, 0, 53);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text("Expectation:", 50, 600);
    doc.line(50, 605, 545, 605);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Expection : ", 50, 620);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].expectation.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 620);

    // doc.addImage(printFooter, 'png', 0, 780, 595, 62, 'footer')
    doc.save(usersData[0].user_name + "profile.pdf");
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
          usersData.map((index, i) => (
            <div className="container" key={i}>
              <div className="row justify-content-center">

                <LeftProfileArea data={usersData} />

                <div className="col-xl-8 col-lg-7">
                  <div className="profile-main-content">
                    <ul className="top-menu">
                      <li><NavLink to="/profile" activeclassname="active-class">Profile</NavLink></li>
                      {!SearchUserID ?
                        (<li><NavLink to="/update-profile" activeclassname="active-class">
                          Add/Update Information</NavLink></li>) : null}
                      <li><NavLink to="/Search" activeclassname="active-class">Search</NavLink></li>
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
                            <button type="submit" className="custom-button w-100 col-lg-4 mx-2" onClick={() => navigate("/profile")} >Back</button>
                            <button type="submit" onClick={generatePdf} className="print__button custom-button w-100 col-lg-4 mx-2 my-3">Save as PDF </button>
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
