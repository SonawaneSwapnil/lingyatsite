import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LeftProfileArea from "../common/LeftProfileArea";

export default function Family() {
  const [userUpdateData, setuserUpdateData] = useState();

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

  var USERID = JSON.parse(localStorage.getItem("USERID"));

  const loadAllData = () => {
    Service.getSingleUser(USERID).then(
      (res) => {
        setuserUpdateData(res.data);
        reset(res.data[0]);
      }
    );
  };

  // Update
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
      caretaker: getValues("caretaker"),
      caretaker_contact: getValues("caretaker_contact"),
      user_id: USERID
    };

    Service.updateFamily(data)
      .then((res) => {
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
            <h4 className="title extra-padding">Add/Update Family Information</h4>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="/">Home</Link></li>
              <li>Add/Update Information</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        {userUpdateData && userUpdateData.map((index, i) => (
          <div className="container" key={i}>
            <div className="row justify-content-center">

              <LeftProfileArea data={userUpdateData} />

              <div className="col-xl-8 col-lg-7">
                <div className="profile-main-content">
                  <ul className="top-menu">
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/update-profile" className="active">Add/Update Information</NavLink></li>
                    {/* <li><NavLink to="/single_profile3">Members</NavLink></li> */}
                    <li><NavLink to="/Search" >search</NavLink></li>
                  </ul>
                  <div className="mt-4">
                    <form onSubmit={handleSubmit(updateRecord)}>
                      <h4 className="content-title text-center info-main-title">Family Information/कौटुंबिक माहिती</h4>

                      <div className="row">
                        <div className="col-lg-6">
                          <label htmlFor="inputincome" className="ititle">Father Name/वडीलांचे नावं:</label>
                          <input
                            {...register("father", { required: "Enter Your Father Name/वडीलांचे नाव" })}
                            type="text"
                            className="my-form-control"
                            id="exampleInputname" />
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="inputdesignation" className="ititle">Contact Number/संपर्क क्रमांक:</label>
                          <input
                            {...register("father_contact", {
                              required: " Enter Contact No/संपर्क क्रमांक",
                              minLength: { value: 10, message: "At least 10 digit" },
                              maxLength: { value: 10, message: "Enter max 10 digit" },
                            })}
                            type="number"
                            className="my-form-control"
                            id="contactno"
                          />
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
                        <div className="col-lg-6">
                          <label htmlFor="inputincome" className="ititle"> Mother Name/आईचे नाव:</label>
                          <input type="text" className="my-form-control" id="exampleInputname" {...register("mother")} />
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="inputdesignation" className="ititle">Contact Number/संपर्क क्रमांक:</label>
                          <input type="number" className="my-form-control" id="contactno" {...register("mother_contact")} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <label htmlFor="inputincome" className="ititle">Brother Name/भावाचे नाव</label>
                          <input type="text" className="my-form-control" id="exampleInputname" {...register("brother")} />
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="inputdesignation" className="ititle">Contact Number/संपर्क क्रमांक</label>
                          <input type="number" className="my-form-control" id="contactno" {...register("brother_contact")} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <label htmlFor="inputincome" className="ititle">Sister Name/बहिणीचे नाव:</label>
                          <input type="text" className="my-form-control" id="exampleInputname" {...register("sister")} />
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="inputdesignation" className="ititle">Contact Number/संपर्क क्रमांक:</label>
                          <input type="number" className="my-form-control" id="contactno" {...register("sister_contact")} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <label htmlFor="inputincome" className="ititle">Care Taker Name/ काळजी घेणारे नाव</label>
                          <input type="text" className="my-form-control" id="exampleInputname" {...register("caretaker")} />
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="inputdesignation" className="ititle">Contact Number/संपर्क क्रमांक</label>
                          <input type="number" className="my-form-control" id="contactno" {...register("caretaker_contact")} />
                        </div>
                      </div>

                      <div className="col-12 mt-5 text-center">
                        <Link to='/update-profile' className="col-lg-5 col-md-5"><button className="custom-button w-100">Back</button></Link>
                        <button type="submit" className="col-lg-5 col-md-5 btn-mt custom-button w-100">Save and Continue</button>
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