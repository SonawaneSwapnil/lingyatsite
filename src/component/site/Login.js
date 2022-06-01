import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export default function Login () {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      console.log(data.name);
    };
    let navigate=useNavigate();
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
          <div className="col-lg-7 ">
            <div className="logo">
              <img src="assets/images/logo/logo.png" className="w-50" alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-end">
        <div className="image image-log">
        </div>
        <div className="col-lg-7">
          <div className="log-reg-inner">
            <div className="section-header inloginp">
              <h2 className="title">
                Welcome to Lingayat Matrimony
              </h2>
            </div>
            <div className="main-content inloginp">
              <form onSubmit={handleSubmit(onSubmit)}>
              
                <div className="form-group">
                <label for="contactno" className="form-label">
                  Contact no/संपर्क क्रमांक
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
                  placeholder="Enter your contact no/संपर्क क्रमांक"
                />
                {errors.contact && (
                  <span style={{ color: "red" }}>{errors.contact.message}</span>
                )}
                <br />
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1" className="form-label">
                  Password/पासवर्ड
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
                <p className="f-pass">
                  Forgot your password? <Link to="#">recover password</Link>
                </p>
                <div className="button-wrapper">
                {/* <Link to="/single_profile2"> */}
                  <button type="submit" className="custom-button" onClick={()=>navigate("/login")}>SignIn
                  </button>
                      {/* </Link> */}
                      
                    {/* <Link to="/registration"> */}
                         <button type="submit" className="custom-button" onClick={()=>navigate("/registration")}>Registration
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
