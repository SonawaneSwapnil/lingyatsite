import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";
import Service from "../../service/Service";
import Loader from "../../service/Loader";

export default function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [alertClass, setAlertClass] = useState();
  const [msg, setMsg] = useState();
  let navigate = useNavigate();
  const [oldDate, setOldDate] = useState(
    moment().subtract(18, "years").format("YYYY-MM-DD")
  );
  const [uName, setuName] = useState("");
  const [uCity, setuCity] = useState("");
  const [decl, setDecl] = useState();

  useEffect(() => {
    setDecl(declarationText());
  }, [uName, uCity]);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  // function getAge(dateString) {
  //   var today = new Date();
  //   var birthDate = new Date(dateString);
  //   var age = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }
  //   return age;
  // }

  const saveData = (data) => {
    var data = {
      user_name: getValues("user_name"),
      dob: getValues("dob"),
      gender: getValues("gender"),
      contact: getValues("contact"),
      password: getValues("password"),
      looking_for_gender: getValues("looking_for_gender"),
      city: getValues("city"),
      married_status: getValues("married_status"),
      // age: getAge(moment(getValues("dob")).format("YYYY-MM-DD")),
    };
    console.log(data);
    setIsLoading(true);
    Service.saveAllUsers(data)
      .then((res) => {
        if (res.data.warning) {
          console.log(res.data.warning);
          setIsShow(true);
          setAlertClass("alert alert-danger");
          setMsg(res.data.warning);
        } else {
          localStorage.setItem("USERID", JSON.stringify(res.data.user_id));
          window.location.replace("/profile");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
    navigate("/update-profile");
  };

  // seslect opposite genders
  const handleChange = (ctrl, value) => {
    if (ctrl === "gender") {
      setValue("gender", value);
      value === "male"
        ? setValue("looking_for_gender", "female")
        : setValue("looking_for_gender", "male");
    }
    if (ctrl === "looking_for_gender") {
      setValue("looking_for_gender", value);
      value === "male"
        ? setValue("gender", "female")
        : setValue("gender", "male");
    }
  };

  function declarationText() {
    var text =
      "घोषणा(Declaration): \n    मी " +
      uName +
      " राहणार, " +
      uCity +
      " घोषीत करतो की https://www.mkvlvivah.com या वेबसाईट मध्ये दिली जाणारी माझी सर्व माहीती पूर्णपणे सत्य आहे व ती आपल्या वेबसाईट वर प्रसिद्ध करण्यासाठी माझ्या स्वर जबाबदारीवर स्वतः विनाअट परवानगी देत आहे. यासाठी मी वेबसाईट धारक किंवा कुठल्याही अन्य व्यक्तीला कोणतेही शुल्क दिलेले नाही किंवा घेतले नाही. नोंदणी केलेलेल्या उमेदवाराचे विवाह ठरल्यावर सदरची माहीती आपल्या वेबपेजवरुन  प्रोफाईल deactivate करेल. \n\n" +
      "Declaration: \n    I, write here full name, age and full address, hereby declare that with full knowledge and belief that the entire information given in this Format Application is true and correct.I authorise and permit you without reservation and unconditionally, at my risk, to circulate and publish it on your website and WhatsApp Family Group for Marriage Proposals and search for suitable Life Partner, Bride or Groom. I have not paid any money or in kinds for this publication or circulation of my family information for this purpose to this website or WA Group Administrator.This is my voluntary act for my benefits and entirely at my risk only, if any. I shall inform you in writing as soon as, say within a week, after my search or purpose is over for deletion of this information from this website and or WA Group.";

    return text.replace(/\r?\n/g, "\n");
  }

  return (
    <div>
      {/* <!-- ========== Login & Registration Section ========== --> */}
      <section className="log-reg">
        {isLoading && <Loader />}
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Link to="/" className="backto-home ml-lg-5 pl-lg-5">
                  <i className="fas fa-chevron-left"></i>Back to Home
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="logo">
                  <img
                    src="assets/images/logo/logo-old.png"
                    alt="logo"
                    className="w-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="image col-lg-6"></div>
            <div className="col-lg-6">
              <div className="log-reg-inner">
                <div className="section-header">
                  <h2 className="title">Welcome to Lingayat Matrimony</h2>
                  <p>
                    Let's create your profile! Just fill in the fields below,
                    and we’ll get a new account.
                  </p>
                </div>

                <div className="main-content">
                  <form onSubmit={handleSubmit(saveData)}>
                    <h4 className="content-title text-center">
                      Personal Detail/वैयक्तिक माहिती
                    </h4>
                    {isShow && (
                      <div className={alertClass} role="alert">
                        {msg}
                      </div>
                    )}
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputname"
                        className="form-label ititle ititle"
                      >
                        Full Name/पूर्ण नाव*:
                      </label>
                      <input
                        {...register("user_name", {
                          required: "Enter your full name/पूर्ण नाव",
                        })}
                        type="text"
                        className="my-form-control"
                        id="exampleInputname"
                        autoComplete="off"
                        onChange={(e) => setuName(e.target.value)}
                      />
                      {errors.user_name && (
                        <span style={{ color: "red" }}>
                          {errors.user_name.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactno" className="form-label ititle">
                        Contact no/संपर्क क्रमांक*:
                      </label>
                      <input
                        {...register("contact", {
                          required:
                            "Please enter contact number/संपर्क क्रमांक",
                          minLength: { value: 8, message: "At least 8 digit" },
                          maxLength: {
                            value: 10,
                            message: "Enter max 10 digit",
                          },
                        })}
                        type="number"
                        className="my-form-control"
                        id="contactno"
                        autoComplete="off"
                      />
                      {errors.contact && (
                        <span style={{ color: "red" }}>
                          {errors.contact.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label ititle"
                      >
                        Password/पासवर्ड*:
                      </label>
                      <input
                        type="password"
                        className="my-form-control"
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
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

                    <h4 className="content-title mt-5">Profile Details:</h4>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputdate"
                        className="form-label ititle text-center"
                      >
                        Date Of Birth/जन्मतारीख*:
                      </label>
                      <input
                        {...register("dob", {
                          required: "Enter your Date Of Birth/जन्मतारीख",
                        })}
                        type="text"
                        // max={oldDate}
                        // minDate={moment().subtract(500, "years")}
                        // max={moment().subtract(18, "years")}
                        className="my-form-control"
                        id="exampleInputdate"
                      />
                      {errors.dob && (
                        <span style={{ color: "red" }}>
                          {errors.dob.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="ititle">
                        I am a*:
                      </label>
                      <div className="option">
                        <div className="s-input mr-3">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            {...register("gender", {
                              required: "select gender",
                            })}
                            onClick={() => handleChange("gender", "male")}
                          />
                          <label htmlFor="male">Male</label>
                        </div>
                        <div className="s-input">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            {...register("gender", {
                              required: "select gender",
                            })}
                            onClick={() => handleChange("gender", "female")}
                          />
                          <label htmlFor="female">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="ititle">
                        Looking for a*:
                      </label>
                      <div className="option">
                        <div className="s-input mr-3">
                          <input
                            type="radio"
                            name="looking_for_gender"
                            value="male"
                            id="males"
                            {...register("looking_for_gender", {
                              required: "select gender",
                            })}
                            onClick={() =>
                              handleChange("looking_for_gender", "male")
                            }
                          />
                          <label htmlFor="males">Male</label>
                        </div>
                        <div className="s-input">
                          <input
                            type="radio"
                            name="looking_for_gender"
                            value="female"
                            id="females"
                            {...register("looking_for_gender", {
                              required: "select gender",
                            })}
                            onClick={() =>
                              handleChange("looking_for_gender", "female")
                            }
                          />
                          <label htmlFor="females">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="ititle">
                        Marital status*:
                      </label>
                      <div className="option">
                        <div className="s-input nice-select-wraper">
                          <select
                            style={{
                              background: "transparent",
                              border: "none",
                              padding: "0 20px",
                            }}
                            // className="select-bar"
                            {...register("married_status", {
                              required: "Please select marital status",
                            })}
                          >
                            <option value="">---Marital status---</option>
                            <option value="Never Married">Never Married</option>
                            <option value="Re-Marriage">Re-Marriage</option>
                          </select>
                          {errors.married_status && (
                            <span style={{ color: "red" }}>
                              {errors.married_status.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="mt-4 ititle">
                        City/शहर*:
                      </label>
                      <input
                        {...register("city", {
                          required: "Enter your City/शहर",
                        })}
                        type="text"
                        className="my-form-control mr-5"
                        onChange={(e) => setuCity(e.target.value)}
                      />
                      {errors.city && (
                        <span style={{ color: "red" }}>
                          {errors.city.message}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="form-group">
                      <div
                        className="overflow-auto my-form-control text-justify"
                        style={{ height: 100 }}
                      >
                        {decl}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          {" "}
                          Agree terms & conditions.
                        </label>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="custom-button w-75">
                        {" "}
                        Create Your Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========== Login & Registation Section ========== -- */}
    </div>
  );
}
