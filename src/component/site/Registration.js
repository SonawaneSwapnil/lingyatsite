import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
export default function Registration() {
  // const [empId, setEmpId] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

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

  const saveData = () => {
    var data = {
      user_name: getValues("user_name"),
      dob: getValues("dob"),
      gender: getValues("gender"),
      contact: getValues("contact"),
      password: getValues("password"),
      looking_for_gender: getValues("looking_for_gender"),
      city: getValues("city"),
      married_status: getValues("married_status"),
      age: getAge(getValues("dob"))
    }
    console.log(data);
    Service.saveAllUsers(data).then((res) => {
      console.log(res.data);
      navigate("/login");
    });
  };

  let navigate = useNavigate();

  return (
    <div>
      {/* <!-- ========== Login & Registration Section ========== --> */}
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Link to="/" className="backto-home ml-lg-5 pl-lg-5"><i className="fas fa-chevron-left"></i>Back to Home</Link>
              </div>
              <div className="col-lg-6">
                <div className="logo">
                  <img src="assets/images/logo/logo.png" alt="logo" className="w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="image col-lg-6"></div>
            <div className="col-lg-6">
              <div className="log-reg-inner">
                <div className="section-header">
                  <h2 className="title">Welcome to Lingayat Matrimony</h2>
                  <p>
                    Let's create your profile! Just fill in the fields below,
                    and we’ll get a new account.
                  </p>
                </div>
                <div className="main-content">
                  <form onSubmit={handleSubmit(saveData)}>
                    <h4 className="content-title text-center">Personal Detail/वैयक्तिक माहिती</h4>
                    <div className="form-group">
                      <label htmlFor="exampleInputname" className="form-label ititle ititle">Full Name/पूर्ण नाव*:</label>
                      <input
                        {...register("user_name", {
                          required: "Enter your full name/पूर्ण नाव",
                        })}
                        type="text"
                        className="my-form-control"
                        id="exampleInputname"
                        autoComplete='off'
                      />
                      {errors.user_name && (
                        <span style={{ color: "red" }}>{errors.user_name.message}</span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactno" className="form-label ititle">Contact no/संपर्क क्रमांक*:</label>
                      <input
                        {...register("contact", {
                          required:
                            "Please enter contact number/संपर्क क्रमांक",
                          minLength: { value: 8, message: "At least 8 digit" },
                          maxLength: {
                            value: 10,
                            message: "Enter max 10 digit",
                          },
                        })}
                        type="number"
                        className="my-form-control"
                        id="contactno"
                        autoComplete="off" />
                      {errors.contact && (
                        <span style={{ color: "red" }}>{errors.contact.message}</span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="form-label ititle">Password/पासवर्ड*:</label>
                      <input
                        type="password"
                        className="my-form-control"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        {...register("password", {
                          required: "Please enter your password/पासवर्ड",
                          minLength: { value: 8, message: "At least 8 digit" },
                        })} />
                      {errors.password && (
                        <span style={{ color: "red" }}>{errors.password.message}</span>
                      )}
                    </div>

                    <h4 className="content-title mt-5">Profile Details</h4>
                    <div className="form-group">
                      <label htmlFor="exampleInputdate" className="form-label ititle text-center">Date Of Birth/जन्मतारीख*:</label>
                      <input
                        {...register("dob", {
                          required: "Enter your Date Of Birth/जन्मतारीख",
                        })}
                        type="date"
                        className="my-form-control"
                        id="exampleInputdate" />
                      {errors.dob && (
                        <span style={{ color: "red" }}>{errors.dob.message}</span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="ititle">I am a*:</label>
                      <div className="option">
                        <div className="s-input mr-3">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            {...register("gender", {
                              required: "select gender",
                            })} />
                          <label htmlFor="male">Male</label>
                        </div>
                        <div className="s-input">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            {...register("gender", {
                              required: "select gender",
                            })} />
                          <label htmlFor="female">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="ititle">Looking for a*:</label>
                      <div className="option">
                        <div className="s-input mr-3">
                          <input
                            type="radio"
                            name="looking_for_gender"
                            value="male"
                            id="males"
                            {...register("looking_for_gender", {
                              required: "select gender",
                            })} />
                          <label htmlFor="males">Male</label>
                        </div>
                        <div className="s-input">
                          <input
                            type="radio"
                            name="looking_for_gender"
                            value="female"
                            id="females"
                            {...register("looking_for_gender", {
                              required: "select gender",
                            })} />
                          <label htmlFor="females">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="ititle">Marital status*:</label>
                      <div className="option">
                        <div className="s-input nice-select-wraper">
                          <select
                            className="select-bar"
                            {...register("married_status", {
                              required: "Enter your Marital status",
                            })}>
                            <option value="">---Marital status---</option>
                            <option value="NeverMarried">Never Married</option>
                            <option value="ReMarriage">Re Marriage</option>
                          </select>
                          {errors.married_status && (
                            <span style={{ color: "red" }}>{errors.married_status.message}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="mt-4 ititle">City/शहर*:</label>
                      <input
                        {...register("city", {
                          required: "Enter your City/शहर",
                        })}
                        type="text"
                        className="my-form-control mr-5"
                      />
                      {errors.city && (
                        <span style={{ color: "red" }}>{errors.city.message}</span>
                      )}
                      <br />
                    </div>
                    <div className="text-center">
                      {/* <Link to="/login"> */}
                      <button type="submit" className="custom-button w-75">Create Your Profile</button>
                      {/* </Link> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== Login & Registation Section ========== -- */}
    </div>
  );
}
