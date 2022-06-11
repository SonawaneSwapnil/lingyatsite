import React from "react";
import { Link,NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Service from "../../service/Service";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Family() {
  const [userUpdateData, setuserUpdateData] = useState();
  const [user_id, setuser_id] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = () => {
    setuser_id(JSON.parse(localStorage.getItem("USERID")));
    Service.getSingleUser(JSON.parse(localStorage.getItem("USERID"))).then(
      (res) => {
        setuserUpdateData(res.data);
        console.log(res.data);
      }
    );
  };

  // const saveData = (data) => {
  //   console.log(data);
  //   Service.saveAllUsers(data).then((res) => {
  //     console.log(res.data);
  //     alert("Data Saved successfully");
  //     reset();
  //     loadAllData();
  // });
    
  // };
  // Update
 
  const updateRecord = () => {
    var data = {
      father: getValues("father"),
      mother: getValues("mother"),
      brother: getValues("brother"),
      sister: getValues("sister"),
      father_contact: getValues("father_contact"),
      mother_contact: getValues("mother_contact"),
      brother_contact: getValues("brother_contact"),
      sister_contact: getValues("sister_contact"),
      user_id: user_id
    };

    Service.updateFamily(data)
      .then((res) => {
        alert("record Updated successsfully");
        // loadAllData();
        navigate("/expectation");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let navigate=useNavigate();
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
        {userUpdateData && userUpdateData.map(index=>(
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
                    <h5 className="name">{index.user_name}</h5>
                    <ul className="p-b-meta-one">
                      <li>
                        <span>21 Years Old</span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className="fas fa-map-marker-alt"></i>
                          {index.city}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="profile-meta-box"></div>
                <div className="profile-uplodate-photo">
                            <h4 className="p-u-p-header">
                                <i className="fas fa-camera"></i> 4 Upload Photos
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
                                {/* <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up2.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up2.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div> */}
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
                                
                            </div>
                        </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="profile-main-content">
              <ul className="top-menu">
                  <li>
                    <NavLink to="/single_profile2" >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/details" className="active">Add More Information</NavLink>
                  </li>

                  <li>
                    <NavLink to="/single_profile3">Members</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Search" >search</NavLink>
                  </li>
                </ul>
                <div className="mt-4">
                  <form onSubmit={handleSubmit(updateRecord)}>
                    <h4 className="content-title text-center">
                      Family Information/कौटुंबिक माहिती
                    </h4>

                    <div className="row">
                      <label
                        for="inputincome"
                        className="col-sm-6 col-form-label text-center"
                      >
                        {" "}
                        Father Name/वडीलांचे नावं
                      </label>
                      <label
                        for="inputdesignation"
                        className="col-sm-6 col-form-label text-center"
                      >
                        Contact Number/संपर्क क्रमांक
                      </label>
                    </div>
                    <div className="row input-group ">
                      <input
                        {...register("father", {
                          required: "Enter Your Father Name/वडीलांचे नाव",
                        })}
                        type="text"
                        placeholder="Enter Your Father Name/वडीलांचे नाव"
                        className="my-form-control col-sm-5 ms-3 ml-5 mr-2"
                        id="exampleInputname"
                      />

                      <input
                        {...register("father_contact", {
                          required: " Enter Contact No/संपर्क क्रमांक",
                          minLength: { value: 8, message: "At least 8 digit" },
                          maxLength: {
                            value: 10,
                            message: "Enter max 10 digit",
                          },
                        })}
                        type="text"
                        className="my-form-control col-sm-5 ml-4 "
                        id="contactno"
                        placeholder="Enter your Contact No/संपर्क क्रमांक"
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-5 ms-3 ml-5 mr-2">
                        {errors.father && (
                          <span style={{ color: "red" }}>
                            {errors.father.message}
                          </span>
                        )}
                      </div>
                      <div className="col-sm-5 ms-3 ml-5 mr-2">
                        {errors.father_contact && (
                          <div style={{ color: "red" }}>
                            {errors.father_contact.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <label
                        for="inputincome"
                        className="col-sm-6 col-form-label text-center"
                      >
                        {" "}
                        Mother Name/आईचे नाव
                      </label>
                      <label
                        for="inputdesignation"
                        className="col-sm-6 col-form-label text-center"
                      >
                        Contact Number/संपर्क क्रमांक
                      </label>
                    </div>
                    <div className="row input-group ">
                      <input
                        type="text"
                        placeholder="Enter your Mother Name/आईचे नाव"
                        className="my-form-control col-sm-5 ms-3 ml-5 mr-2"
                        id="exampleInputname" 
                        {...register("mother", {
                          required: "Enter Your Father Name/वडीलांचे नाव",
                        })}
                      />
                      <input
                        type="text"
                        className="my-form-control col-sm-5 ml-4 "
                        id="contactno"
                        placeholder="Enter your mobile no"
                        {...register("mother_contact", {
                          required: "Enter Your Father Name/वडीलांचे नाव",
                        })}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-5 ms-3 ml-5 mr-2">
                        {errors.mother && (
                          <span style={{ color: "red" }}>
                            {errors.mother.message}
                          </span>
                        )}
                      </div>
                      <div className="col-sm-5 ms-3 ml-5 mr-2">
                        {errors.mother_contact && (
                          <div style={{ color: "red" }}>
                            {errors.mother_contact.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <label
                        for="inputincome"
                        className="col-sm-6 col-form-label text-center"
                      >
                        {" "}
                        Brother Name/भावाचे नाव
                      </label>
                      <label
                        for="inputdesignation"
                        className="col-sm-6 col-form-label text-center"
                      >
                        Contact Number/संपर्क क्रमांक
                      </label>
                    </div>
                    <div className="row input-group ">
                      <input
                        type="text"
                        placeholder="Enter your Brother Name/भावाचे नाव"
                        className="my-form-control col-sm-5 ms-3 ml-5 mr-2"
                        id="exampleInputname"
                        {...register("brother", {
                          required: "Enter Your Father Name/वडीलांचे नाव",
                        })}
                      />
                      <input
                        type="text"
                        className="my-form-control col-sm-5 ml-4 "
                        id="contactno"
                        placeholder="Enter your mobile no"
                        {...register("brother_contact", {
                          required: "Enter Your Father Name/वडीलांचे नाव",
                        })}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-5 ms-3 ml-5 mr-2">
                        {errors.brother && (
                          <span style={{ color: "red" }}>
                            {errors.brother.message}
                          </span>
                        )}
                      </div>
                      <div className="col-sm-5 ms-3 ml-5 mr-2">
                        {errors.brother_contact && (
                          <div style={{ color: "red" }}>
                            {errors.brother_contact.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <label
                        for="inputincome"
                        className="col-sm-6 col-form-label text-center"
                      >
                        {" "}
                        Sister Name/बहिणीचे नाव
                      </label>
                      <label
                        for="inputdesignation"
                        className="col-sm-6 col-form-label text-center"
                      >
                        Contact Number/संपर्क क्रमांक
                      </label>
                    </div>
                    <div className="row input-group ">
                      <input
                        type="text"
                        placeholder=" Enter Sister Name/बहिणीचे नाव"
                        className="my-form-control col-sm-5 ms-3 ml-5 mr-2"
                        id="exampleInputname"
                        {...register("sister", {
                          required: "Enter Your Father Name/वडीलांचे नाव",
                        })}
                      />
                      <input
                        type="text"
                        className="my-form-control col-sm-5 ml-4 "
                        id="contactno"
                        placeholder="Enter your mobile no"
                        {...register("sister_contact", {
                          required: "Enter Your Father Name/वडीलांचे नाव",
                        })}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-5 ms-3 ml-5 mr-2">
                        {errors.sister && (
                          <span style={{ color: "red" }}>
                            {errors.sister.message}
                          </span>
                        )}
                      </div>
                      <div className="col-sm-5 ms-3 ml-5 mr-2">
                        {errors.sister_contact && (
                          <div style={{ color: "red" }}>
                            {errors.sister_contact.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="button-wrapper d-grid gap-2 col-6 mx-auto mt-3">
                      {/* <Link to="/expectation"> */}
                        <button type="submit" className="custom-button ml-5">
                          Save and Continue
                        </button>
                      {/* </Link> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </section>

      {/* <!-- ========= Profile Section Start -- */}
    </div>
  );
}
