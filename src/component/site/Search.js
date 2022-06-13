import React, { useEffect, useState } from "react";
import { getDefaultLocale } from "react-datepicker";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Service from "../../service/Service";

export default function Search() {
  const [userUpdateData, setuserUpdateData] = useState();
  const [userData, setUserData] = useState();
  const [filteredUser, setFilterUser] = useState([]);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }, getValues,
    reset,
  } = useForm();




  useEffect(() => {
    loadAllUserData();
  }, []);

  const loadAllUserData = () => {
    Service.getAllUsers().then((res) => {
      setUserData(res.data);
      setFilterUser(res.data);
    });
  };


  // Filtersdata

  const handleSearchUser = (event) => {
    const text = event.target.value;
    if (text) {
      const filtered = userData.filter((item) =>
        item.workplace.toLowerCase().includes(text.toLowerCase())
      );
      setFilterUser(filtered);
    } else {
      setFilterUser(userData);
    }
  };

  // age calculator
  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  var ageFilter = range(18, 65);
  console.log(ageFilter)

  return (
    <div>

      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">
              Search
            </h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="index.html">
                  Home
                </Link>
              </li>

              <li>
                Search
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ==========Community-Section========== --> */}
      <section className="community-section inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-filter">
                <div className="left">
                  <Link to="" data-toggle="modal" data-target="#exampleModalCenter">
                    <i className="fas fa-sliders-h"></i> Find Your Perfect Partner
                  </Link>
                </div>
                {/* <div className="right">
                            <span className="span">
                                Order By :
                            </span>
                            <div className="filter-right">
                                <select className="nice-select select-bar">
                                    <option value="">Latest Active</option>
                                    <option value="">NEW</option>
                                    <option value="">OLD</option>
                                    <option value="">POPULAR</option>
                                </select>
                            </div>
                        </div> */}
              </div>
            </div>
          </div>
          {userData &&
            userData.map((index, i) => (
              <div className="row" key={index.user_id}>
                <div className="col-lg-6">
                  <div className="single-friend">
                    <img src="assets/images/profile/friend1.png" alt="" />
                    <div className="content">
                      <Link to="/profile" className="name">
                        {index.user_name}
                        <span className="isvarify">
                          <i className="fas fa-check-circle"></i>
                        </span>
                      </Link>
                      <p className="date">a month ago</p>
                      <Link to='/profile'>
                        <button className="custom-button ps-5" onClick={() => { localStorage.setItem("USERID", JSON.stringify(index.user_id)) }}>
                          View Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      {/* <!-- ==========Community-Section========== --> */}
      <div className="modal fade filter-p" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-between">

              <h6 className="modal-title text-center" id="exampleModalCenterTitle">Find Your Perfect Partner</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div class="container" style={{ 'backgroundColor': 'rgb(158, 0, 53)', 'padding': 50, 'borderRadius': 16 }}>
                <form class="row gx-3 gy-2 align-items-center">
                  <label class="visually-hidden text-light title" for="specificSizeInputGroupUsername">Looking for:</label>
                  <div class="form-check">
                    <div className='row'>
                      <div class="col-8">
                        <label class="form-check-label text-light title" for="flexRadioDefault1">Groom</label>
                      </div>
                      <div class="col-4">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      </div>
                    </div>
                    <div class="form-check">
                      <div className='row'>
                        <div class="col-8">
                          <label class="form-check-label text-light title" for="flexRadioDefault2">Bride</label>
                        </div>
                        <div class="col-4">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="input-group">
                    <label class="visually-hidden text-light title" for="specificSizeSelect">Age Preference:</label>
                    <select class="form-select" id="specificSizeSelect">
                      <option selected>Choose...</option>
                      <option value="1">18-20</option>
                      <option value="2">21-25</option>
                      <option value="3">26-30</option>
                      <option value="1">31-35</option>
                      <option value="2">36-40</option>
                      <option value="3">41-45</option>
                    </select>
                  </div>
                  <label class="visually-hidden text-light title" for="specificSizeInputGroupUsername">WorkPlace:</label>
                  <div class="input-group">
                    <div class="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                      </svg>
                    </div>
                    <input type="text" class="form-control" id="specificSizeInputGroupUsername" />
                  </div>
                  <label class="visually-hidden text-light title" for="specificSizeInputGroupUsername">Income:</label>
                  <div class="input-group">
                    <div class="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
                        <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                      </svg>
                    </div>
                    <input type="text" class="form-control" id="specificSizeInputGroupUsername" />
                  </div>
                  <label class="visually-hidden text-light title" for="specificSizeInputGroupUsername">Marital Status:</label>
                  <div class="input-group">
                    <select class="form-select" id="specificSizeSelect">
                      <option selected>Choose...</option>
                      <option class="textTru chosenDropWid" id="N" value="N">Never Married</option>
                      <option class="textTru chosenDropWid" id="S" value="S">Awaiting Divorce</option>
                      <option class="textTru chosenDropWid" id="D" value="D">Divorced</option>
                      <option class="textTru chosenDropWid" id="W" value="W">Widowed</option>
                      <option class="textTru chosenDropWid" id="A" value="A">Annulled</option>
                    </select>
                  </div>
                  <button type="submit" class="custom-button mt-2">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
