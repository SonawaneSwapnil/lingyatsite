import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Service from '../../service/Service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const saveLoginData = (data => {
    Service.saveAllLogin(data).then(res => {
      if (res.data.success) {
        toast.success('Login Successful');
        localStorage.setItem("USERID", JSON.stringify(res.data.data.user_id));
        navigate('/single_profile2');
      } else if ((res.data.warning)) {
        toast.warning(res.data.warning, { position: toast.POSITION.TOP_RIGHT })
      }
    }).catch(err => {
    });
  });

  let navigate = useNavigate();
  return (
    <div>
      <ToastContainer />
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
                      <label htmlFor="contactno" className="form-label ititle">Contact no/संपर्क क्रमांक:</label>
                      <input
                        {...register("contact", {
                          required: "Please enter contact number/संपर्क क्रमांक",
                          minLength: { value: 10, message: "Use 10 digits for your contact number" },
                          maxLength: { value: 10, message: "Use 10 digits for your contact number" },
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
                      <label htmlFor="exampleInputPassword1" className="form-label ititle">Password/पासवर्ड:</label>
                      <input
                        type="password"
                        className="my-form-control"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        {...register("password", {
                          required: "Please enter your password/पासवर्ड",
                          minLength: { value: 8, message: "Use 8 characters or more for your password" },
                        })} />
                      {errors.password && (
                        <span style={{ color: "red" }}>
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <p className="f-pass">Forgot your password? <Link to="#">recover password</Link></p>
                    <div className="button-wrapper row">
                      <button type="submit" className="custom-button col-lg-5 col-sm-5 mx-2 w-75">Sign In</button>
                      <button type="submit" className="custom-button col-lg-5 col-sm-5 mx-2 w-75" onClick={() => navigate("/registration")}>Registration
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
  )
}
