import React, { useState, useEffect } from "react";
import jsPDF from 'jspdf';
import Service from "../../service/Service";
import moment from "moment";

export default function Pdf() {
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
    doc.text(usersData[0].dob, 200, 270);

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

    doc.addImage(logof, 'jpg', 0, 740, 595, 200, 'footer')
    doc.save("profile.pdf");
  }

  return (
    <div>
      <div>
        {/* <!-- ==========Breadcrumb-Section========== --> */}
        <section class="breadcrumb-area profile-bc-area">
          <div class="container">
            <div class="content">
              <h2 class="title extra-padding">
                Single Profile
              </h2>
              <ul class="breadcrumb-list extra-padding">
                <li>
                  <a href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  Single Profile
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="profile-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="info-box card">
                <div className="header " >
                  <div className="content ml-3">
                    <div className="profile-img d-flex justify-content-end">
                      <img src="assets/images/profile/profile-user.png" alt="" />
                    </div>

                    {usersData &&
                      usersData.map((index) => (
                        <dl className="row ml-4 ">

                          <dt className="col-sm-3 ">Name/नाव:</dt>
                          <dd className="col-sm-9">{index.user_name}</dd>

                          <dt className="col-sm-3 ">Marital status/वैवाहिक स्थिती:</dt>
                          <dd className="col-sm-9">{index.married_status}</dd>

                          <dt className="col-sm-3">City/शहर:</dt>
                          <dd className="col-sm-9">{index.city}</dd>

                          <dt className="col-sm-3">Date Of Birth/जन्मतारीख:</dt>
                          <dd className="col-sm-9">{moment(`${index.dob}`).format("YYYY/MM/DD")}</dd>

                          <dt className="col-sm-3">Birth Place/जन्मतारीख ठिकाण:</dt>
                          <dd className="col-sm-9">{index.birth_place}</dd>

                          <dt className="col-sm-3">Birth time/जन्म वेळ:</dt>
                          <dd className="col-sm-9">{index.birth_time}</dd>

                          <dt className="col-sm-3">Marital status/वैवाहिक स्थिती:</dt>
                          <dd className="col-sm-9">{index.married_status}</dd>

                          <dt className="col-sm-3">Educational Qualification/शैक्षणिक पात्रता:</dt>
                          <dd className="col-sm-9">{index.education}</dd>

                          <dt className="col-sm-3">Service or Business/सेवा किंवा व्यवसाय:</dt>
                          <dd className="col-sm-9">{index.bussiness}</dd>

                          <dt className="col-sm-3">Income/उत्पन्न:</dt>
                          <dd className="col-sm-9">{index.income}</dd>

                          <dt className="col-sm-3">Designation/हुद्दा:</dt>
                          <dd className="col-sm-9">{index.designation}</dd>

                          <dt className="col-sm-3">Workplace/कामाची जागा:</dt>
                          <dd className="col-sm-9">{index.designation}</dd>

                          <dt className="col-sm-3">Height/उंची:</dt>
                          <dd className="col-sm-9">{index.height}</dd>

                          <dt className="col-sm-3">Blood-Group/रक्त गट:</dt>
                          <dd className="col-sm-9">{index.blood_group}</dd>

                          <dt className="col-sm-3">Color/रंग:</dt>
                          <dd className="col-sm-9">{index.color}</dd>

                          <dt className="col-sm-3">Weight/वजन:</dt>
                          <dd className="col-sm-9">{index.weight}</dd>

                          <dt className="col-sm-3">Address/पत्ता:</dt>
                          <dd className="col-sm-9">{index.address}</dd>

                          <dt className="col-sm-3">Father Name/वडीलांचे नावं:</dt>
                          <dd className="col-sm-9">{index.father}</dd>

                          <dt className="col-sm-3">Contact Number/संपर्क क्रमांक:</dt>
                          <dd className="col-sm-9">{index.father_contact}</dd>

                          <dt className="col-sm-3">Expection/अपेक्षा वधू/वर:</dt>
                          <dd className="col-sm-9">{index.expectation}</dd>
                        </dl>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button type="button" onClick={generatePdf} className="print__button custom-button mr-5" >Print Pdf</button>
      </div>
    </div>
  );
}
