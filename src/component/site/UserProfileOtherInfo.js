import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../../service/Service";
import { useNavigate } from "react-router-dom";
import LeftProfileArea from "../common/LeftProfileArea";
import UserPanelMenu from "../common/UserPanelMenu";

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
                    <UserPanelMenu data={usersData} />
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
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Father Name/वडीलांचे नावं:</div>
                                    <div className="col-6 text-right ititle">{index.father}</div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Contact Number/संपर्क क्रमांक:</div>
                                    <div className="col-6 text-right ititle">{index.father_contact}</div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Mother Name/आईचे नाव:</div>
                                    <div className="col-6 text-right ititle">{index.mother}</div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Contact Number/संपर्क क्रमांक:</div>
                                    <div className="col-6 text-right ititle">{index.mother_contact}</div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Brother Name/भावाचे नाव:</div>
                                    <div className="col-6 text-right ititle">{index.brother}</div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Contact Number/संपर्क क्रमांक:</div>
                                    <div className="col-6 text-right ititle">{index.brother_contact}</div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Sister Name/बहिणीचे नाव</div>
                                    <div className="col-6 text-right ititle">{index.sister}</div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Contact Number/संपर्क क्रमांक:</div>
                                    <div className="col-6 text-right ititle">{index.sister_contact}</div>
                                  </div>

                                  {/* caretaker */}
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Care Taker Name/ काळजी घेणारे नाव</div>
                                    <div className="col-6 text-right ititle">{index.caretaker}</div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Contact Number/संपर्क क्रमांक:</div>
                                    <div className="col-6 text-right ititle">{index.caretaker_contact}</div>
                                  </div>
                                </div>

                              </div>
                              <div className="info-box">
                                <div className="header">
                                  <h4 className="content-title info-main-title text-center mb-3">Expectation/अपेक्षा वधू/वर</h4>
                                </div>
                                <div className="content">
                                  <div className="row mb-2">
                                    <div className="col-6 ititle">Expection/अपेक्षा वधू/वर:</div>
                                    <div className="col-6 text-right ititle">{index.expectation}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 button-wrapper text-center">
                            <button type="submit" className="custom-button w-100 col-lg-4 mx-2" onClick={() => navigate("/profile")} >Back</button>
                            {/* <button type="submit" onClick={generatePdf} className="print__button custom-button w-100 col-lg-4 mx-2 my-3">Save as PDF </button> */}
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
