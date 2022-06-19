import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Service from "../../service/Service";
import { useNavigate } from "react-router-dom";
import LeftProfileArea from "../common/LeftProfileArea";

export default function Expectation() {
  const [userUpdateData, setuserUpdateData] = useState();
  const [user_id, setuser_id] = useState();
  const [passportPhoto, setPassportPhoto] = useState();
  const [FullPhoto, setFullPhoto] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues, reset
  } = useForm();

  useEffect(() => {
    loadAllData();
  }, [userUpdateData]);

  const loadAllData = () => {

    setuser_id(JSON.parse(localStorage.getItem("USERID")));
    Service.getSingleUser(user_id).then((res) => {
      setuserUpdateData(res.data);
      reset(res.data[0]);
    });
  };

  const changeHandler = (event) => {
    setPassportPhoto(event.target.files[0]);

  };
  const fullphotoHandler = (event) => {
    setFullPhoto(event.target.files[0]);
  }
  const updateRecord = () => {
    var data = {
      expectation: getValues("expectation"),
      passport: getValues("passport"),
      fullphoto: getValues("fullphoto"),
      user_id: user_id,
    };
    let fd = new FormData();
    fd.append("expectation", data.expectation);
    fd.append("passport", passportPhoto);
    fd.append("fullphoto", FullPhoto);
    fd.append("user_id", data.user_id);
    console.log(fd);

    Service.updateExceptation(fd)
      .then((res) => {
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
            <h2 className="title extra-padding">Add/Update Expectation Information</h2>
            <ul className="breadcrumb-list extra-padding">
              <li><Link to="/">Home</Link></li>
              <li>Add/Update Expectation Information</li>
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

                <LeftProfileArea data={userUpdateData} />

                <div className="col-xl-8 col-lg-7">
                  <div className="profile-main-content">
                    <ul className="top-menu">
                      <li><NavLink to="/profile">Profile</NavLink></li>
                      <li><NavLink to="/details" className="active">Add/Update Information</NavLink></li>
                      {/* <li><NavLink to="/single_profile3">Members</NavLink></li> */}
                      <li><NavLink to="/Search">search</NavLink></li>
                    </ul>
                    <div className="mt-4">
                      <form onSubmit={handleSubmit(updateRecord)}>
                        <h4 className="content-title text-center info-main-title">
                          Expectation/अपेक्षा वधू/वर
                        </h4>
                        <div className="mx-5">
                          <label className="form-label ititle">Expection/अपेक्षा वधू/वर</label>
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
                          <label className="form-label ititle">Add Photo/फोटो जोडा</label>
                          <div className="input-group">
                            <label className="form-label ititle">1.Passport Photo/पासपोर्ट फोटो</label>
                            <input
                              type="file"
                              className="my-form-control input-no-border"
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
                            <label className="form-label ititle">2.Full Photo/पूर्ण फोटो</label>
                            <input
                              type="file"
                              multiple
                              className="my-form-control input-no-border"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label=""
                              {...register("fullphoto", {
                                required: "Please enter fullphoto photo",
                              })}
                              onChange={fullphotoHandler}
                            />
                            {errors.fullphoto && (
                              <span style={{ color: "red" }}>
                                {errors.fullphoto.message}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="button-wrapper text-center">
                          {/* <Link to="/profile"> */}
                          <button type="submit" className="custom-button w-50">Submit</button>
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