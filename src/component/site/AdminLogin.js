import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Service from "../../service/Service";

export default function AdminLogin() {
  const [isShow, setIsShow] = useState(false);
  const [alertClass, setAlertClass] = useState();
  const [msg, setMsg] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const adminLogin = (data) => {
    Service.adminLogin(data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success);
        setIsShow(true);
        setAlertClass("alert alert-success");
        setMsg(res.data.success);
        localStorage.setItem("ADMINLOGIN", JSON.stringify(res.data));
        window.location.replace("/admin")
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
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-6  mx-auto">
              <div className="log-reg-inner">
                <div className="section-header inloginp">
                  <h2 className="title">Admin Login</h2>
                </div>
                {isShow && (<div className={alertClass} role="alert">{msg}</div>)}
                <div className="main-content inloginp">
                  <form onSubmit={handleSubmit(adminLogin)} autoComplete="off" >
                    <div className="form-group">
                      <label htmlFor="contactno" className="form-label ititle">Contact no/संपर्क क्रमांक:</label>
                      <input
                        {...register("Contact", {
                          required: "Please enter contact number/संपर्क क्रमांक",
                          minLength: { value: 10, message: "Use 10 digits for your contact number" },
                          maxLength: { value: 10, message: "Use 10 digits for your contact number" },
                        })}
                        type="number"
                        className="my-form-control"
                        id="contactno"
                        autoComplete="off"
                      />
                      {errors.Contact && (<span style={{ color: "red" }}>{errors.Contact.message}</span>)}
                      <br />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="form-label ititle" >Password/पासवर्ड:</label>
                      <input
                        type="password"
                        className="my-form-control"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        autoComplete="off"
                        {...register("Pass", {
                          required: "Please enter your password/पासवर्ड",
                          minLength: { value: 8, message: "Use 8 characters or more for your password" },
                        })}
                      />
                      {errors.Pass && (<span style={{ color: "red" }}>{errors.Pass.message}</span>)}
                    </div>
                    {/* <p className="f-pass">Forgot your password?{' '}<Link to="/forgot-password">recover password</Link></p> */}
                    <div className="button-wrapper row">
                      <button type="submit" className="custom-button col-lg-5 col-sm-5 mx-2 w-75" >Sign In</button>
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
