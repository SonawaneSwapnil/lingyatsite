import React, { useEffect, useState } from "react";
import Service from "../../service/Service";
import Loader from "../../service/Loader";
import eye from "./icons/eye.svg";
import key from "./icons/key.svg";
import trash from "./icons/trash-alt.svg";
import downloadsvg from "./icons/download.svg";
import header from "./css/print-header.png";
import * as pdfFonts from "../pdffonts/pdfFonts";
import moment from "moment";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

function IncompleteProfile() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setprofileData] = useState();
  const [usersData, setUsersData] = useState();
  const [groomCount, setgroomCount] = useState(0);
  const [brideCount, setbrideCount] = useState(0);

  var printHeader = new Image();
  printHeader.src = header;
  useEffect(() => {
    loadAllUsersData();
  }, []);

  const loadAllUsersData = () => {
    setIsLoading(true);
    Service.getAllInCompletedUsers()
      .then((res) => {
        setprofileData(res.data);
        setUsersData(res.data);
        const groom = res.data.filter((item) => item.gender === "male");
        setgroomCount(groom.length);
        const bride = res.data.filter((item) => item.gender === "female");
        setbrideCount(bride.length);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const deletRec = (item) => {
    if (window.confirm("Are you sure you want to delete this record")) {
      setIsLoading(true);
      Service.deleteUser(item.user_id)
        .then((res) => {
          setIsLoading(false);
          alert(res.data.success);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  const handleSearch = (event) => {
    const text = event.target.value;
    if (text) {
      const filtered = usersData.filter((item) => {
        var search = new RegExp(text, "i");
        return (
          search.test(item.user_name) ||
          search.test(item.gender) ||
          search.test(item.contact) ||
          search.test(item.address) ||
          search.test(item.education)
        );
      });
      setUsersData(filtered);
    } else {
      setUsersData(profileData);
    }
  };

  const resetPass = (item) => {
    navigate("/admin/admin-reset-pass", {
      state: { UID: item.user_id, Name: item.user_name },
    });
  };

  const download = (item) => {
    setIsLoading(true);
    var usersData = [item];
    console.log(item);
    var doc = new jsPDF("portrait", "pt", "a4", true);
    // A4 Page size in point width=595 x height=842
    //Important Site for study
    // https://mrrio.github.io/jsPDF/examples/basic.html

    doc.addFileToVFS("Poppins-Regular-normal.ttf", pdfFonts.poppinsRegular);
    doc.addFont("Poppins-Regular-normal.ttf", "Poppins-Regular", "normal");
    doc.addFileToVFS("Poppins-Bold-bold.ttf", pdfFonts.poppinsBold);
    doc.addFont("Poppins-Bold-bold.ttf", "Poppins-Bold", "bold");

    // var printHeader = new Image();
    // printHeader.src = './css/print-header.png';
    // var printFooter = new Image();
    // printFooter.src = 'assets/images/print/print-footer.png';
    // var profileImage = new Image();
    // profileImage.src = 'assets/images/print/print-footer.png';

    doc.addImage(printHeader, "png", 0, 0, 595, 120, "header");

    doc.setFontSize(14);
    doc.setTextColor(158, 0, 53);
    doc.setFont("Poppins-Bold", "bold");
    doc.text("Personal Detail:", 50, 160);
    doc.line(50, 165, 545, 165);

    // doc.addImage(baseImgData, 200, 200, 100, 100);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Name : ", 50, 180);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].user_name.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      180 || " "
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Marital status: ", 50, 200);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].married_status.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      200
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("City : ", 50, 220);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].city.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      220
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Date of birth : ", 50, 240);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(moment(`${usersData[0].dob}`).format("DD/MM/YYYY"), 300, 240);

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Birth-place : ", 50, 260);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].birth_place.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      260
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Birth-Time : ", 50, 280);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].birth_time, 300, 280);

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Educational qualification : ", 50, 300);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].education.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      300
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Service-Business : ", 50, 320);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].bussiness.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      320
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Income : ", 50, 340);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].income.toString(), 300, 340);

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Designation : ", 50, 360);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].designation.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      360
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Workplace : ", 50, 380);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].workplace.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      380
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Height : ", 50, 400);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].height.toString(), 300, 400);

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Blood-group : ", 50, 420);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].blood_group.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      420
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Color : ", 50, 440);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].color.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      440
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Weight : ", 50, 460);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].weight.toString(), 300, 460);

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Address : ", 50, 480);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].address.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      480
    );

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Contact-No  : ", 50, 500);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].contact.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      500
    );

    doc.setFontSize(14);
    doc.setTextColor(158, 0, 53);
    doc.setFont("Poppins-Bold", "bold");
    doc.text("Family Information:", 50, 520);
    doc.line(50, 525, 545, 525);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Father Name : ", 50, 540);
    doc.setFont("Poppins-Bold", "bold");
    // doc.text(usersData[0].father.replace(/\b(\w)/g, s => s.toUpperCase()), 300, 540);

    if (usersData[0].father === "") {
      doc.text(300, 540, "Information not available");
    } else {
      doc.text(
        usersData[0].father.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        540
      );
    }

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Contact-No : ", 50, 560);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].father_contact.toString(), 300, 560);

    if (usersData[0] === "") {
      doc.text(300, 560, "Information not available");
    } else {
      doc.text(
        usersData[0].father_contact.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        560
      );
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Mother Name : ", 50, 580);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].mother.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      580
    );

    if (usersData[0].mother === "") {
      doc.text(300, 580, "Information not available");
    } else {
      doc.text(
        usersData[0].mother.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        580
      );
    }

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Contact-No : ", 50, 600);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].mother_contact.toString(), 300, 600);

    if (usersData[0].mother_contact === "") {
      doc.text(300, 600, "Information not available");
    } else {
      doc.text(
        usersData[0].mother_contact.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        600
      );
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Brother Name : ", 50, 620);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].brother.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      620
    );

    if (usersData[0].brother === "") {
      doc.text(300, 620, "Information not available");
    } else {
      doc.text(
        usersData[0].brother.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        620
      );
    }

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Contact-No : ", 50, 640);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].brother_contact.toString(), 300, 640);

    if (usersData[0].brother_contact === "") {
      doc.text(300, 640, "Information not available");
    } else {
      doc.text(
        usersData[0].brother_contact.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        640
      );
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Sister Name : ", 50, 660);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].sister.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      660
    );

    if (usersData[0].sister === "") {
      doc.text(300, 660, "Information not available");
    } else {
      doc.text(
        usersData[0].sister.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        660
      );
    }

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Contact-No : ", 50, 680);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].sister_contact.toString(), 300, 680);

    if (usersData[0].sister_contact === "") {
      doc.text(300, 680, "Information not available");
    } else {
      doc.text(
        usersData[0].sister_contact.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        680
      );
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("CareTaker Name : ", 50, 700);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].caretaker.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      700
    );

    if (usersData[0].caretaker === "") {
      doc.text(300, 700, "Information not available");
    } else {
      doc.text(
        usersData[0].caretaker.replace(/\b(\w)/g, (s) => s.toUpperCase()),
        300,
        700
      );
    }

    doc.setFontSize(12);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Contact-No : ", 50, 720);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(usersData[0].caretaker_contact.toString(), 300, 720);

    if (usersData[0].caretaker_contact === "") {
      doc.text(300, 720, "Information not available");
    } else {
      doc.text(
        usersData[0].caretaker_contact.replace(/\b(\w)/g, (s) =>
          s.toUpperCase()
        ),
        300,
        720
      );
    }

    doc.setFontSize(14);
    doc.setTextColor(158, 0, 53);
    doc.setFont("Poppins-Bold", "bold");
    doc.text("Expectation:", 50, 740);
    doc.line(50, 745, 545, 745);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("Poppins-Regular", "normal");
    doc.text("Expectation : ", 50, 760);
    doc.setFont("Poppins-Bold", "bold");
    doc.text(
      usersData[0].expectation.replace(/\b(\w)/g, (s) => s.toUpperCase()),
      300,
      760
    );

    // doc.addImage(printFooter, 'png', 0, 780, 595, 62, 'footer')
    doc.save(usersData[0].user_name + " Profile.pdf");
    setIsLoading(false);
  };

  return (
    <div className="container-fluid my-3">
      {isLoading && <Loader />}
      <div className="row newrow">
        <div className="col-md-12">
          <h4>Incomplete Profiles</h4>
          <hr />
        </div>
        {profileData && (
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <h5 className="text-primary">
                  Total Profiles: {profileData.length}
                </h5>
              </div>
              <div className="col-md-4">
                <h5 className="text-primary">Total Groom: {groomCount}</h5>
              </div>
              <div className="col-md-4">
                <h5 className="text-primary">Total Bride: {brideCount}</h5>
              </div>
            </div>

            <hr />
          </div>
        )}
        <div className="col-md-12">
          <div className="form-group">
            <input
              placeholder="Search..."
              className="form-control"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="tblresponsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th width="100px" scope="col">
                    Action
                  </th>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Education</th>
                </tr>
              </thead>
              <tbody>
                {usersData &&
                  usersData.map((item, i) => (
                    <tr>
                      <td width="100px">
                        <img
                          onClick={() => resetPass(item)}
                          src={key}
                          width="16px"
                          className="mr-2"
                        />
                        <img
                          onClick={() => download(item)}
                          src={downloadsvg}
                          width="21px"
                          className="mr-2"
                        />
                        <img
                          onClick={() => deletRec(item)}
                          src={trash}
                          width="16px"
                        />
                      </td>
                      <th scope="row">{i + 1}</th>
                      <td>{item.user_name}</td>
                      <td>{item.contact}</td>
                      <td>{item.address}</td>
                      <td>{item.gender}</td>
                      <td>{item.education}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncompleteProfile;
