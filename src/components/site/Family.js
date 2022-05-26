import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

export default function Educational() {
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
       <div class="row justify-content-center">
        
        <div class="col-5 mt-3">
        
        <h1 className="display-5 animated fadeIn mb-4">Family Information</h1>
        
        </div>
        <div class="col-5 mt-3">
        <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="border border-dark"
                >
                  <h3 className="mt-3 text-center">Family Information/कौटुंबिक माहिती</h3>                 
                  <div class="row text-center">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label"
              >
                {" "}
                Father Name
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label ">
                Contact Number
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
            <div class="row text-center">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label"
              >
                {" "}
                Mother Name
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label ">
                Contact Number
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
            <div class="row text-center">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label"
              >
                {" "}
               Brother Name
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label ">
                Contact Number
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
            <div class="row text-center">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label"
              >
                {" "}
               Sister Name
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label ">
                Contact Number
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
            <div class="row text-center">
              <label
                for="inputincome"
                class="col-sm-6 col-form-label "
              >
                {" "}
              Family Income
              </label>
              <label for="inputdesignation" class="col-sm-6 col-form-label">
                Property
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
            <div className="d-grid col-4 mx-auto mb-3 mt-4">
              <Link to="/expectation">
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
  )
}
