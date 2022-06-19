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
            <h2 className="title extra-padding">Setup New Password</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="">Home</Link>
              </li>
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
            <div className="col-xl-6 col-lg-6">
              <div className="profile-main-content border border-dark">
                <div className="mt-4">
                  <form onSubmit={handleSubmit(updatePass)} autoComplete="off">
                    <div className="row d-flex justify-content-center">
                      <h4 className="content-title text-center">
                        Setup New Password
                      </h4>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <label
                        htmlFor="inputdesignation"
                        className="col-sm-8 col-form-label text-center"
                      >
                        Enter Your New Password
                      </label>
                    </div>
                    <div className="row input-group d-flex justify-content-center ">
                      <input
                        type="newpassword"
                        className="my-form-control col-sm-8 ml-5"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        placeholder="Enter new password/पासवर्ड"
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
                    <div className="row d-flex justify-content-center">
                      <label
                        htmlFor="inputdesignation"
                        className="col-sm-8 col-form-label text-center"
                      >
                        Enter Your Confirm Password
                      </label>
                    </div>
                    <div className="row input-group d-flex justify-content-center ">
                      <input
                        type="confirmpassword"
                        className="my-form-control col-sm-8 ml-5"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        placeholder="Enter confirm password/पासवर्ड"
                        autoComplete="off"
                        {...register("confirmpassword", {
                          required: "Please enter confirm password/पासवर्ड",
                          validate: (val) => {
                            if (watch("password") != val) {
                              return "Passwords does not match.";
                            }
                          },
                        })}
                      />
                      {errors.confirmpassword && (
                        <span style={{ color: "red" }}>
                          {errors.confirmpassword.message}
                        </span>
                      )}
                    </div>

                    <div className="row  d-flex justify-content-center ">
                      <div className="button-wrapper mb-3">
                        <button type="submit" className="custom-button mt-3">
                          Submit
                        </button>
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
