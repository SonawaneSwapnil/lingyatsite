import React,{useState,useEffect} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
export default function Registration() {
  const [UsersData, setUsersData] = useState();
  const [usersId, setusersId] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  useEffect(() => {
    loadAllUsersData();
  }, []);

  const loadAllUsersData = () => {
    Service.getAllUsers().then((res) => {
      setUsersData(res.data);
      console.log(res);
    });
  };

  const saveUsersData = (data) => {
    console.log(data);
    Service.saveUsers(data).then((res) => {
      console.log(res.data);
      alert("Data Saved successfully");
      reset();
      loadAllUsersData();
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
                <Link to="/" className="backto-home">
                  <i className="fas fa-chevron-left"></i> Back to Lingayat
                  Matrimony
                </Link>
              </div>
              <div className="col-lg-7">
                <div className="logo">
                  <img
                    src="assets/images/logo/logo.png"
                    alt="logo"
                    className="w-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="image"></div>
            <div className="col-lg-7">
              <div className="log-reg-inner">
                <div className="section-header">
                  <h2 className="title">Welcome to Lingayat Matrimony</h2>
                  <p>
                    Let's create your profile! Just fill in the fields below,
                    and we’ll get a new account.
                  </p>
                </div>
                <div className="main-content">
                  <form onSubmit={handleSubmit(saveUsersData)}>
                    <h4 className="content-title">
                      Personal Detail/वैयक्तिक माहिती
                    </h4>

                    <div className="form-group">
                      <label
                        htmlhtmlFor="exampleInputname"
                        className="form-label"
                      >
                        Name/नाव*
                      </label>
                      <input
                        {...register("user_name", {
                          required: "Enter your full name/पूर्ण नाव",
                        })}
                        type="text"
                        placeholder="Enter your full name/पूर्ण नाव"
                        className="my-form-control"
                        id="exampleInputname"
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
                      <label htmlhtmlFor="contactno" className="form-label">
                        Contact no/संपर्क क्रमांक*
                      </label>

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
                        type="text"
                        className="my-form-control"
                        id="contactno"
                        placeholder="Enter your contact no/संपर्क क्रमांक"
                      />
                      {errors.contact && (
                        <span style={{ color: "red" }}>
                          {errors.contact.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label
                        htmlhtmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password/पासवर्ड*
                      </label>
                      <input
                        type="password"
                        className="my-form-control"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        placeholder="Enter your password/पासवर्ड"
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
                      <label
                        htmlhtmlFor="exampleInputdate"
                        className="form-label text-center"
                      >
                        Date Of Birth/जन्मतारीख*
                      </label>
                      <input
                        {...register("dob", {
                          required: "Enter your Date Of Birth/जन्मतारीख",
                        })}
                        type="date"
                        className="my-form-control"
                        id="exampleInputdate"
                      />
                      {""}
                      {errors.dob && (
                        <span style={{ color: "red" }}>
                          {errors.dob.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">I am a*</label>
                      <div className="option">
                        <div className="s-input mr-3">
                          <input type="radio" name="gender1" id="males1" />
                          <label htmlhtmlFor="males1">Man</label>
                        </div>
                        <div className="s-input">
                          <input type="radio" name="gender1" id="females1" />
                          <label htmlhtmlFor="females1">Woman</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlhtmlFor="">Looking for a*</label>
                      <div className="option">
                        <div className="s-input mr-3">
                          <input type="radio" name="gender2" id="males" />
                          <label htmlhtmlFor="males">Man</label>
                        </div>
                        <div className="s-input">
                          <input type="radio" name="gender2" id="females" />
                          <label htmlhtmlFor="females">Woman</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlhtmlFor="">Marital status*</label>
                      <div className="option">
                        <div className="s-input nice-select-wraper">
                          <select className="select-bar">
                            <option value="">Single</option>
                            <option value="">Married</option>
                            <option value="">Divorced</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlhtmlFor="">City*</label>
                      <input
                        type="text"
                        className="my-form-control mr-5"
                        placeholder="Enter Your City"
                      />
                    </div>
                    <button
                      className="custom-button  ml-5"
                      data-toggle="modal"
                      data-target="#email-confirm"
                      to="/user_setting"
                      onClick={() => navigate("/login")}
                    >
                      Create Your Profile
                    </button>
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
