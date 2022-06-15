import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Service from '../../service/Service';
export default function Login() {
  
  
  // const [loginData, setLoginData] = useState();
  const [userId, setUserId] = useState();
    const {
      register,
      handleSubmit,
      formState: { errors },reset
    } = useForm();
  
    const saveLoginData=(data=>{
  console.log(data);
  Service.saveAllLogin(data).then(res=>{
    console.log(res.data);
    alert("Login successful");
    localStorage.setItem("USERID",JSON.stringify(res.data.data.user_id));
    navigate("/single_profile2");
  
  });
    });

    let navigate=useNavigate();
  return (
    <div>

      {/* <!-- ========== Login & Registation Section ========== --> */}
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center">
                <Link to="/" className="backto-home"><i className="fas fa-chevron-left"></i>Back to Home</Link>
              </div>
              <div className="col-lg-6 text-center">
                <div className="logo">
                  <img src="assets/images/logo/logo.png" className="w-50" alt="logo" />
                  <p className='pt-4'><strong>Note: Please Sign in for finding your Dream Partner</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-6 image image-log">
            </div>
            <div className="col-lg-6">
              <div className="log-reg-inner">
                <div className="section-header inloginp">
                  <h2 className="title">Welcome to Lingayat Matrimony</h2>
                </div>
                <div className="main-content inloginp">
                  <form onSubmit={handleSubmit(saveLoginData)} autoComplete="off">
                    <div className="form-group">
                      <label htmlFor="contactno" className="form-label">Contact no/संपर्क क्रमांक:</label>
                      <input
                        {...register("contact", {
                          required: "Please enter contact number/संपर्क क्रमांक",
                          minLength: { value: 8, message: "At least 8 digit" },
                          maxLength: { value: 10, message: "Enter max 10 digit" },
                        })}
                        type="text"
                        className="my-form-control"
                        id="contactno" />
                      {errors.contact && (
                        <span style={{ color: "red" }}>{errors.contact.message}</span>
                      )}
                      <br />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password/पासवर्ड:</label>
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
                        <span style={{ color: "red" }}>
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <p className="f-pass">Forgot your password? <Link to="#">recover password</Link></p>
                    <div className="button-wrapper">
                      {/* <Link to="/single_profile2"> */}
                      <button type="submit" className="custom-button mr-5">SignIn
                      </button>
                      {/* </Link> */}
                      {/* <Link to="/registration"> */}
                      <button type="submit" className="custom-button ml-4" onClick={() => navigate("/registration")}>Registration
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
      {/* <!-- ========== Login & Registation Section ========== --> */}
    </div>
  )
}
