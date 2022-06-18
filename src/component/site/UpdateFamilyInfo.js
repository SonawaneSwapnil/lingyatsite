import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Family() {
  const [userUpdateData, setuserUpdateData] = useState();
  const [user_id, setuser_id] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
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
      father: getValues("father"),
      mother: getValues("mother"),
      brother: getValues("brother"),
      sister: getValues("sister"),
      father_contact: getValues("father_contact"),
      mother_contact: getValues("mother_contact"),
      brother_contact: getValues("brother_contact"),
      sister_contact: getValues("sister_contact"),
      user_id: user_id
    };

    Service.updateFamily(data)
      .then((res) => {
        // alert("record Updated successsfully");
        // loadAllData();
        navigate("/update-expectation");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let navigate = useNavigate();
  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Add Family Information</h2>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="/">Home</Link></li>
              <li>Add Family Information</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        {userUpdateData && userUpdateData.map(index => (
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
                          alt="" />
                        <div className="active-online"></div>
                      </div>
                      <h5 className="name">{index.user_name}</h5>
                      <ul className="p-b-meta-one">
                        <li><span>{index.age} Years Old</span></li>
                        <li>
                          <span><i className="fas fa-map-marker-alt"></i>{index.city}</span>
                        </li>
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
                              <i className="fas fa-plus"></i></Link>
                          </div>
                        </div>
                      </div>
                      <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up3.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up3.jpg" className="light-box mfp-iframe">
                              <i className="fas fa-plus"></i></Link>
                          </div>
                        </div>
                      </div>
                      <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up4.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up4.jpg" className="light-box mfp-iframe">
                              <i className="fas fa-plus"></i></Link>
                          </div>
                        </div>
                      </div>
                      <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up5.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up5.jpg" className="light-box mfp-iframe">
                              <i className="fas fa-plus"></i></Link>
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
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/update-profile" className="active">Add/Update Information</NavLink></li>
                    <li><NavLink to="/Search" >search</NavLink></li>
                  </ul>
                  <div className="mt-4">
                    <form onSubmit={handleSubmit(updateRecord)}>
                      <h4 className="content-title info-main-title text-center">Family Information/कौटुंबिक माहिती</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <label for="inputincome" className="col-form-label ititle">Father Name/वडीलांचे नावं:</label>
                          <div className="input-group">
                            <input
                              {...register("father")}
                              type="text"
                              className="my-form-control"
                              id="exampleInputname" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label for="inputdesignation" className="col-form-label ititle">Contact Number/संपर्क क्रमांक:</label>
                          <input
                            {...register("father_contact")}
                            type="text"
                            className="my-form-control"
                            id="contactno" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          {errors.father && (<span style={{ color: "red" }}>{errors.father.message}</span>)}
                        </div>
                        <div className="col-lg-6">
                          {errors.father_contact && (<div style={{ color: "red" }}>{errors.father_contact.message}</div>)}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label for="inputincome" className="col-form-label ititle">Mother Name/आईचे नाव:</label>
                          <div className="input-group ">
                            <input
                              type="text"
                              className="my-form-control"
                              id="exampleInputname"
                              {...register("mother")} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label for="inputdesignation" className="col-form-label ititle">Contact Number/संपर्क क्रमांक:</label>
                          <input
                            type="text"
                            className="my-form-control"
                            id="contactno"
                            {...register("mother_contact")} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          {errors.mother && (<span style={{ color: "red" }}> {errors.mother.message}</span>)}
                        </div>
                        <div className="col-lg-6">
                          {errors.mother_contact && (<div style={{ color: "red" }}>{errors.mother_contact.message}</div>)}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label for="inputincome" className="col-form-label ititle">Brother Name/भावाचे नाव</label>
                          <div className="input-group ">
                            <input
                              type="text"
                              className="my-form-control"
                              id="exampleInputname"
                              {...register("brother")} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label for="inputdesignation" className="col-form-label ititle">Contact Number/संपर्क क्रमांक</label>
                          <input
                            type="text"
                            className="my-form-control"
                            id="contactno"
                            {...register("brother_contact")} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-5 ms-3 ml-5 mr-2">
                          {errors.brother && (<span style={{ color: "red" }}>{errors.brother.message}</span>)}
                        </div>
                        <div className="col-sm-5 ms-3 ml-5 mr-2">
                          {errors.brother_contact && (<div style={{ color: "red" }}>{errors.brother_contact.message}</div>)}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label for="inputincome" className="col-form-label ititle">Sister Name/बहिणीचे नाव:</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="my-form-control"
                              id="exampleInputname"
                              {...register("sister")} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label for="inputdesignation" className="col-form-label ititle">Contact Number/संपर्क क्रमांक:</label>
                          <input
                            type="text"
                            className="my-form-control"
                            id="contactno"
                            {...register("sister_contact")} />
                        </div>

                      </div>
                      <div className="row">
                        <div className="col-sm-5 ms-3 ml-5 mr-2">
                          {errors.sister && (<span style={{ color: "red" }}>{errors.sister.message}</span>)}
                        </div>
                        <div className="col-sm-5 ms-3 ml-5 mr-2">
                          {errors.sister_contact && (<div style={{ color: "red" }}>{errors.sister_contact.message}</div>)}
                        </div>
                      </div>

                      <div className="button-wrapper mt-5 text-center">
                        <button type="submit" className="custom-button w-75">Save and Continue</button>
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