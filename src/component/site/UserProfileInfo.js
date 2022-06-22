import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Service from "../../service/Service";
import LeftProfileArea from "../common/LeftProfileArea";
import UserPanelMenu from "../common/UserPanelMenu";

export default function UserProfileInfo() {
  const [usersData, setUsersData] = useState();

  useEffect(() => {
    loadAllUsersData();
  }, []);

  var isLoggedin = JSON.parse(localStorage.getItem("LOGGEDIN"));
  var USERID = JSON.parse(localStorage.getItem("USERID"));
  var SearchUserID = JSON.parse(localStorage.getItem("SearchUserID"));

  var userID = isLoggedin && !SearchUserID ? USERID : SearchUserID;

  const loadAllUsersData = () => {
    Service.getSingleUser(userID).then((res) => {
      setUsersData(res.data);
    });
  };

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h4 className="title extra-padding">Profile</h4>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="/">Home</Link></li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

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

                    {/* Display User data */}

                    <div className="info-box">
                      <div className="header">
                        <h4 className="content-title info-main-title text-center mb-3">Basic Detail/ माहिती</h4>
                      </div>
                      <div className="content">
                        <div className="row mb-2">
                          <div className="col-6 ititle">Name/नाव:</div>
                          <div className="col-6 text-right ititle">{index.user_name}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">I am a:</div>
                          <div className="col-6 text-right ititle">{index.gender}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Looking for a:</div>
                          <div className="col-6 text-right ititle">{index.looking_for_gender}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle"> Marital status/वैवाहिक स्थिती:</div>
                          <div className="col-6 text-right ititle">{index.married_status}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle"> City/शहर:</div>
                          <div className="col-6 text-right ititle">{index.city}</div>
                        </div>
                      </div>
                    </div>

                    <div className="info-box">
                      <div className="header">
                        <h4 className="content-title info-main-title text-center mb-3">
                          Personal Detail/वैयक्तिक माहिती
                        </h4>
                      </div>
                      <div className="content">
                        <div className="row mb-2">
                          <div className="col-6 ititle">Name/नाव:</div>
                          <div className="col-6 text-right ititle">{index.user_name}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle"> Date Of Birth/जन्मतारीख:</div>
                          <div className="col-6 text-right ititle">{moment(`${index.dob}`).format("DD/MM/YYYY")}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Birth Place/जन्मतारीख ठिकाण:</div>
                          <div className="col-6 text-right ititle">{index.birth_place}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Birth time/जन्म वेळ:</div>
                          <div className="col-6 text-right ititle">{index.birth_time}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle"> Marital status/वैवाहिक स्थिती:</div>
                          <div className="col-6 text-right ititle">{index.married_status}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Educational Qualification/शैक्षणिक पात्रता:</div>
                          <div className="col-6 text-right ititle">{index.education}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Service or Business/सेवा किंवा व्यवसाय:</div>
                          <div className="col-6 text-right ititle">{index.bussiness}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Income/उत्पन्न:</div>
                          <div className="col-6 text-right ititle">{index.income}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Designation/हुद्दा:</div>
                          <div className="col-6 text-right ititle">{index.designation}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle"> Workplace/कामाची जागा:</div>
                          <div className="col-6 text-right ititle">{index.workplace}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Height/उंची:</div>
                          <div className="col-6 text-right ititle">{index.height}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Blood-Group/रक्त गट:</div>
                          <div className="col-6 text-right ititle">{index.blood_group}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Color/रंग:</div>
                          <div className="col-6 text-right ititle">{index.color}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Weight/वजन:</div>
                          <div className="col-6 text-right ititle">{index.weight}</div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-6 ititle">Address/पत्ता:</div>
                          <div className="col-6 text-right ititle">{index.address}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button-wrapper text-center">
                      <Link to="/other-info">
                        <button type="submit" className="custom-button">View More Information</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
      {/* <!-- ========= Profile Section Start -- */}
    </div>
  );
}
