import React from 'react'
import { Link } from 'react-router-dom'

export default function User_setting() {
  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title">setting</h2>
            <ul className="breadcrumb-list">
              <li><Link to="/">Home</Link></li>
              <li>setting</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="user-setting-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-5">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <button className="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                      aria-controls="collapseOne">
                      <div className="icon"><i className="fas fa-user"></i></div>
                      <span>My Profile</span>
                      <div className="t-icon">
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-minus"></i>
                      </div>
                    </button>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                    data-parent="#accordionExample">
                    <div className="card-body">
                      <ul className="links">
                        <li><Link className="active" to="user-setting.html">Profile Info</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <button className="collapsed" type="button" data-toggle="collapse"
                      data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div className="icon"><i className="fas fa-cogs"></i></div>
                      <span>Account</span>
                      <div className="t-icon">
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-minus"></i>
                      </div>
                    </button>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                    data-parent="#accordionExample">
                    <div className="card-body">
                      <ul className="links">
                        <li><Link to="user-account-info.html">Account Info</Link></li>
                        <li><Link to="user-change-pass.html">Change Password</Link></li>
                        <li><Link to="user-privicy-setting.html">Privacy Settings</Link></li>
                        <li><Link to="user-verify-account.html">Verified account</Link></li>
                        <li><Link to="user-close-account.html">Discard Account</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-7 ">
              <div className="page-title">Profile Info</div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="profile-about-box">
                    <div className="top-bg"></div>
                    <div className="p-inner-content">
                      <div className="profile-img">
                        <img src="assets/images/profile/profile-user.png" alt="" />
                        <div className="active-online"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="up-photo-card mb-30">
                    <div className="icon"><i className="fas fa-user"></i></div>
                    <div className="content">
                      <h4>Change Avatar</h4>
                      <span>120x120p size minimum</span>
                    </div>
                  </div>
                  <div className="up-photo-card">
                    <div className="icon"><i className="fas fa-image"></i></div>
                    <div className="content">
                      <h4>Change Cover</h4>
                      <span>1200x300p size minimum</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-info-box mt-30">
                <div className="header">Personal Detail/वैयक्तिक माहिती</div>
                <div className="content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="exampleInputname" className="form-label">Full Name/पूर्ण नाव*</label>
                        <input
                          type="text"
                          className="my-form-control"
                          id="exampleInputname" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="exampleInputdate" className="form-label text-center">
                          Date Of Birth/जन्मतारीख
                        </label>
                        <input
                          type="date"
                          className="my-form-control"
                          id="exampleInputdate" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label
                          for="exampleInputdatetime"
                          className="form-label text-center">
                          Birth time/जन्म वेळ
                        </label>
                        <input
                          type="time"
                          className="my-form-control"
                          id="exampleInputtime" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="exampleInputedu" className="form-label text-center">
                          Educational Qualification/शैक्षणिक पात्रता
                        </label>
                        <input
                          type="text"
                          className="my-form-control"
                          id="exampleInputedu" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="exampleInputser" className="form-label text-center">
                          Service or Business/सेवा किंवा व्यवसाय
                        </label>
                        <input
                          type="text"
                          className="my-form-control"
                          id="exampleInputser" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for=""> Income/उत्पन्न</label>
                        <input type="Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Designation/हुद्दा</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for=""> Workplace/कामाची जागा</label>
                        <input type="Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Height/उंची</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for=""> Blood-Group/रक्त गट</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Color/रंग</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for=""> Weight/वजन</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Address/पत्ता</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="input-info-box mt-30">
                <div className="header">
                  Family Detalis/कौटुंबिक तपशील
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Father Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Contact Number</label>
                        <input type="Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Mother Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Contact Number</label>
                        <input type="Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Brother Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Contact Number</label>
                        <input type="Number" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Sister Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Contact Number</label>
                        <input type="Number" />
                      </div>
                    </div>


                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Family Income/कौटुंबिक उत्पन्न</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="my-input-box">
                        <label for="">Property/मालमत्ता</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons  mt-30 justify-content-center">
                <Link to="/single_profile2">
                  <button type="submit" className="custom-button">Save</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========= Profile Section Start --> */}
    </div>
  )
}
