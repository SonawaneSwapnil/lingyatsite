import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authentication } from "../../config/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Service from "../../service/Service";

export default function VerifyOtp() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [newContact, setNewContact] = useState(false);
  const [showErrMsg, setShowErrMsg] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [OTP, setOTP] = useState();
  const [isOtpSend, setIsOtpSend] = useState(false);
  let userData = JSON.parse(localStorage.getItem("RUser"));
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("contact", userData.contact);
    console.log(userData);
  }, []);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const initVerify = (data) => {
    setNewContact(data.contact);
    sendOTP("+91" + data.contact);

  };

  const sendOTP = (contact) => {
    if (!window.recaptchaVerifier) {
      generateRecaptcha();
    }
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, contact, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setIsOtpSend(true);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          setShowErrMsg(false);
          const user = result.user;
          userData.contact = newContact;
          console.log(userData);
          Service.saveAllUsers(userData).then((res) => {
            navigate("/login");
          });
        })
        .catch((error) => {
          setErrMsg("Invalid code..!");
          setShowErrMsg(true);
          console.log(error);
        });
    }
  };

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h4 className="title extra-padding">Contact Verification</h4>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="">Home</Link></li>
              <li>Contact Verification</li>
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
                {showErrMsg && (<div className="alert alert-danger" role="alert">{errMsg}</div>)}
                <div className="mt-4">
                  <form onSubmit={handleSubmit(initVerify)} autoComplete="off">
                    <div className="row d-flex justify-content-center">
                      <h4 className="content-title text-center">Verify Your Contact</h4>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <label htmlFor="inputdesignation" className="ititle ml-5 mt-3">
                        Contact Number/संपर्क क्रमांक
                      </label>
                    </div>
                    <div className="row input-group d-flex justify-content-center">
                      <input
                        {...register("contact", {
                          required: "Enter contact number/संपर्क क्रमांक",
                          minLength: { value: 10, message: "Enter At least 10 digit contact no/संपर्क क्रमांक" },
                          maxLength: { value: 10, message: "Enter max 10 digit contact no/संपर्क क्रमांक" },
                        })}
                        type="number"
                        className="my-form-control ml-5 mr-3"
                        id="contactno"
                        autoComplete="off" />
                      {errors.contact && (<span style={{ color: "red" }}>{errors.contact.message}</span>)}
                      <br />
                      <div id="recaptcha-container"></div>
                    </div>

                    <div className="button-wrapper d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                      {show ?
                        (<input type="text" placeholder="Enter Your OTP" className="mb-3" value={OTP} onChange={verifyOTP} />)
                        : null
                      }

                      <button type="submit" className="custom-button">Verify and Continue</button>
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
