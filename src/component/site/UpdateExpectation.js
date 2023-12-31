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
  const [userPhotos, setUserPhotos] = useState({
    passportPhotoFile: [],
    passportPhotoPreview: null,
    fullPhotoFile: [],
    fullPhotoPreview: null,
  });
  const [invalidImage, setinvalidImage] = useState(null);
  let reader = new FileReader();
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
        reset(res.data[0]);
      }
    );
  };

  const passportHandler = (event) => {
    setPassportPhoto(event.target.files[0]);
  };
  const fullphotoHandler = (event) => {
    setFullPhoto(event.target.files[0]);
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
    fd.append("passport", userPhotos.passportPhotoFile);
    fd.append("fullphoto", userPhotos.fullPhotoFile);
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

  // image compress code

  const handleFileChange = (event, type) => {
    const imageFile = event.target.files[0];
    const imageFilname = event.target.files[0].name;

    if (!imageFile) {
      setinvalidImage("Please select image.");
      return false;
    }

    if (!imageFile.name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG|gif)$/)) {
      setinvalidImage("Please select valid image JPG,JPEG,PNG");
      return false;
    }
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        //------------- Resize img code ----------------------------------
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var MAX_WIDTH = 437;
        var MAX_HEIGHT = 437;
        var width = img.width;
        var height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        ctx.canvas.toBlob(
          (blob) => {
            const file = new File([blob], imageFilname, {
              type: "image/jpeg",
              lastModified: Date.now(),
            });
            if (type == "passportPhoto") {
              setUserPhotos({
                ...userPhotos,
                passportPhotoFile: file,
                passportPhotoPreview: URL.createObjectURL(imageFile),
              });
            } else if (type == "fullPhoto") {
              setUserPhotos({
                ...userPhotos,
                fullPhotoFile: file,
                fullPhotoPreview: URL.createObjectURL(imageFile),
              });
            }
          },
          "image/jpeg",
          1
        );
        setinvalidImage(null);
      };
      img.onerror = () => {
        setinvalidImage("Invalid image content.");
        return false;
      };
      //debugger
      img.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h4 className="title extra-padding">
              Add/Update Expectation Information
            </h4>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="/">Home</Link>
              </li>
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
                      <li>
                        <NavLink to="/profile">Profile</NavLink>
                      </li>
                      <li>
                        <NavLink to="/update-profile" className="active">
                          Add/Update Information
                        </NavLink>
                      </li>
                      {/* <li><NavLink to="/single_profile3">Members</NavLink></li> */}
                      <li>
                        <NavLink to="/Search">search</NavLink>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <form onSubmit={handleSubmit(updateRecord)}>
                        <h4 className="content-title text-center info-main-title">
                          Expectation/अपेक्षा वधू/वर
                        </h4>
                        <div className="mx-5">
                          <label className="form-label ititle">
                            Expection/अपेक्षा वधू/वर
                          </label>
                          <textarea
                            className="my-form-control"
                            {...register("expectation", {
                              required: "Please Expection/अपेक्षा वधू/वर",
                            })}
                          />
                          {errors.expectation && (
                            <span style={{ color: "red" }}>
                              {errors.expectation.message}
                            </span>
                          )}
                        </div>

                        <div className="mx-5">
                          <label className="form-label ititle">
                            Add Photo/फोटो जोडा
                          </label>
                          <div className="input-group">
                            <label className="form-label ititle">
                              1.Passport Photo/पासपोर्ट फोटो
                            </label>
                            <input
                              type="file"
                              className="my-form-control input-no-border"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                              {...register("passport", {
                                required: "Please select photo",
                              })}
                              onChange={(e) =>
                                handleFileChange(e, "passportPhoto")
                              }
                            />
                            {errors.passport && (
                              <span style={{ color: "red" }}>
                                {errors.passport.message}
                              </span>
                            )}

                          </div>

                          <div className="input-group">
                            <label className="form-label ititle">
                              2.Full Photo/पूर्ण फोटो
                            </label>
                            <input
                              type="file"
                              multiple
                              className="my-form-control input-no-border"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label=""
                              {...register("fullphoto", {
                                required: "Please select photo",
                              })}
                              onChange={(e) => handleFileChange(e, "fullPhoto")}
                            />
                            {errors.fullphoto && (
                              <span style={{ color: "red" }}>
                                {errors.fullphoto.message}
                              </span>
                            )}
                          </div>
                          {invalidImage !== null ? <span style={{ color: "red" }}> {invalidImage} </span> : null}
                        </div>

                        <div className="row mt-5 text-center">
                          <Link to='/update-family' className="col-lg-6 col-md-6">
                            <button className="custom-button w-100">Back</button>
                          </Link>
                          <div className="col-lg-6 col-md-6 btn-mt">
                            <button type="submit" className="custom-button w-100">Save and Continue</button>
                          </div>
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
