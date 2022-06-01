import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Family() {
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
                <h2 className="title extra-padding">
                   Add More Information
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                        <Link to="">
                            Home
                        </Link>
                    </li>

                    <li>
                        Add More Information
                    </li>
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
                                    <img src="assets/images/profile/profile-user.png" alt=""/>
                                    <div className="active-online"></div>
                                </div>
                                <h5 className="name">
                                    Albert Don
                                </h5>
                                <ul className="p-b-meta-one">
                                    <li>
                                        <span>21 Years Old</span>
                                    </li>
                                    <li>
                                        <span> <i className="fas fa-map-marker-alt"></i>Paris,France</span>
                                    </li>
                                </ul>
                               
                            </div>
                        </div>
                        <div className="profile-meta-box">
                                                    </div>
                        <div className="profile-uplodate-photo">
                            <h4 className="p-u-p-header">
                                <i className="fas fa-camera"></i> 21 Upload Photos
                            </h4>
                            <div className="p-u-p-list">
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up1.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up2.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up2.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up3.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up3.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up4.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up4.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up5.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up5.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up6.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up6.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
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
                                <Link to="/details">
                                    Add More Information
                                </Link>
                            </li>
                           
                            <li>
                                <Link to="single-profile3.html">
                                    Members
                                  
                                </Link>
                            </li>
                            <li>
                                <Link to="profile-notfound.html">
                                   Search
                                    
                                </Link>
                            </li>
                           
                        </ul>
                        <div classNameName="mt-4">
            <form
                  onSubmit={handleSubmit(onSubmit)}
                 
                >
                  <h3 classNameName="mt-3 text-center">Family Information/कौटुंबिक माहिती</h3>                 
                  <div className="row text-center">
              <label
                for="inputincome"
                className="col-sm-6 col-form-label"
              >
                {" "}
                Father Name
              </label>
              <label for="inputdesignation" className="col-sm-6 col-form-label ">
                Contact Number
              </label>
            </div>
            
            <div classNameName="row justify-content-around">
            <input
                {...register("name", {
                  required: "Enter your Father Name name/वडीलांचे नाव",
                })}
                type="text"
                placeholder="Enter your Father Name/वडीलांचे नाव"
                classNameName="myform-control col-sm-5"
                id="exampleInputname"
              />
              {""}
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
              <br />
              <input
                  {...register("contact", {
                    required: "Please enter contact",
                    minLength: { value: 8, message: "At least 8 digit" },
                    maxLength: { value: 10, message: "Enter max 10 digit" },
                  })}
                  type="text"
                  classNameName="my-form-control col-sm-5"
                  id="contactno"
                  placeholder="Enter your mobile no"
                />
                {errors.contact && (
                  <span style={{ color: "red" }}>{errors.contact.message}</span>
                )}
                <br />
            </div>
            <div className="row text-center">
              <label
                for="inputincome"
                className="col-sm-6 col-form-label"
              >
                {" "}
                Mother Name
              </label>
              <label for="inputdesignation" className="col-sm-6 col-form-label ">
                Contact Number
              </label>
            </div>
            <div classNameName="row justify-content-around">
              <input
                type="number"
                classNameName="my-form-control col-sm-5 "
                id="exampleInputdate"
              />
              <input
                type="number"
                classNameName="my-form-control col-sm-5"
                id="exampleInputdate"
              />
            </div>
            <div className="row text-center">
              <label
                for="inputincome"
                className="col-sm-6 col-form-label"
              >
                {" "}
               Brother Name
              </label>
              <label for="inputdesignation" className="col-sm-6 col-form-label ">
                Contact Number
              </label>
            </div>
            <div classNameName="row justify-content-around">
              <input
                type="number"
                classNameName="my-form-control col-sm-5 "
                id="exampleInputdate"
              />
              <input
                type="number"
                classNameName="my-form-control col-sm-5"
                id="exampleInputdate"
              />
            </div>
            <div className="row text-center">
              <label
                for="inputincome"
                className="col-sm-6 col-form-label"
              >
                {" "}
               Sister Name
              </label>
              <label for="inputdesignation" className="col-sm-6 col-form-label ">
                Contact Number
              </label>
            </div>
            <div classNameName="row justify-content-around">
              <input
                type="number"
                classNameName="my-form-control col-sm-5"
                id="exampleInputdate"
              />
              <input
                type="number"
                classNameName="my-form-control col-sm-5"
                id="exampleInputdate"
              />
            </div>
            <div className="row text-center">
              <label
                for="inputincome"
                className="col-sm-6 col-form-label "
              >
                {" "}
              Family Income
              </label>
              <label for="inputdesignation" className="col-sm-6 col-form-label">
                Property
              </label>
            </div>
            <div classNameName="row justify-content-around from-group">
              <input
                type="number"
                classNameName="my-form-control col-5"
                id="exampleInputdate"
              />
              <input
                type="number"
                classNameName="my-form-control col-5"
                id="exampleInputdate"
              />
            </div>
            <div classNameName="button-wrapper d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                <Link to="/expectation">
                  <button type="submit" classNameName="custom-button">Save and Continue
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
  )
}
