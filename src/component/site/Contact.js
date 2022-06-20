import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Service from "../../service/Service";

export default function Contact() {
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const saveFeedback = (data) => {
    console.log(data);
    Service.saveAllFeedback(data).then((res) => {
      console.log(res.data);
      alert("feedback save successful");
      navigate("/");
    });
  };

  let navigate = useNavigate();

  return (
    <div>
      {/* {/ <!-- ==========Breadcrumb-Section========== --> /} */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title">contact us</h2>
            <ul className="breadcrumb-list">
              <li><Link to="/">Home</Link></li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== -->
    <!-- ==========Contact-Section========== --> */}
      <section className="contact-section">
        {/* <!-- <img className="img-left" src="assets/images/contact/img-left.png" alt="">
        <img className="img-right" src="assets/images/contact/img-right.png" alt=""> --> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="content">
              <div className="section-header">
                <div className="col-lg-12">
                  <h6 className="sub-title">Contact Us</h6>
                  <h2 className="title">Get in Touch</h2>
                  <p className="text text-danger">
                    <strong>
                      please suggestion or feedback enter here to easily find your partner.<br />
                      (तुमचा जोडीदार सहज शोधण्यासाठी कृपया सूचना किंवा अभिप्राय येथे प्रविष्ट करा.)
                    </strong>
                  </p>
                </div>
                <div className="contact-form-wrapper">
                  <form onSubmit={handleSubmit(saveFeedback)}>
                    <div className="single-input">
                      <div className="row">
                        <div className="col-12">
                          <i className="far fa-user"></i>
                          <input
                            type="text"
                            placeholder="Full Name/पूर्ण नाव"
                            {...register("name", { required: "Please enter your first name" })}
                          />
                        </div>
                        <div className="col-12 text-left">
                          {errors.name && (<span style={{ color: "red" }}>{errors.name.message}</span>)}
                        </div>
                      </div>
                    </div>
                    <div className="single-input">
                      <div className="row">
                        <div className="col-12">
                          <i className="far fa-envelope"></i>
                          <input
                            type="number"
                            placeholder="Contact No/संपर्क क्रमांक"
                            {...register("contact", {
                              required: "Please enter contact number/संपर्क क्रमांक",
                              minLength: { value: 10, message: "At least 10 digit" },
                              maxLength: { value: 10, message: "Enter max 10 digit", },
                            })}
                          />
                        </div>
                        <div className="col-12 text-left">
                          {errors.contact && (<span style={{ color: "red", textAlign: "left" }}>{errors.contact.message}</span>)}
                        </div>
                      </div>
                    </div>
                    <div className="single-input">
                      <div className="row">
                        <div className="col-12">
                          <i className="far fa-comments"></i>
                          <input
                            type="text"
                            placeholder="Type Your Text/अभिप्राय"
                            {...register("feedback", { required: "Please enter your feedback" })}
                          />
                        </div>
                        <div className="col-12 text-left">
                          {errors.feedback && (<span style={{ color: "red" }}>{errors.feedback.message}</span>)}
                        </div>
                      </div>
                    </div>
                    <div className="button-wrapper d-grid gap-2 col-6 mx-auto mt-3">
                      <button type="submit" className="custom-button ml-5">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}