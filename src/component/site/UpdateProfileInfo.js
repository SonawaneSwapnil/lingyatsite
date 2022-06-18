import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

export default function UpdateProfileInfo() {
  const [userUpdateData, setuserUpdateData] = useState();
  const [showhide, setshowhide] = useState("");
  const [user_id, setuser_id] = useState();
  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setshowhide(getuser);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = () => {
    setuser_id(JSON.parse(localStorage.getItem("USERID")));
    Service.getSingleUser(JSON.parse(localStorage.getItem("USERID"))).then(
      (res) => {
        setuserUpdateData(res.data);
      }
    );
  };

  const updateRecord = () => {
    var data = {
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
      user_id: user_id
    };

    Service.updateUsers(data)
      .then((res) => {
        navigate("/update-family");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // datepicker

  let navigate = useNavigate();
  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Add/Update Information</h2>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="">Home</Link></li>
              <li>Add/Update Information</li>
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
                    <div className="profile-meta-box"></div>
                    <div className="profile-uplodate-photo">
                      <h4 className="p-u-p-header"><i className="fas fa-camera"></i>Uploaded Photos</h4>
                      <div className="p-u-p-list">
                        <div className="my-col">
                          <div className="img">
                            <img src="assets/images/profile/up1.jpg" alt="" />
                            <div className="overlay">
                              <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe">
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="my-col">
                          <div className="img">
                            <img src="assets/images/profile/up3.jpg" alt="" />
                            <div className="overlay">
                              <Link to="assets/images/profile/up3.jpg" className="light-box mfp-iframe">
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="my-col">
                          <div className="img">
                            <img src="assets/images/profile/up4.jpg" alt="" />
                            <div className="overlay">
                              <Link to="assets/images/profile/up4.jpg" className="light-box mfp-iframe">
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="my-col">
                          <div className="img">
                            <img src="assets/images/profile/up5.jpg" alt="" />
                            <div className="overlay">
                              <Link to="assets/images/profile/up5.jpg" className="light-box mfp-iframe">
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
                      <li><NavLink to="/profile" exact activeclassname="active-class">Profile</NavLink></li>
                      <li><NavLink to="/update-profile" exact activeclassname="active-class">Add/Update Information</NavLink></li>
                      <li><NavLink to="/Search" exact activeclassname="active-class">Search</NavLink></li>
                    </ul>

                    <div className="mt-4">
                      <form onSubmit={handleSubmit(updateRecord)}>
                        <h4 className="content-title info-main-title text-center">Personal Detail/वैयक्तिक माहिती</h4>
                        <div className="form-group">
                          <label htmlFor="exampleInputname" className="form-label ititle">Name/नाव*</label>
                          <input
                            {...register("user_name", { required: "Enter Your FullName/पूर्ण नाव", })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputname"
                            value={index.user_name} />
                          {errors.user_name && (<span style={{ color: "red" }}>{errors.user_name.message}</span>)}
                          <br />
                        </div>

                        <div className="form-group">
                          <label htmlFor="exampleInputdate" className="form-label ititle">Date Of Birth/जन्मतारीख </label>
                          <input
                            {...register("dob", { required: "Enter Your Date Of Birth/जन्मतारीख" })}
                            value={moment(`${index.dob}`).format('YYYY-MM-DD')}
                            type="text"
                            className="my-form-control"
                            id="exampleInputdate" />
                          {errors.dob && (<span style={{ color: "red" }}>{errors.dob.message}</span>)}
                          <br />
                        </div>

                        <div className="form-group">
                          <label htmlFor="exampleInputdateplace" className="form-label ititle">Birth Place/जन्मतारीख ठिकाण</label>
                          <input
                            {...register("birth_place", { required: "Enter Your Birth Place/जन्मतारीख ठिकाण" })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputplace" />
                          {errors.birth_place && (<span style={{ color: "red" }}>{errors.birth_place.message}</span>)}
                          <br />
                        </div>

                        <div className="form-group">
                          <label htmlFor="appt" className="form-label ititle">Birth time/जन्म वेळ</label>
                          <input
                            {...register("birth_time", { required: "Enter Your  Birth time/जन्म वेळ" })}
                            type="time"
                            className="my-form-control"
                            id="exampleInputtime" />
                          {errors.birth_time && (<span style={{ color: "red" }}>{errors.birth_time.message}</span>)}
                          <br />
                        </div>

                        <div className="form-group">
                          <div classname="dropdown-menu">
                            <label htmlFor="branch" className="me-5 ititle">Branch/शाखा</label>
                            <select
                              id="branch"
                              name="branch"
                              {...register("branch", {
                                required: "Enter Your branch Name/शाखा:",
                              })}
                              onChange={(e) => handleshowhide(e)}>
                              <option className="dropdown-item" value="">--Select Branch--</option>
                              <option className="dropdown-item" value="Lingayat-Wani/लिंगायत-वाणी">
                                Lingayat-Wani/लिंगायत-वाणी
                              </option>
                              <option className="dropdown-item" value=" Dixiwant/दीक्षिवंत">
                                Dixiwant/दीक्षिवंत
                              </option>
                              <option className="dropdown-item" value="Pancham/पंचम">
                                Pancham/पंचम
                              </option>
                              <option className="dropdown-item" value=" Shilvant(Chilwant)/शिलवंत (चिलवंत)">
                                Shilvant(Chilwant)/शिलवंत (चिलवंत)
                              </option>
                              <option className="dropdown-item" value="Jangam(swami)/जंगम (स्वामी)">
                                Jangam(swami)/जंगम (स्वामी)
                              </option>
                              <option className="dropdown-item" value="Chaturth/चतुर्थ">
                                Chaturth/चतुर्थ
                              </option>
                              <option className="dropdown-item" value="Other/इतर">
                                Other/इतर
                              </option>
                            </select>
                            {showhide === "7" && (
                              <div className="form-group">
                                <label>Branch</label>
                                <input type="text" className="form-control"></input>
                              </div>
                            )}
                          </div>
                          {errors.branch && (<span style={{ color: "red" }}>{errors.branch.message}</span>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="exampleInputdatetime" className="form-label ititle me-5">Zodiac Name/राशि नाव:</label>
                          <input
                            {...register("zodiac", { required: "Enter Your Zodiac Name/राशि नाव:" })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputtime" />
                          {errors.zodiac && (<span style={{ color: "red" }}> {errors.zodiac.message}</span>)}
                          <br />
                        </div>

                        <div className="form-group">
                          <label htmlFor="exampleInputedu" className="form-label ititle">Educational Qualification/शैक्षणिक पात्रता</label>
                          <input
                            {...register("education", { required: "Enter Your Educational Qualification/शैक्षणिक पात्रता" })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputedu" />
                          {errors.education && (<span style={{ color: "red" }}>{errors.education.message}</span>)}
                          <br />
                        </div>

                        <div className="form-group">
                          <label htmlFor="exampleInputser" className="form-label ititle"> Service or Business/सेवा किंवा व्यवसाय</label>
                          <input
                            {...register("bussiness", { required: "Enter Your Service or Business/सेवा किंवा व्यवसाय" })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputser" />
                          {errors.bussiness && (<span style={{ color: "red" }}>{errors.bussiness.message}</span>)}
                          <br />
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor="inputincome" className="col-form-label ititle">Income/उत्पन्न</label>
                            <div className="input-group">
                              <input
                                {...register("income", { required: "Enter Your  Income/उत्पन्न" })}
                                type="number"
                                className="my-form-control"
                                id="exampleInputincome" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="inputdesignation" className="col-form-label ititle" > Designation/हुद्दा</label>
                            <div className="input-group">
                              <input
                                {...register("designation", { required: "Enter Your Designation/हुद्दा", })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputdesig" />
                            </div>
                            <br />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-5 ml-2 mr-5">
                            {errors.income && (<span style={{ color: "red" }}>{errors.income.message}</span>)}
                          </div>
                          <div className="col-sm-5 ml-4">
                            {errors.designation && (<div style={{ color: "red" }}>{errors.designation.message}</div>)}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor="inputincome" className="col-form-label ititle">Workplace/कामाची जागा</label>
                            <div className="input-group">
                              <input
                                {...register("workplace", { required: "Enter Your Workplace/कामाची जागा", })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputdate" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="inputdesignation" className="col-form-label ititle">Height/उंची</label>
                            <div className="input-group">
                              <input
                                {...register("height", { required: "Enter Your Height/उंची" })}
                                type="number"
                                className="my-form-control"
                                id="exampleInputdate" />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-5 ml-2 mr-5">
                            {errors.workplace && (<span style={{ color: "red" }}> {errors.workplace.message}</span>)}
                          </div>
                          <div className="col-sm-5 ml-4">
                            {errors.height && (<div style={{ color: "red" }}> {errors.height.message} </div>)}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor="inputincome" className="col-form-label ititle">Blood-Group/रक्त गट</label>
                            <div className="input-group">
                              <input
                                {...register("blood_group", { required: "Enter Your Blood-Group/रक्त गट" })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputblood" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="inputdesignation" className="col-form-label ititle ">Color/रंग</label>
                            <div className="input-group">
                              <input
                                {...register("color", { required: "Enter Your Color/रंग", })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputcolor" />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-5 ml-2 mr-5">
                            {errors.blood_group && (<span style={{ color: "red" }}> {errors.blood_group.message}</span>)}
                          </div>
                          <div className="col-sm-5 ml-4">
                            {errors.color && (<div style={{ color: "red" }}> {errors.color.message}</div>)}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor="inputincome" className="col-form-label ititle">Weight/वजन</label>
                            <div className="input-group">
                              <input
                                {...register("weight", { required: "Enter Your Weight/वजन" })}
                                type="number"
                                className="my-form-control"
                                id="exampleInputdate" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="inputdesignation" className="col-form-label ititle">Address/पत्ता</label>
                            <div className="input-group">
                              <input
                                {...register("address", { required: "Enter Your Address/पत्ता" })}
                                type="text"
                                className="my-form-control"
                                id="exampleInputdate" />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-5 ml-2 mr-5">
                            {errors.weight && (<span style={{ color: "red" }}>{errors.weight.message}</span>)}
                          </div>
                          <div className="col-sm-5 ml-4">
                            {errors.address && (<div style={{ color: "red" }}>{errors.address.message}</div>)}
                          </div>
                        </div>

                        <div className="col-sm-8 col-md-12 mt-3 text-center">
                          <button type="submit" className="custom-button w-50" >Save and Continue</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          ))
        }
      </section >
      {/* <!-- ========= Profile Section Start -- */}
    </div >
  );
}
