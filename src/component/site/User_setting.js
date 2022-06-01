import React from 'react'
import { Link } from 'react-router-dom'

export default function User_setting() {
  return (
    <div>
        {/* <!-- ==========Breadcrumb-Section========== --> */}
    <section className="breadcrumb-area profile-bc-area">
        <div className="container">
            <div className="content">
                <h2 className="title extra-padding">
                    Setting
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                        <Link to="index.html">
                            Home
                        </Link>
                    </li>

                    <li>
                        Setting
                    </li>
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
                                    <div className="icon">
                                        <i className="fas fa-user"></i>
                                    </div>
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
                                        <li>
                                            <Link className="active" to="user-setting.html">Profile Info</Link>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <button className="collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div className="icon">
                                        <i className="fas fa-cogs"></i>
                                    </div>
                                    <span>
                                        Account
                                    </span>
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
                                        <li>
                                            <Link to="user-account-info.html">Account Info</Link>
                                        </li>
                                        <li>
                                            <Link to="user-change-pass.html">Change Password</Link>
                                        </li>
                                        <li>
                                            <Link to="user-privicy-setting.html">Privacy Settings</Link>
                                        </li>
                                        <li>
                                            <Link to="user-verify-account.html">Verified account</Link>
                                        </li>
                                        <li>
                                            <Link to="user-close-account.html">Discard Account</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xl-8 col-md-7 ">
                    <div className="page-title">
                        Profile Info
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="profile-about-box">
                                <div className="top-bg"></div>
                                <div className="p-inner-content">
                                    <div className="profile-img">
                                        <img src="assets/images/profile/profile-user.png" alt=""/>
                                        <div className="active-online"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="up-photo-card mb-30">
                                <div className="icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="content">
                                    <h4>
                                        Change Avatar
                                    </h4>
                                    <span>
                                        120x120p size minimum
                                    </span>
                                </div>
                            </div>
                            <div className="up-photo-card">
                                <div className="icon">
                                    <i className="fas fa-image"></i>
                                </div>
                                <div className="content">
                                    <h4>
                                        Change Cover
                                    </h4>
                                    <span>
                                        1200x300p size minimum
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-info-box mt-30">
                        <div className="header">
                            About your Profile
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Profile Name</label>
                                        <input type="text" placeholder="Profile Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Contact No</label>
                                        <input type="text" placeholder="Contact No"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <textarea name=""
                                            placeholder="Expectation/अपेक्षा"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Birthdate</label>
                                        <input type="date"/>
                                    </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="my-input-box">
                                            <label for="">BirthPlace</label>
                                            <input type="text" placeholder="Occupation"/>
                                        </div>
                                        </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                         <label for="">Maternal Uncle/मामा</label>
                                         <input type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">City</label>
                                        <select name="" id="">
                                            <option value="" disabled selected>Select City</option>
                                            <option value="">Mumbai</option>
                                            <option value="">Nashik</option>
                                        </select>
                                    </div>
                                </div>
                                
                               
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Marital Status</label>
                                        <select name="" id="">
                                            <option value="">Never married</option>
                                            <option value="">Remarriage</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Branch/शाखा</label>
                                        <select name="" id="">
                                            <option value="" disabled selected>Branch/शाखा</option>
                                            <option value="">Wani</option>
                                            <option value="">Dixi Wani</option>
                                            <option value="">Pancham</option>
                                            <option value="">Chaturth</option>
                                            <option value="">Shivant</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-info-box mt-30">
                        <div className="header">
                           Education/शिक्षण
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Qualification/शिक्षण</label>
                                        <input type="text" placeholder="Qualification/शिक्षण"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Service/Business</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Income/उत्पन्न</label>
                                        <input type="text"/ >
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Service Name</label>
                                        <input type="text" placeholder="Service Name"/>
                                    </div>
                                </div>
                                {/* <!-- <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Favourite Games </label>
                                        <textarea name="" placeholder="Favourite Games "></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Favourite Games </label>
                                        <textarea name="" placeholder="Favourite Games"></textarea>
                                    </div>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="input-info-box mt-30">
                        <div className="header">
                            Physical
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Height/उंची</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                    <div className="col-md-6">
                                        <div className="my-input-box">
                                            <label for="">Blood Group/रक्त गट</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">color/रंग</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">Weight/वजन</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">BodyType/शरीर प्रकार</label>
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
                                                <input type="Number"/>
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
                        {/* <!-- <button className="custom-button2">Discard All</button> --> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- ========= Profile Section Start --> */}

    </div>
  )
}
