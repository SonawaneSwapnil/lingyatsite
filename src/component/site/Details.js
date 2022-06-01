import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Details() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.name);
  };
  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Add More Information</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="">Home</Link>
              </li>

              <li>Add More Information</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="left-profile-area">
                <div className="profile-about-box">
                  <div className="top-bg"></div>
                  <div className="p-inner-content">
                    <div className="profile-img">
                      <img
                        src="assets/images/profile/profile-user.png"
                        alt=""
                      />
                      <div className="active-online"></div>
                    </div>
                    <h5 className="name">Albert Don</h5>
                    <ul className="p-b-meta-one">
                      <li>
                        <span>21 Years Old</span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className="fas fa-map-marker-alt"></i>Paris,France
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="profile-meta-box"></div>
                <div className="profile-uplodate-photo">
                  <h4 className="p-u-p-header">
                    <i className="fas fa-camera"></i> 21 Upload Photos
                  </h4>
                  <div className="p-u-p-list">
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up1.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up1.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up2.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up2.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up3.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up3.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up4.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up4.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up5.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up5.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-col">
                      <div className="img">
                        <img src="assets/images/profile/up6.jpg" alt="" />
                        <div className="overlay">
                          <Link
                            to="assets/images/profile/up6.jpg"
                            className="light-box mfp-iframe"
                          >
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="profile-main-content">
                <ul className="top-menu">
                  <li>
                    <Link to="/single_profile2" className="active">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/details">Add More Information</Link>
                  </li>

                  <li>
                    <Link to="/single_profile3">Members</Link>
                  </li>
                  <li>
                    <Link to="/Search">search</Link>
                  </li>
                </ul>
                <div className="mt-4">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="content-title text-center">
                      Personal Detail/वैयक्तिक माहिती
                    </h4>

                    <div className="form-group">
                      <label for="exampleInputname" className="form-label">
                        Name/नाव*
                      </label>
                      <input
                        {...register("name", {
                          required: "Enter your full name/पूर्ण नाव",
                        })}
                        type="text"
                        placeholder="Enter your full name/पूर्ण नाव"
                        className="my-form-control"
                        id="exampleInputname"
                      />
                      {""}
                      {errors.name && (
                        <span style={{ color: "red" }}>
                          {errors.name.message}
                        </span>
                      )}
                      <br />
                    </div>

                    <div className="form-group">
                      <label
                        for="exampleInputdate"
                        className="form-label text-center"
                      >
                        Date Of Birth/जन्मतारीख
                      </label>
                      <input
                        {...register("date", {
                          required: "Enter your Date Of Birth/जन्मतारीख",
                        })}
                        type="date"
                        className="my-form-control"
                        id="exampleInputdate"
                      />
                      {""}
                      {errors.date && (
                        <span style={{ color: "red" }}>
                          {errors.date.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label
                        for="exampleInputdateplace"
                        className="form-label text-center"
                      >
                        Birth Place/जन्मतारीख ठिकाण
                      </label>
                      <input
                        {...register("place", {
                          required: "Enter your Birth Place/जन्मतारीख ठिकाण",
                        })}
                        type="text"
                        placeholder="Enter your Birth Place/जन्मतारीख ठिकाण"
                        className="my-form-control"
                        id="exampleInputplace"
                      />
                      {""}
                      {errors.place && (
                        <span style={{ color: "red" }}>
                          {errors.place.message}
                        </span>
                      )}
                      <br />
                    </div>

                    <div className="form-group">
                      <label
                        for="exampleInputdatetime"
                        className="form-label text-center"
                      >
                        Birth time/जन्म वेळ
                      </label>
                      <input
                        {...register("time", {
                          required: "Enter your  Birth time/जन्म वेळ",
                        })}
                        type="time"
                        className="my-form-control"
                        id="exampleInputtime"
                      />
                      {""}
                      {errors.time && (
                        <span style={{ color: "red" }}>
                          {errors.time.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label
                        for="exampleInputedu"
                        className="form-label text-center"
                      >
                        Educational Qualification/शैक्षणिक पात्रता
                      </label>
                      <input
                        {...register("edu", {
                          required:
                            "Enter your Educational Qualification/शैक्षणिक पात्रता",
                        })}
                        type="text"
                        placeholder="Enter your Educational Qualification/शैक्षणिक पात्रता"
                        className="my-form-control"
                        id="exampleInputedu"
                      />
                      {""}
                      {errors.edu && (
                        <span style={{ color: "red" }}>
                          {errors.edu.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label
                        for="exampleInputser"
                        className="form-label text-center"
                      >
                        Service or Business/सेवा किंवा व्यवसाय
                      </label>
                      <input
                        {...register("service", {
                          required:
                            "Enter your Service or Business/सेवा किंवा व्यवसाय",
                        })}
                        type="text"
                        placeholder="Enter your Service or Business/सेवा किंवा व्यवसाय"
                        className="my-form-control"
                        id="exampleInputser"
                      />
                      {""}
                      {errors.service && (
                        <span style={{ color: "red" }}>
                          {errors.service.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="row">
                      <label
                        for="inputincome"
                        className="col-sm-6 col-form-label text-center"
                      >
                        {" "}
                        Income/उत्पन्न
                      </label>
                      <label
                        for="inputdesignation"
                        className="col-sm-6 col-form-label text-center"
                      >
                        Designation/हुद्दा
                      </label>
                    </div>
                    <div className="row input-group ">
                      <input
                        {...register("income", {
                          required: "Enter your  Income/उत्पन्न",
                        })}
                        type="number"
                        className="my-form-control col-sm-5 mr-5 ml-3"
                        id="exampleInputincome"
                      />
                      {""}
                      {errors.income && (
                        <span style={{ color: "red" }}>
                          {errors.income.message}
                        </span>
                      )}
                      <br />
                      <input
                        {...register("income", {
                          required: "Enter your  Designation/हुद्दा",
                        })}
                        type="desig"
                        className="my-form-control col-sm-5 ml-5 mr-2"
                        id="exampleInputdesig"
                      />
                      {""}
                      {errors.desig && (
                        <span style={{ color: "red" }}>
                          {errors.desig.message}
                        </span>
                      )}
                      <br />
                    </div>

                    <div className="row">
                      <label
                        for="inputincome"
                        className="col-sm-6 col-form-label text-center"
                      >
                        {" "}
                        Workplace/कामाची जागा
                      </label>
                      <label
                        for="inputdesignation"
                        className="col-sm-6 col-form-label text-center"
                      >
                        Height/उंची
                      </label>
                    </div>
                    <div className="row input-group ">
                      <input
                        type="number"
                        className="my-form-control col-sm-5 mr-5 ml-3"
                        id="exampleInputdate"
                      />
                      <input
                        type="number"
                        className="my-form-control col-sm-5 ml-5 mr-2"
                        id="exampleInputdate"
                      />
                    </div>

                    <div className="row">
                      <label
                        for="inputincome"
                        className="col-sm-6 col-form-label text-center"
                      >
                        Blood-Group/रक्त गट
                      </label>
                      <label
                        for="inputdesignation"
                        className="col-sm-6 col-form-label text-center "
                      >
                        Color/रंग
                      </label>
                    </div>
                    <div className="row input-group ">
                      <input
                        type="number"
                        className="my-form-control col-sm-5 mr-5 ml-3"
                        id="exampleInputdate"
                      />
                      <input
                        type="number"
                        className="my-form-control col-sm-5 ms-3 ml-5 mr-2"
                        id="exampleInputdate"
                      />
                    </div>
                    <div className="row">
                      <label
                        for="inputincome"
                        className="col-sm-6 col-form-label text-center"
                      >
                        {" "}
                        Weight/वजन
                      </label>
                      <label
                        for="inputdesignation"
                        className="col-sm-6 col-form-label text-center"
                      >
                        Address/पत्ता
                      </label>
                    </div>
                    <div className="row input-group ">
                      <input
                        type="number"
                        className="my-form-control col-sm-5 mr-5 ml-3"
                        id="exampleInputdate"
                      />
                      <input
                        type="number"
                        className="my-form-control col-sm-5 ms-3 ml-5 mr-2"
                        id="exampleInputdate"
                      />
                    </div>

                    <div className="button-wrapper d-grid gap-2 col-6 mx-auto mt-3">
                      <Link to="/family">
                        <button type="submit" className="custom-button ml-5">
                          Save and Continue
                        </button>
                      </Link>
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
