import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
import { useNavigate } from "react-router-dom";
export default function Expectation() {
  const [userUpdateData, setuserUpdateData] = useState();
  const [user_id, setuser_id] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
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
  // const saveExcepData = (data) => {
  //   let fd = new FormData();
  //   fd.append("expectation", data.expectation);
  //   fd.append("passport", data.passport[0]);
  //   // fd.append("fullphoto", data.fullphoto[0]);
  //   console.log(data);
  //   Service.saveAllEceptation(fd).then((res) => {
  //     console.log(fd);
  //     alert("Data saved successfully");
  //     navigate("/single_profile2");
  //   });
  // };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const updateRecord = () => {
    var data = {
      expectation: getValues("expectation"),
      passport: getValues("passport"),
      fullphoto: getValues("fullphoto"),
      user_id: user_id,
    };
    let fd = new FormData();
    fd.append("expectation", data.expectation);
    fd.append("passport", selectedFile);
    fd.append("fullphoto", selectedFile);
    fd.append("user_id", data.user_id);
    console.log(fd);

    Service.updateExceptation(fd)
      .then((res) => {
        // alert("record Updated successsfully");
        // loadAllData();
        navigate("/search");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let navigate = useNavigate();
  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Add More Information</h2>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="">Home</Link></li>
              <li>Add More Information</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        {userUpdateData &&
          userUpdateData.map((index) => (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-7">
                  <div className="left-profile-area">
                    <div className="profile-about-box">
                      <div className="top-bg"></div>
                      <div className="p-inner-content">
                        <div className="profile-img">
                          <img src="assets/images/profile/profile-user.png" alt="" />
                          <div className="active-online"></div>
                        </div>
                        <h5 className="name">{index.user_name}</h5>
                        <ul className="p-b-meta-one">
                          <li><span>{index.age} Years Old</span></li>
                          <li>
                            <span> <i className="fas fa-map-marker-alt"></i>{index.city}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="profile-meta-box">
                      <div className="profile-uplodate-photo">
                        <h4 className="p-u-p-header"><i className="fas fa-camera"></i> 4 Upload Photos</h4>
                        <div className="p-u-p-list">
                          <div className="my-col">
                            <div className="img">
                              <img src="assets/images/profile/up1.jpg" alt="" />
                              <div className="overlay">
                                <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe">
                                  <i className="fas fa-plus"></i>
                                </Link>
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
                              <img src="assets/images/profile/up3.jpg" alt="" />
                              <div className="overlay">
                                <Link to="assets/images/profile/up3.jpg" className="light-box mfp-iframe">
                                  <i className="fas fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-col">
                            <div className="img">
                              <img src="assets/images/profile/up4.jpg" alt="" />
                              <div className="overlay">
                                <Link to="assets/images/profile/up4.jpg" className="light-box mfp-iframe">
                                  <i className="fas fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-col">
                            <div className="img">
                              <img src="assets/images/profile/up5.jpg" alt="" />
                              <div className="overlay">
                                <Link to="assets/images/profile/up5.jpg" className="light-box mfp-iframe">
                                  <i className="fas fa-plus"></i>
                                </Link>
                              </div>
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
                      <li><NavLink to="/single_profile2">Profile</NavLink></li>
                      <li><NavLink to="/details" className="active">Add More Information</NavLink></li>
                      {/* <li><NavLink to="/single_profile3">Members</NavLink></li> */}
                      <li><NavLink to="/Search">search</NavLink></li>
                    </ul>
                    <div className="mt-4">
                      <form onSubmit={handleSubmit(updateRecord)}>
                        <h4 className="content-title text-center">
                          Expectation/अपेक्षा वधू/वर
                        </h4>
                        <div className="mx-5">
                          <label className="form-label">Expection/अपेक्षा वधू/वर</label>
                          <textarea
                            className="my-form-control"
                            {...register("expectation", {
                              required: "Please enter your password/पासवर्ड",
                            })}
                          ></textarea>
                          {errors.expectation && (
                            <span style={{ color: "red" }}>
                              {errors.expectation.message}
                            </span>
                          )}
                        </div>

                        <div className="mx-5">
                          <label className="form-label ">Add Photo/फोटो जोडा</label>
                          <div className="input-group">
                            <label className="form-label ">1.Passport Photo/पासपोर्ट फोटो</label>
                            <input
                              type="file"
                              className="my-form-control"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                              {...register("passport", {
                                required: "Please enter passport photo",
                              })}
                              onChange={changeHandler} />
                            {errors.passport && (
                              <span style={{ color: "red" }}>
                                {errors.passport.message}
                              </span>
                            )}
                          </div>
                          <div className="input-group">
                            <label className="form-label me-5">2.Full Photo/पूर्ण फोटो</label>
                            <input
                              type="file"
                              multiple
                              className="my-form-control"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                              {...register("fullphoto", {
                                required: "Please enter fullphoto photo",
                              })}
                              onChange={changeHandler}
                            />
                            {errors.fullphoto && (
                              <span style={{ color: "red" }}>
                                {errors.fullphoto.message}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="button-wrapper d-grid gap-2 col-6 mx-auto mt-3">
                          {/* <Link to="/single_profile2"> */}
                          <button type="submit" className="custom-button ml-5">Submit</button>
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
