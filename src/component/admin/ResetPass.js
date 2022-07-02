import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../service/Loader";
import Service from "../../service/Service";
import { useForm } from "react-hook-form";

function ResetPass() {
  const location = useLocation();
  const { UID,Name } = location.state || {UID:null,Name:null};
  const [isLoading, setIsLoading] = useState(false);
  console.log(UID);
  console.log(Name);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const updatePass = (data) => {
    if(UID){
    setIsLoading(true);
    data.user_id = UID;
    Service.resetPassword(data)
      .then((res) => {
        setIsLoading(false);
        alert(res.data.success);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    } else{
      alert("Please select profile to reset password..!")
    }
  };

  return (
    <div className="container-fluid my-3">
      {isLoading && <Loader />}
      <div className="row newrow">
        <div className="col-md-12">
          <h4>Reset your password</h4>
          <hr />
        </div>
        <div className="col-md-12">
          <h5 className="text-success">Selected Profile :  {Name} </h5>
          <hr />
        </div>

        <form onSubmit={handleSubmit(updatePass)} autoComplete="off">
          <div className="col-md-12">
            <div className="form-group">
              <label for="exampleInputPassword1">New Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                {...register("password", {
                  required: "Please enter your password/पासवर्ड",
                  minLength: { value: 8, message: "At least 8 digit" },
                })}
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                {...register("confirmpassword", {
                  required: "Please enter your password/पासवर्ड",
                  minLength: { value: 8, message: "At least 8 digit" },
                  validate: (val) => { if (watch("password") != val) { return "Passwords does not match."; } },
                })}
              />
               {errors.confirmpassword && (
                <span style={{ color: "red" }}>{errors.confirmpassword.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPass;
