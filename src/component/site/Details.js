import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
import Moment from "react-moment";
import { MomentInput } from "moment";
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// timepicker
import TimePicker from "react-time-picker";
export default function Details() {
  const [userUpdateData, setuserUpdateData] = useState();
  const [showhide, setshowhide] = useState("");
  const handleshowhide = (event) => {
    const getuser = event.target.value;
    // console.log(getuser);
    setshowhide(getuser);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = () => {
    Service.getSingleUser(JSON.parse(localStorage.getItem("USERID"))).then(
      (res) => {
        setuserUpdateData(res.data);
        console.log(res.data);
      }
    );
  };

  const saveData = (data) => {
    console.log(data);
    Service.saveAllUsers(data).then((res) => {
      console.log(res.data);
      alert("Data Saved successfully");
      reset();
      loadAllData();
  });
    
  };
  // Update
  const [user_id, setuser_id] = useState();
  const updateRecord = () => {
    var data1 = {
      user_id: user_id,
      birth_place: getValues("birth_place"),
      birth_time: getValues("birth_time"),
      branch: getValues("branch"),
      zodiac: getValues("zodiac"),
      education: getValues("education"),
      bussiness: getValues("bussiness"),
      income: getValues("income"),
      designation: getValues("designation"),
      workplace: getValues("workplace"),
      height: getValues("height"),
      blood_group: getValues("blood_group"),
      color: getValues("color"),
      weight: getValues("weight"),
      address: getValues("address"),
    };

    Service.updateUsers(data1)
      .then((res) => {
        alert("record Updated successsfully");
        loadAllData();
        Navigate("/expectation");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // datepicker
  const [startDate, setStartDate] = useState(new Date());
  // timepicker
  const [value, onChange] = useState("10:00");

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Add More Information</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="">Home</Link>
              </li>

              <li>Add More Information</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
      {userUpdateData &&
                  userUpdateData.map((index) => (
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
                        <span>21 Years Old

                       { moment(`${index.dob}`).format('YYYY MM DD')}
                       <br/>
                       { moment(`${index.dob}`).format('h:mm a')}
                        </span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className="fas fa-map-marker-alt"></i>{index.city}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="profile-meta-box"></div>
                <div className="profile-uplodate-photo">
                  <h4 className="p-u-p-header">
                    <i className="fas fa-camera"></i> 4 Upload Photos
                  </h4>
                  <div className="p-u-p-list">
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up1.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up1.jpg"
                            className="light-box mfp-iframe"
                          >
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
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up3.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up3.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up4.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up4.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up5.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up5.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
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
                  <li>
                    <NavLink
                      to="/single_profile2"
                      exact
                      activeclassname="active-class"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/details"
                      exact
                      activeclassname="active-class"

                      // }
                    >
                      Add More Information
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/single_profile3"
                      exact
                      activeclassname="active-class"
                    >
                      Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Search" exact activeclassname="active-class">
                      search
                    </NavLink>
                  </li>
                </ul>
               
                    <div className="mt-4">
                      <form onSubmit={handleSubmit(saveData)}>
                        <h4 className="content-title text-center">
                          Personal Detail/वैयक्तिक माहिती
                        </h4>

                        <div className="form-group">
                          <label
                            htmlFor="exampleInputname"
                            className="form-label"
                          >
                            Name/नाव*
                          </label>
                          <input
                            {...register("user_name", {
                              required: "Enter Your FullName/पूर्ण नाव",
                            })}
                            type="text"
                            placeholder="Enter Your FullName/पूर्ण नाव"
                            className="my-form-control"
                            id="exampleInputname"
                            value={index.user_name}
                          />
                          {""}
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
                            className="form-label text-center"
                          >
                            Date Of Birth/जन्मतारीख
                          </label>
                          <input
                            {...register("dob", {
                              required: "Enter Your Date Of Birth/जन्मतारीख",
                            })}
                            value={ moment(`${index.dob}`).format('YYYY-MM-DD')}
                            type="text"
                            className="my-form-control"
                            id="exampleInputdate"
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
                            className="form-label text-center"
                          >
                            Birth Place/जन्मतारीख ठिकाण
                          </label>
                          <input
                            {...register("birth_place", {
                              required:
                                "Enter Your Birth Place/जन्मतारीख ठिकाण",
                            })}
                            type="text"
                            placeholder="Enter Your Birth Place/जन्मतारीख ठिकाण"
                            className="my-form-control"
                            id="exampleInputplace"
                          />
                          {""}
                          {errors.birth_place && (
                            <span style={{ color: "red" }}>
                              {errors.birth_place.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="appt"
                            className="form-label text-center"
                          >
                            Birth time/जन्म वेळ
                          </label>
                         
                       
                          <input
                        {...register("birth_time", {
                          required: "Enter Your  Birth time/जन्म वेळ",
                        })}
                       onClick= { moment('').format('h:mm')}
                        type="text"
                        className="my-form-control"
                        id="exampleInputtime"
                    
                      />
                          {""}
                          {errors.birth_time && (
                            <span style={{ color: "red" }}>
                              {errors.birth_time.message}
                            </span>
                          )}
                          <br />
                        </div>

                        <div className="form-group">
                          <div classname="dropdown-menu">
                            <label htmlFor="branch" className="me-5">
                              {" "}
                              Branch/शाखा
                            </label>
                            <select
                              id="branch"
                              name="branch"
                              onChange={(e) => handleshowhide(e)}
                            >
                              <option className="dropdown-item" value="">
                                -------Select Branch-----
                              </option>
                              <option className="dropdown-item" value="1">
                                Lingayat-Wani/लिंगायत-वाणी
                              </option>
                              <option className="dropdown-item" value="2">
                                Dixiwant/दीक्षिवंत
                              </option>
                              <option className="dropdown-item" value="3">
                                Pancham/पंचम
                              </option>
                              <option className="dropdown-item" value="4">
                                Shilvant(Chilwant)/शिलवंत (चिलवंत)
                              </option>
                              <option className="dropdown-item" value="5">
                                Jangam(swami)/जंगम (स्वामी)
                              </option>
                              <option className="dropdown-item" value="6">
                                Chaturth/चतुर्थ
                              </option>
                              <option className="dropdown-item" value="7">
                                Other/इतर
                              </option>
                            </select>
                            {showhide === "7" && (
                              <div className="form-group">
                                <label>Branch</label>
                                <input
                                  type="text"
                                  className="form-control"
                                ></input>
                              </div>
                            )}
                          </div>{" "}
                          {errors.branch && (
                            <span style={{ color: "red" }}>
                              {errors.branch.message}
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="exampleInputdatetime"
                            className="form-label text-center me-5"
                          >
                            Zodiac Name/राशि नाव:
                          </label>
                          <input
                            {...register("zodiac", {
                              required: "Enter Your Zodiac Name/राशि नाव:",
                            })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputtime"
                            placeholder="Enter Your Zodiac Name/राशि नाव:"
                          />
                          {""}
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
                            className="form-label text-center"
                          >
                            Educational Qualification/शैक्षणिक पात्रता
                          </label>
                          <input
                            {...register("education", {
                              required:
                                "Enter Your Educational Qualification/शैक्षणिक पात्रता",
                            })}
                            type="text"
                            placeholder="Enter Your Educational Qualification/शैक्षणिक पात्रता"
                            className="my-form-control"
                            id="exampleInputedu"
                          />
                          {""}
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
                            className="form-label text-center"
                          >
                            Service or Business/सेवा किंवा व्यवसाय
                          </label>
                          <input
                            {...register("bussiness", {
                              required:
                                "Enter Your Service or Business/सेवा किंवा व्यवसाय",
                            })}
                            type="text"
                            placeholder="Enter Your Service or Business/सेवा किंवा व्यवसाय"
                            className="my-form-control"
                            id="exampleInputser"
                          />
                          {""}
                          {errors.bussiness && (
                            <span style={{ color: "red" }}>
                              {errors.bussiness.message}
                            </span>
                          )}
                          <br />
                        </div>
                        <div className="row">
                          <label
                            htmlFor="inputincome"
                            className="col-sm-6 col-form-label text-center"
                          >
                            {" "}
                            Income/उत्पन्न
                          </label>
                          <label
                            htmlFor="inputdesignation"
                            className="col-sm-6 col-form-label text-center"
                          >
                            Designation/हुद्दा
                          </label>
                        </div>
                        <div className="row input-group ">
                          <input
                            {...register("income", {
                              required: "Enter Your  Income/उत्पन्न",
                            })}
                            type="number"
                            className="my-form-control col-sm-5  ml-2 mr-5"
                            placeholder="Enter Your  Income/उत्पन्न"
                            id="exampleInputincome"
                          />

                          <input
                            {...register("designation", {
                              required: "Enter Your Designation/हुद्दा",
                            })}
                            type="text"
                            className="my-form-control col-sm-5 ml-4 "
                            placeholder="Enter Your Designation/हुद्दा"
                            id="exampleInputdesig"
                          />

                          <br />
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
                          <label
                            htmlFor="inputincome"
                            className="col-sm-6 col-form-label text-center"
                          >
                            {" "}
                            Workplace/कामाची जागा
                          </label>
                          <label
                            htmlFor="inputdesignation"
                            className="col-sm-6 col-form-label text-center"
                          >
                            Height/उंची
                          </label>
                        </div>
                        <div className="row input-group ">
                          <input
                            {...register("workplace", {
                              required: "Enter Your  Workplace/कामाची जागा",
                            })}
                            type="text"
                            className="my-form-control col-sm-5  ml-2 mr-5"
                            id="exampleInputdate"
                            placeholder="Enter Your  Workplace/कामाची जागा"
                          />
                          <input
                            {...register("height", {
                              required: "Enter Your Height/उंची",
                            })}
                            type="number"
                            className="my-form-control col-sm-5 ml-4"
                            id="exampleInputdate"
                            placeholder="Enter Your Height/उंची"
                          />
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
                          <label
                            htmlFor="inputincome"
                            className="col-sm-6 col-form-label text-center"
                          >
                            Blood-Group/रक्त गट
                          </label>
                          <label
                            htmlFor="inputdesignation"
                            className="col-sm-6 col-form-label text-center "
                          >
                            Color/रंग
                          </label>
                        </div>
                        <div className="row input-group ">
                          <input
                            {...register("blood_group", {
                              required: "Enter Your Blood-Group/रक्त गट",
                            })}
                            type="text"
                            className="my-form-control col-sm-5  ml-2 mr-5"
                            id="exampleInputblood"
                            placeholder="Enter Your Blood-Group/रक्त गट"
                          />
                          <input
                            {...register("color", {
                              required: "Enter Your Color/रंग",
                            })}
                            type="text"
                            className="my-form-control col-sm-5 ml-4"
                            id="exampleInputcolor"
                            placeholder="Enter Your Color/रंग"
                          />
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
                          <label
                            htmlFor="inputincome"
                            className="col-sm-6 col-form-label text-center"
                          >
                            {" "}
                            Weight/वजन
                          </label>
                          <label
                            htmlFor="inputdesignation"
                            className="col-sm-6 col-form-label text-center"
                          >
                            Address/पत्ता
                          </label>
                        </div>
                        <div className="row input-group ">
                          <input
                            {...register("weight", {
                              required: "Enter Your Weight/वजन",
                            })}
                            type="number"
                            className="my-form-control col-sm-5  ml-2 mr-5"
                            id="exampleInputdate"
                            placeholder="Enter Your Weight/वजन "
                          />
                          <input
                            {...register("address", {
                              required: "Enter Your Address/पत्ता",
                            })}
                            type="text"
                            className="my-form-control col-sm-5 ml-4"
                            id="exampleInputdate"
                            placeholder="Enter Your Address/पत्ता"
                          />
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
                        <div className="button-wrapper d-grid gap-2 col-6 col-sm-8 col-md-6 mx-auto mt-3">
                          <button
                            type="submit"
                            className="custom-button ml-5"
                            onClick={updateRecord}
                          >
                            Save and Continue
                          </button>
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
