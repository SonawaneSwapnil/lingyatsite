
import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Service from "../../service/Service";
export default function Registration() {
  // const [empId, setEmpId] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveData = (data) => {
    console.log(data);
    Service.saveAllUsers(data).then((res) => {
      console.log(res.data);
      alert("Registration successfully");
      navigate("/login");
    });
  };

  let navigate = useNavigate();

     
   
  return (
    <div>

{/* <!-- ========== Login & Registation Section ========== --> */}
  <section className="log-reg">
    <div className="top-menu-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <Link to="/" className="backto-home"><i className="fas fa-chevron-left"></i> Back to Lingayat Matrimony</Link>
          </div>
          <div className="col-lg-7">
            <div className="logo">
              <img src="assets/images/logo/logo.png" alt="logo" className="w-50"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-end">
        <div className="image">
        </div>
        <div className="col-lg-7">
          <div className="log-reg-inner">
            <div className="section-header">
              <h2 className="title">
                Welcome to Lingayat Matrimony
              </h2>
              <p>
                Let's create your profile! Just fill in the fields below, and
                we’ll get a new account.
              </p>
            </div>
            <div className="main-content">
            <form onSubmit={handleSubmit(saveData)}>
             <h4 className="content-title">Personal Detail/वैयक्तिक माहिती</h4>
              
             <div className="form-group">
              <label htmlFor="exampleInputname" className="form-label">
                Name/नाव*
              </label>
              <input
                {...register("user_name", {
                  required: "Enter your full name/पूर्ण नाव",
                })}
                type="text"
                
                className="my-form-control"
                id="exampleInputname"
              />
              {""}
              {errors.user_name && (
                <span style={{ color: "red" }}>{errors.user_name.message}</span>
              )}
              <br />
            </div>
            <div className="form-group">
                <label htmlFor="contactno" className="form-label">
                  Contact no/संपर्क क्रमांक*
                </label>
               
                <input
                  {...register("contact", {
                    required: "Please enter contact number/संपर्क क्रमांक",
                    minLength: { value: 8, message: "At least 8 digit" },
                    maxLength: { value: 10, message: "Enter max 10 digit" },
                  })}
                  type="text"
                  className="my-form-control"
                  id="contactno"
                  
                />
                {errors.contact && (
                  <span style={{ color: "red" }}>{errors.contact.message}</span>
                )}
                <br />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password/पासवर्ड*
                </label>
                <input
                  type="password"
                  className="my-form-control"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                  
                  {...register("password", {
                    required: "Please enter your password/पासवर्ड",
                    minLength: { value: 8, message: "At least 8 digit" },
                  })}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>
                    {errors.password.message}
                  </span>
                )}
              </div>
               
                <h4 className="content-title mt-5">Profile Details</h4>
                <div className="form-group">
              <label htmlFor="exampleInputdate" className="form-label text-center">
                Date Of Birth/जन्मतारीख*
              </label>
              
              <input {...register("dob", {
                  required: "Enter your Date Of Birth/जन्मतारीख",
                })}
                type="date"
                className="my-form-control"
                id="exampleInputdate"
                
              />{""}
              {errors.dob && (
                <span style={{ color: "red" }}>{errors.dob.message}</span>
              )}
              <br />
            </div>
            <div className="form-group">
                      <label htmlFor="">I am a*</label>
                      <div className="option">
                        <div className="s-input mr-3">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            {...register("gender", {
                              required: "select gender",
                            })}
                          />
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
                            })}
                          />
                          <label htmlFor="female">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Looking for a*</label>
                      <div className="option">
                        <div className="s-input mr-3">
                          <input
                            type="radio"
                            name="looking_for_gender"
                            value="male"
                            id="males"
                            {...register("looking_for_gender", {
                              required: "select gender",
                            })}
                          />
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
                            })}
                          />
                          <label htmlFor="females">Female</label>
                        </div>
                      </div>
                    </div>
                {/* <div className="form-group">
                  <label htmlFor="">I am a*</label>
                  <div className="option">
                    <div className="s-input mr-3">
                    <input type="radio" name="gender" id="male"/><label htmlFor="male">Male</label>
                      
                    </div>
                    <div className="s-input">
                    <input type="radio" name="gender" id="female"/><label htmlFor="female">Female</label>
                     
                    </div>
                  </div>
                </div> */}
                {/* <div className="form-group">
                  <label htmlFor="">Looking for a*</label>
                  <div className="option">
                    <div className="s-input mr-3">
                    <input type="radio" name="looking_for_gender" id="males"/><label htmlFor="males">Male</label>
                    
                    </div>
                    <div className="s-input">
                    <input type="radio" name="looking_for_gender" id="females"/><label htmlFor="females">Female</label>
                    
                     
                    </div>
                  </div>
                </div> */}
                <div className="form-group">
                  <label htmlFor="">Marital status*</label>
                  <div className="option">
                    <div className="s-input nice-select-wraper">
                      <select className="select-bar"  {...register("married_status", {
                  required: "Enter your Marital status",
                })}>
                      <option value="">---Marital status---</option> 
                        <option value="Single">NeverMarried</option>
                        <option value="Married">ReMarriage</option>
                        
                      </select>
                      {errors.married_status && (
                <span style={{ color: "red" }}>{errors.married_status.message}</span>
              )}
                    </div>                
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="" className='mt-4'>City/शहर*</label>
                   
                    <input {...register("city", {
                      required: "Enter your City/शहर",
                    })}type="text" className="my-form-control mr-5" />
                    {""}
              {errors.city && (
                <span style={{ color: "red" }}>{errors.city.message}</span>
              )}
              <br />
                </div>
                <div className="button-wrapper d-grid gap-2 col-6 col-sm-10 col-md-8 mx-auto mt-3">
                      {/* <Link to="/login"> */}
                      <button type="submit" className="custom-button ml-5">
                      Create Your Profile
                      </button>
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
  )
}

