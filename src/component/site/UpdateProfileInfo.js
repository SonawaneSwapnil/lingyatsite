import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
import * as moment from "moment";
import { useNavigate } from "react-router-dom";
import LeftProfileArea from "../common/LeftProfileArea";

export default function UpdateProfileInfo() {
  const [userUpdateData, setuserUpdateData] = useState();
  const [showhide, setshowhide] = useState("");
  const [oldDate, setOldDate] = useState(
    moment().subtract(18, "years").format("YYYY-MM-DD")
  );

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const branchName = [
    "Lingayat-Wani/लिंगायत-वाणी",
    "Dixiwant/दीक्षिवंत",
    "Pancham/पंचम",
    "Shilvant(Chilwant)/शिलवंत (चिलवंत)",
    "Jangam(swami)/जंगम (स्वामी)",
    "Chaturth/चतुर्थ",
    "Other/इतर",
  ];
  const zodiacName = [
    "Aries/मेष",
    "Taurus/वृषभ",
    "Gemini/मिथुन",
    "Cancer/कर्क",
    "Leo/सिंह",
    "Virgo/कन्या",
    "Libra/तुला",
    "Scorpius/वृश्चिक",
    "Sagittarius/धनु",
    "Capricornus/मकर",
    "Aquarius/कुंभ",
    "Pisces/मीन",
  ];

  let navigate = useNavigate();

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setshowhide(getuser);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    loadAllData();
  }, []);

  var userID = JSON.parse(localStorage.getItem("USERID"));

  const loadAllData = () => {
    Service.getSingleUser(userID).then((res) => {
      setuserUpdateData(res.data);
      reset({
        ...res.data[0],
        dob: moment(res.data[0].dob).format("YYYY-MM-DD"),
      });
    });
  };

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const updateRecord = (fdata) => {
    var data = fdata;
    data.age = getAge(moment(data.dob).format("YYYY-MM-DD"));
    data.user_id = userID;
    data.dob = moment(data.dob).format("YYYY-MM-DD");
    Service.updateUsers(data)
      .then((res) => {
        loadAllData();
        navigate("/update-family");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h4 className="title extra-padding">
              Add/Update Personal Information
            </h4>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Add/Update Personal Information</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        {userUpdateData &&
          userUpdateData.map((index, i) => (
            <div className="container" key={i}>
              <div className="row justify-content-center">
                <LeftProfileArea data={userUpdateData} />

                <div className="col-xl-8 col-lg-7">
                  <div className="profile-main-content">
                    <ul className="top-menu">
                      <li>
                        <NavLink to="/profile" activeclassname="active-class">
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/update-profile"
                          activeclassname="active-class"
                        >
                          Add/Update Information
                        </NavLink>
                      </li>
                      {/* <li><NavLink to="/single_profile3"  activeclassname="active-class">Members</NavLink></li> */}
                      <li>
                        <NavLink to="/Search" activeclassname="active-class">
                          Search
                        </NavLink>
                      </li>
                    </ul>

                    <div className="mt-4">
                      <form onSubmit={handleSubmit(updateRecord)}>
                        <h4 className="content-title text-center info-main-title">
                          Personal Detail/वैयक्तिक माहिती
                        </h4>
                        <div className="form-group">
                          <label
                            htmlFor="exampleInputname"
                            className="form-label ititle"
                          >
                            Name/नाव*
                          </label>
                          <input
                            {...register("user_name", {
                              required: "Enter Your FullName/पूर्ण नाव",
                            })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputname"
                          />
                          {errors.user_name && (
                            <span style={{ color: "red" }}>
                              {errors.user_name.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="exampleInputdate"
                            className="form-label ititle"
                          >
                            Date Of Birth/जन्मतारीख:
                          </label>
                          <input
                            {...register("dob", {
                              required: "Enter Your Date Of Birth/जन्मतारीख",
                            })}
                            type="date"
                            className="my-form-control"
                            id="exampleInputdate"
                            max={oldDate}
                          />
                          {errors.dob && (
                            <span style={{ color: "red" }}>
                              {errors.dob.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="exampleInputdateplace"
                            className="form-label ititle"
                          >
                            Birth Place/जन्म ठिकाण
                          </label>
                          <input
                            {...register("birth_place", {
                              required: "Enter Your Birth Place/जन्म ठिकाण",
                            })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputplace"
                          />
                          {errors.birth_place && (
                            <span style={{ color: "red" }}>
                              {errors.birth_place.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="form-group">
                          <label htmlFor="appt" className="form-label ititle">
                            Birth time/जन्म वेळ
                          </label>
                          <input
                            {...register("birth_time", {
                              required: "Enter Your  Birth time/जन्म वेळ",
                            })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputtime"
                          />
                          {errors.birth_time && (
                            <span style={{ color: "red" }}>
                              {errors.birth_time.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="form-group">
                          <label htmlFor="branch" className="ititle">
                            Branch/शाखा
                          </label>
                          <select
                            id="branch"
                            name="branch"
                            {...register("branch", {
                              required: "Enter Your branch Name/शाखा:",
                            })}
                            onChange={(e) => handleshowhide(e)}
                          >
                            <option className="dropdown-item" value="">
                              --Select Branch--
                            </option>
                            {branchName &&
                              branchName.map((brc, i) => (
                                <option className="dropdown-item" value={brc}>
                                  {brc}
                                </option>
                              ))}
                          </select>
                          {showhide === "Other/इतर" && (
                            <div className="form-group">
                              <label htmlFor="branch" className="ititle">
                                Branch/शाखा
                              </label>
                              <input
                                type="text"
                                className="my-form-control"
                                name="branch"
                                id="branch"
                              />
                            </div>
                          )}
                          {errors.branch && (
                            <span style={{ color: "red" }}>
                              {errors.branch.message}
                            </span>
                          )}
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="exampleInputdatetime"
                            className="form-label ititle me-5"
                          >
                            Zodiac Name/राशि नाव:
                          </label>
                          <select
                            id="zodiac"
                            name="zodiac"
                            {...register("zodiac", {
                              required: "Enter Your Zodiac Name/राशि नाव:",
                            })}
                          >
                            <option className="dropdown-item" value="">
                              --Select Zodiac Name--
                            </option>
                            {zodiacName &&
                              zodiacName.map((zod, i) => (
                                <option className="dropdown-item" value={zod}>
                                  {zod}
                                </option>
                              ))}
                          </select>
                          {errors.zodiac && (
                            <span style={{ color: "red" }}>
                              {errors.zodiac.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="exampleInputedu"
                            className="form-label ititle"
                          >
                            Educational Qualification/शैक्षणिक पात्रता
                          </label>
                          <input
                            {...register("education", {
                              required:
                                "Enter Your Educational Qualification/शैक्षणिक पात्रता",
                            })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputedu"
                          />
                          {errors.education && (
                            <span style={{ color: "red" }}>
                              {errors.education.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="exampleInputser"
                            className="form-label ititle"
                          >
                            Service or Business/सेवा किंवा व्यवसाय
                          </label>
                          <input
                            {...register("bussiness", {
                              required:
                                "Enter Your Service or Business/सेवा किंवा व्यवसाय",
                            })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputser"
                          />
                          {errors.bussiness && (
                            <span style={{ color: "red" }}>
                              {errors.bussiness.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <label
                              htmlFor="inputincome"
                              className="col-form-label ititle"
                            >
                              Income/उत्पन्न(Annual/वार्षिक)
                            </label>
                            <div className="input-group">
                              <input
                                {...register("income", {
                                  required: "Enter Your  Income/उत्पन्न",
                                })}
                                type="number"
                                className="my-form-control"
                                id="exampleInputincome"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <label
                              htmlFor="inputdesignation"
                              className="col-form-label ititle"
                            >
                              Designation/हुद्दा{" "}
                            </label>
                            <div className="input-group">
                              <input
                                {...register("designation", {
                                  required: "Enter Your Designation/हुद्दा",
                                })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputdesig"
                              />
                            </div>
                            <br />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-5 ml-2 mr-5">
                            {errors.income && (
                              <span style={{ color: "red" }}>
                                {errors.income.message}
                              </span>
                            )}
                          </div>
                          <div className="col-sm-5 ml-4">
                            {errors.designation && (
                              <div style={{ color: "red" }}>
                                {errors.designation.message}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <label
                              htmlFor="inputincome"
                              className="col-form-label ititle"
                            >
                              Workplace/कामाची जागा
                            </label>
                            <div className="input-group">
                              <input
                                {...register("workplace", {
                                  required: "Enter Your Workplace/कामाची जागा",
                                })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputdate"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <label
                              htmlFor="inputdesignation"
                              className="col-form-label ititle"
                            >
                              Height/उंची(In Feet/फुट मध्ये)
                            </label>
                            <div className="input-group">
                              <input
                                {...register("height", {
                                  required: "Enter Your Height/उंची",
                                  pattern: {
                                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                    message: "Enter valid height.",
                                  },
                                })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputdate"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-5 ml-2 mr-5">
                            {errors.workplace && (
                              <span style={{ color: "red" }}>
                                {errors.workplace.message}
                              </span>
                            )}
                          </div>
                          <div className="col-sm-5 ml-4">
                            {errors.height && (
                              <div style={{ color: "red" }}>
                                {errors.height.message}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            {/* <label htmlFor="inputincome" className="col-form-label ititle">Blood-Group/रक्त गट</label>
                            <div className="input-group">
                              <input
                                {...register("blood_group", { required: "Enter Your Blood-Group/रक्त गट" })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputblood" />
                            </div> */}

                            <label htmlFor="blood_group" className="ititle">
                              Blood-Group/रक्त गट
                            </label>
                            <select
                              id="blood_group"
                              name="blood_group"
                              {...register("blood_group", {
                                required: "Select blood group/रक्त गट",
                              })}
                            >
                              <option className="dropdown-item" value="">
                                --Select Blood Group--
                              </option>
                              {bloodGroups &&
                                bloodGroups.map((grp, i) => (
                                  <option className="dropdown-item" value={grp}>
                                    {grp}
                                  </option>
                                ))}
                            </select>
                            {errors.branch && (
                              <span style={{ color: "red" }}>
                                {errors.blood_group.message}
                              </span>
                            )}
                          </div>

                          <div className="col-lg-6">
                            <label
                              htmlFor="inputdesignation"
                              className="col-form-label ititle"
                            >
                              Color/रंग
                            </label>
                            <div className="input-group">
                              <input
                                {...register("color", {
                                  required: "Enter Your Color/रंग",
                                })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputcolor"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-5 ml-2 mr-5">
                            {errors.blood_group && (
                              <span style={{ color: "red" }}>
                                {errors.blood_group.message}
                              </span>
                            )}
                          </div>
                          <div className="col-sm-5 ml-4">
                            {errors.color && (
                              <div style={{ color: "red" }}>
                                {errors.color.message}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <label
                              htmlFor="inputincome"
                              className="col-form-label ititle"
                            >
                              Weight/वजन(In KG/किलोग्राम मध्ये)
                            </label>
                            <div className="input-group">
                              <input
                                {...register("weight", {
                                  required: "Enter Your Weight/वजन",
                                })}
                                type="number"
                                className="my-form-control"
                                id="exampleInputdate"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <label
                              htmlFor="inputdesignation"
                              className="col-form-label ititle"
                            >
                              Address/पत्ता
                            </label>
                            <div className="input-group">
                              <input
                                {...register("address", {
                                  required: "Enter Your Address/पत्ता",
                                })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputdate"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-5 ml-2 mr-5">
                            {errors.weight && (
                              <span style={{ color: "red" }}>
                                {errors.weight.message}
                              </span>
                            )}
                          </div>
                          <div className="col-sm-5 ml-4">
                            {errors.address && (
                              <div style={{ color: "red" }}>
                                {errors.address.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="row mt-5 text-center">
                          <Link to="/profile" className="col-lg-6 col-md-6">
                            <button className="custom-button w-100">
                              Back
                            </button>
                          </Link>
                          <div className="col-lg-6 col-md-6 btn-mt">
                            <button
                              type="submit"
                              className="custom-button w-100"
                            >
                              Save and Continue
                            </button>
                          </div>
                        </div>
                      </form>
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
