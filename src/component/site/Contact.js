import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  function feedback() {
    alert("Thank You For Your Suggestion...!!")
  }
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
                    <strong>please suggestion or feedback enter here to easily find your partner.<br />
                      (तुमचा जोडीदार सहज शोधण्यासाठी कृपया सूचना किंवा अभिप्राय येथे प्रविष्ट करा.)</strong>
                  </p>
                </div>
                <div className="contact-form-wrapper">
                  <div className="single-input">
                    <i className="far fa-user"></i>
                    <input type="text" placeholder="Full Name/पूर्ण नाव" />
                  </div>
                  <div className="single-input">
                    <i className="far fa-envelope"></i>
                    <input type="text" placeholder="Contact No/संपर्क क्रमांक" />
                  </div>
                  <div className="single-input">
                    <i className="far fa-comments"></i>
                    <input type="text" placeholder="Type Your Text/अभिप्राय" />
                  </div>
                  <div className="button-wrapper d-grid gap-2 col-6 mx-auto mt-3">
                    <Link to="/">
                      <button type="submit" className="custom-button ml-5" onClick={feedback}>
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section >
      {/* <!-- ==========Contact-Section========== -->


    <!-- ==========Faq-Section========== --> */}
      {/* <section className="faq-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="content">
                        <div className="section-header">
                            <h6 className="sub-title extra-padding">
                                Got any Question/कोणताही प्रश्न 
                            </h6>
                            <h2 className="title">
                                We’ve Got Answers/आम्हाला उत्तरे मिळाली आहेत
                            </h2> */}
      {/* <!-- <p className="text">
                                Try to check out frequently ask questions
                            </p> --> */}
      {/* </div>
                    </div>
                </div>
              </div>  
          </div>
          </section> */}
    </div >
  )
}
