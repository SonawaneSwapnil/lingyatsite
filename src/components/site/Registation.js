import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Registation() {
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
      <div className="container">

      
      <div class="row justify-content-center">
        <div class="col-6 mt-3">
          <h1 className="display-5 animated fadeIn mb-4">Registation</h1>
          <img className="img-fluid" src="assets/img/slid2.jpg" alt=""/>
        </div>
        <div class="col-6 mt-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-dark"
          >
            <h3 className="mt-3 text-center">
              {" "}
              Personal Details/वैयक्तिक माहिती
            </h3>
            <div className="mx-5">
              <label for="exampleInputname" className="form-label">
                Name/नाव
              </label>
              <input
                {...register("name", {
                  required: "Enter your full name/पूर्ण नाव",
                })}
                type="text"
                placeholder="Enter your full name/पूर्ण नाव"
                className="form-control"
                id="exampleInputname"
              />
              {""}
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
              <br />
            </div>

            <div className="mb-3 mx-5">
              <label for="exampleInputdate" className="form-label text-center">
                Date Of Birth/जन्मतारीख
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleInputdate"
              />
            </div>
            <div className="mb-3 mx-5">
              <label
                for="exampleInputdateplace"
                className="form-label text-center"
              >
                Birth Place/जन्मतारीख ठिकाण
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputdateplace"
              />
            </div>
            <div className="mb-3 mx-5">
              <label
                for="exampleInputdatetime"
                className="form-label text-center"
              >
                Birth time/जन्म वेळ
              </label>
              <input
                type="time"
                className="form-control"
                id="exampleInputdatetime"
              />
            </div>
            <div className="mx-5">
              <label for="exampleInputname" className="form-label text-center">
                Educational Qualification/शैक्षणिक पात्रता
              </label>
              <input
                {...register("name", {
                  required:
                    "Enter your Educational Qualification/शैक्षणिक पात्रता",
                })}
                type="text"
                placeholder="Enter your Educational Qualification/शैक्षणिक पात्रता"
                className="form-control"
                id="exampleInputname"
              />
              {""}
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
              <br />
            </div>
            <div className="mx-5">
              <label for="exampleInputname" className="form-label text-center">
                Service or Business/सेवा किंवा व्यवसाय
              </label>
              <input
                {...register("name", {
                  required: "Enter your Service or Business/सेवा किंवा व्यवसाय",
                })}
                type="text"
                placeholder="Enter your Service or Business/सेवा किंवा व्यवसाय"
                className="form-control"
                id="exampleInputname"
              />
              {""}
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
              <br />
            </div>
            <div class="row">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label text-center"
              >
                {" "}
                Income/उत्पन्न
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label ">
                Designation/हुद्दा
              </label>
            </div>
            <div className="row input-group ">
              <input
                type="number"
                className="form-control col-sm-6 ms-3 "
                id="exampleInputdate"
              />
              <input
                type="number"
                className="form-control col-sm-6 ms-3"
                id="exampleInputdate"
              />
            </div>

            <div class="row">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label text-center"
              >
                {" "}
                Workplace/कामाची जागा
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label ">
                Height/उंची
              </label>
            </div>
            <div className="row input-group ">
              <input
                type="number"
                className="form-control col-sm-6 ms-3 "
                id="exampleInputdate"
              />
              <input
                type="number"
                className="form-control col-sm-6 ms-3"
                id="exampleInputdate"
              />
            </div>

            <div class="row">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label text-center"
              >
                Blood-Group/रक्त गट
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label ">
                Color/रंग
              </label>
            </div>
            <div className="row input-group ">
              <input
                type="number"
                className="form-control col-sm-6 ms-3 "
                id="exampleInputdate"
              />
              <input
                type="number"
                className="form-control col-sm-6 ms-3"
                id="exampleInputdate"
              />
            </div>
            <div class="row">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label text-center"
              >
                {" "}
                Weight/वजन
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label ">
                Address/पत्ता
              </label>
            </div>
            <div className="row input-group ">
              <input
                type="number"
                className="form-control col-sm-6 ms-3 "
                id="exampleInputdate"
              />
              <input
                type="number"
                className="form-control col-sm-6 ms-3"
                id="exampleInputdate"
              />
            </div>

            <div className="d-grid col-6 mx-auto mb-3 mt-4">
              <Link to="/family">
                {" "}
                <button
                  type="submit"
                  className="btn mb-3 btn btn-primary mx-aut"
                >
                  Save and continue
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
