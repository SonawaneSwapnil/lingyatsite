import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Expectation() {
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
      <div className="row justify-content-center">
        <div className="col-5 mt-3">
          <h1 className="display-5 animated fadeIn mb-4"> Expectation</h1>
        </div>
        <div className="col-5 mt-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-dark"
          >
            <h3 className="mt-3 text-center">
             Expectation/अपेक्षा वधू/वर
            </h3>

            <div className="mx-5">
              <label className="form-label">Expection</label>
              <textarea className="form-control"></textarea>
            </div>
            <div className="mx-5 mt-3">
              <label className="form-label">Married status</label>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label me-5" for="flexRadioDefault2">
                  Married
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  UnMarried
                </label>
              </div>

             </div>
            <div className="mx-5 mt-3">
              <div classname="dropdown-menu">
                <label htmlfor="branch" className="me-5">Branch</label>
                <select id="branch" name="branch">
                  <option className="dropdown-item" value="Lingayat-Wani">
                  Lingayat-Wani
                  </option>
                  <option className="dropdown-item" value="Lingayat-Kumbara">
                   Lingayat-Kumbara
                  </option>
                  <option className="dropdown-item" value="Lingayat-Uppara">
                  Lingayat-Uppara
                  </option>
                </select>
              </div>
            </div>
            <div className="mx-5">
              <label className="form-label ">Add Photo</label>
              <div className="input-group">
              <label className="form-label ">1.Passport Photo</label>
                <input
                  type="file"
                  className="form-control ms-3"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
                </div>
                <div className="input-group mt-3">
                  <label className="form-label me-5">2.Full Photo</label>
                 <input
                  type="file"
                  className="form-control ms-2"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
            </div>
            <div className="d-grid col-4 mx-auto mb-3 mt-4">
              <Link to="/expectation">
                {" "}
                <button
                  type="submit"
                  className="btn mb-3 btn btn-primary mx-aut"
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Expectation;
