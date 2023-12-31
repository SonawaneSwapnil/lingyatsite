import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";

export default function ResetNewPassword() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const updatePass = (data) => {
    let currentUser = JSON.parse(localStorage.getItem("FUser"));
    data.user_id = currentUser.user_id;
    Service.updatePassword(data).then((res) => {
      if (res.data.success) {
        navigate("/login");
      }
    });
  };

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h4 className="title extra-padding">Setup New Password</h4>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="">Home</Link></li>
              <li>Setup New Password</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="flirting-section mt-3">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-6" style={{ 'margin': '0 0 60px 0' }}>
              <div className="profile-main-content border border-dark">
                <div className="mt-4">
                  <form onSubmit={handleSubmit(updatePass)} autoComplete="off">
                    <div className="row d-flex justify-content-center">
                      <h4 className="content-title text-center">Setup New Password</h4>
                    </div>
                    <label htmlFor="inputdesignation" className="ititle ml-5 mt-3" >
                      Enter Your New Password
                    </label>
                    <div className="row input-group d-flex justify-content-center ">
                      <input
                        type="password"
                        className="my-form-control ml-5 mr-3"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        autoComplete="off"
                        {...register("password", {
                          required: "Please enter your password/पासवर्ड",
                          minLength: { value: 8, message: "Use 8 characters or more for your password" },
                        })} />
                      {errors.password && (<span style={{ color: "red" }}>{errors.password.message}</span>)}
                    </div>

                    <div className="row">
                      <label htmlFor="inputdesignation" className="ititle ml-5" >
                        Enter Your Confirm Password
                      </label>
                    </div>
                    <div className="row input-group">
                      <input
                        type="password"
                        className="my-form-control ml-5 mr-3"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        autoComplete="off"
                        {...register("confirmpassword", {
                          required: "Please enter confirm password/पासवर्ड",
                          validate: (val) => { if (watch("password") != val) { return "Passwords does not match."; } },
                        })} />
                      {errors.confirmpassword && (<span style={{ color: "red" }}>{errors.confirmpassword.message}</span>)}
                    </div>

                    <div className="row  d-flex justify-content-center ">
                      <div className="button-wrapper mb-3">
                        <button type="submit" className="custom-button mt-3">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========= Profile Section Start -- */}
    </div>
  );
}
