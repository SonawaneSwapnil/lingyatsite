import React from 'react';
import { NavLink } from 'react-router-dom';
import * as pdfFonts from "../pdffonts/pdfFonts";
import jsPDF from 'jspdf';
import moment from "moment";

function UserPanelMenu(props) {
  var SearchUserID = JSON.parse(localStorage.getItem("SearchUserID"));

  const usersData = props.data;

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
    doc.text(usersData[0].user_name.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 180 || " ");

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

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Contact-No  : ", 50, 500);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].contact.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 500);


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
    // doc.text(usersData[0].father.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 540);

    if (usersData[0].father == "") {
      doc.text(300, 540, "Information not available");
    } else {
      doc.text(usersData[0].father.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 540);
    }

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Contact-No : ", 50, 560);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].father_contact.toString(), 300, 560);

    if (usersData[0] == "") {
      doc.text(300, 560, "Information not available");
    } else {
      doc.text(usersData[0].father_contact.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 560);
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Mother Name : ", 50, 580);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].mother.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 580);

    if (usersData[0].mother == "") {
      doc.text(300, 580, "Information not available");
    } else {
      doc.text(usersData[0].mother.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 580);
    }

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Contact-No : ", 50, 600);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].mother_contact.toString(), 300, 600);

    if (usersData[0].mother_contact == "") {
      doc.text(300, 600, "Information not available");
    } else {
      doc.text(usersData[0].mother_contact.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 600);
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Brother Name : ", 50, 620);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].brother.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 620);

    if (usersData[0].brother == "") {
      doc.text(300, 620, "Information not available");
    } else {
      doc.text(usersData[0].brother.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 620);
    }

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Contact-No : ", 50, 640);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].brother_contact.toString(), 300, 640);

    if (usersData[0].brother_contact == "") {
      doc.text(300, 640, "Information not available");
    } else {
      doc.text(usersData[0].brother_contact.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 640);
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Sister Name : ", 50, 660);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].sister.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 660);

    if (usersData[0].sister == "") {
      doc.text(300, 660, "Information not available");
    } else {
      doc.text(usersData[0].sister.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 660);
    }

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Contact-No : ", 50, 680);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].sister_contact.toString(), 300, 680);

    if (usersData[0].sister_contact == "") {
      doc.text(300, 680, "Information not available");
    } else {
      doc.text(usersData[0].sister_contact.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 680);
    }


    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("CareTaker Name : ", 50, 700);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].caretaker.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 700);

    if (usersData[0].caretaker == "") {
      doc.text(300, 700, "Information not available");
    } else {
      doc.text(usersData[0].caretaker.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 700);
    }

    doc.setFontSize(12);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Contact-No : ", 50, 720);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].caretaker_contact.toString(), 300, 720);

    if (usersData[0].caretaker_contact == "") {
      doc.text(300, 720, "Information not available");
    } else {
      doc.text(usersData[0].caretaker_contact.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 720);
    }

    doc.setFontSize(14);
    doc.setTextColor(158, 0, 53);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text("Expectation:", 50, 740);
    doc.line(50, 745, 545, 745);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Poppins-Regular', 'normal');
    doc.text("Expectation : ", 50, 760);
    doc.setFont('Poppins-Bold', 'bold');
    doc.text(usersData[0].expectation.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 760);

    // doc.addImage(printFooter, 'png', 0, 780, 595, 62, 'footer')
    doc.save(usersData[0].user_name + " Profile.pdf");
  }

  return (
    <ul className="top-menu">
      <li><NavLink to="/profile" activeclassname="active-class">Profile</NavLink></li>
      {!SearchUserID ? (
        <li><NavLink to="/update-profile" activeclassname="active-class" >Add/Update Information</NavLink></li>
      ) : null}
      <li><NavLink to="/search" activeclassname="active-class">Search</NavLink></li>
      <button type="submit" onClick={generatePdf} className="custom-button">Download Profile</button>
    </ul>
  )
}

export default UserPanelMenu