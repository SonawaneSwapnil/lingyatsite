import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Service from "../../service/Service";

export default function Login() {
  const [isShow, setIsShow] = useState(false);
  const [alertClass, setAlertClass] = useState();
  const [msg, setMsg] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveLoginData = (data) => {
    Service.saveAllLogin(data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success);
        setIsShow(true);
        setAlertClass("alert alert-success");
        setMsg(res.data.success);
        localStorage.setItem("USERID", JSON.stringify(res.data.data.user_id));
        localStorage.setItem("LOGGEDIN", true);
        if(JSON.parse(localStorage.getItem("filterData"))){
          // navigate("/search");
          window.location.replace("/search");
        } else{
          window.location.replace("/profile");
        // navigate("/profile");
        }
      } else if (res.data.warning) {
        setIsShow(true);
        setAlertClass("alert alert-danger");
        setMsg(res.data.warning);
      }
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
              <div className="col-lg-6">
                <Link to="/" className="backto-home ml-lg-5 pl-lg-5">
                  <i className="fas fa-chevron-left"></i>Back to Home
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="logo">
                  <img
                    src="assets/images/logo/logo-old.png"
                    className="w-50"
                    alt="logo"
                  />
                  <p className="pt-4">
                    <strong>
                      Note: Please Sign in for finding your Dream Partner
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-6 image image-log"></div>
            <div className="col-lg-6">
              <div className="log-reg-inner">
                <div className="section-header inloginp">
                  <h2 className="title">Welcome to Lingayat Matrimony</h2>
                  <marquee className="bg-danger text-white font-weight-bold">If you have already an account sign in else please register to find your dream  partner./ जर तुमच्याकडे आधीपासूनच खाते असेल तर साइन इन करा अन्यथा कृपया तुमचा स्वप्नातील जोडीदार शोधण्यासाठी नोंदणी करा.</marquee>
                </div>
                {isShow && (
                  <div className={alertClass} role="alert">
                    {msg}
                  </div>
                )}
                <div className="main-content inloginp">
                  <form
                    onSubmit={handleSubmit(saveLoginData)}
                    autoComplete="off"
                  >
                    <div className="form-group">
                      <label htmlFor="contactno" className="form-label ititle">
                        Contact no/संपर्क क्रमांक:
                      </label>
                      <input
                        {...register("contact", {
                          required:
                            "Please enter contact number/संपर्क क्रमांक",
                          minLength: {
                            value: 10,
                            message: "Use 10 digits for your contact number",
                          },
                          maxLength: {
                            value: 10,
                            message: "Use 10 digits for your contact number",
                          },
                        })}
                        type="number"
                        className="my-form-control"
                        id="contactno"
                        autoComplete="off"
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
                        htmlFor="exampleInputPassword1"
                        className="form-label ititle"
                      >
                        Password/पासवर्ड:
                      </label>
                      <input
                        type="password"
                        className="my-form-control"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        autoComplete="off"
                        {...register("password", {
                          required: "Please enter your password/पासवर्ड",
                          minLength: {
                            value: 8,
                            message:
                              "Use 8 characters or more for your password",
                          },
                        })}
                      />
                      {errors.password && (
                        <span style={{ color: "red" }}>
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <p className="f-pass">
                      Forgot your password?{" "}
                      <Link to="/forgot-password">recover password</Link>
                    </p>
                    <div className="button-wrapper row">
                      <button
                        type="submit"
                        className="custom-button col-lg-5 col-sm-5 mx-2 w-75"
                      >
                        Sign In
                      </button>
                      <button
                        type="submit"
                        className="custom-button col-lg-5 col-sm-5 mx-2 w-75"
                        onClick={() => navigate("/registration")}
                      >
                        Registration
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========== Login & Registation Section ========== --> */}
    </div>
  );
}
