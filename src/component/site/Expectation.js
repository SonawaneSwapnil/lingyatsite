import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Expectation(){
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

{/* <!-- ==========Breadcrumb-Section========== --> */}
    <section className="breadcrumb-area profile-bc-area">
        <div className="container">
            <div className="content">
                <h2 className="title extra-padding">
                   Add More Information
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                        <Link to="">
                            Home
                        </Link>
                    </li>

                    <li>
                        Add More Information
                    </li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- ==========Breadcrumb-Section========== --> */}


    {/* <!-- ========= Profile Section Start --> */}
    <section className="profile-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-7">
                    <div className="left-profile-area">
                        <div className="profile-about-box">
                            <div className="top-bg"></div>
                            <div className="p-inner-content">
                                <div className="profile-img">
                                    <img src="assets/images/profile/profile-user.png" alt=""/>
                                    <div className="active-online"></div>
                                </div>
                                <h5 className="name">
                                    Albert Don
                                </h5>
                                <ul className="p-b-meta-one">
                                    <li>
                                        <span>21 Years Old</span>
                                    </li>
                                    <li>
                                        <span> <i className="fas fa-map-marker-alt"></i>Paris,France</span>
                                    </li>
                                </ul>
                               
                            </div>
                        </div>
                        <div className="profile-meta-box">
                                                    </div>
                        <div className="profile-uplodate-photo">
                            <h4 className="p-u-p-header">
                                <i className="fas fa-camera"></i> 21 Upload Photos
                            </h4>
                            <div className="p-u-p-list">
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up1.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up2.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up2.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up3.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up3.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up4.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up4.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up5.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up5.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-col">
                                    <div className="img">
                                        <img src="assets/images/profile/up6.jpg" alt=""/>
                                        <div className="overlay">
                                            <Link to="assets/images/profile/up6.jpg" className="light-box mfp-iframe"><i
                                                    className="fas fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                    <div className="profile-main-content">
                        <ul className="top-menu">
                        <li>
                                <Link to="/single_profile2" className="active">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/details">
                                    Add More Information
                                </Link>
                            </li>
                           
                            <li>
                    <Link to="/single_profile3">Members</Link>
                  </li>
                  <li>
                    <Link to="/Search">search</Link>
                  </li>
                           
                        </ul>
                        <div className="mt-4">
                        <form
            onSubmit={handleSubmit(onSubmit)}
           
          >
              <h4 className="content-title text-center">Expectation/अपेक्षा वधू/वर</h4>
                       <div className="mx-5">
              <label className="form-label">Expection/अपेक्षा वधू/वर</label>
              <textarea className="my-form-control"></textarea>
            </div>
         
                <div className="mx-5 mt-3">
              <div classname="dropdown-menu">
              <label for="">Marital status*/वैवाहिक स्थिती*</label>
              <select className="select-bar" id="branch" name="branch">
                        <option   className="dropdown-item" value="single">Single</option>
                        <option  className="dropdown-item"  value="married">Married</option>
                        <option  className="dropdown-item" value="divorced">Divorced</option>
                      </select>
                              </div>
            </div>
            <div className="mx-5 mt-3">
              <div classname="dropdown-menu">
                <label htmlfor="branch" className="me-5">Branch/शाखा</label>
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
              <label className="form-label ">Add Photo/फोटो जोडा</label>
              <div className="input-group">
              <label className="form-label ">1.Passport Photo/पासपोर्ट फोटो</label>
                <input
                  type="file"
                  className="my-form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
                </div>
                <div className="input-group">
                  <label className="form-label me-5">2.Full Photo/पूर्ण फोटो</label>
                 <input
                  type="file"
                  className="my-form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
            </div>
           
            <div className="button-wrapper d-grid gap-2 col-6 mx-auto mt-3">
                <Link to="/single_profile2">
                  <button type="submit" className="custom-button ml-5"> Submit
                  </button>
                      </Link>
                   
                </div>
          </form>
                            </div>
                           
                        </div>
                       
                </div>
                  
            </div>
        </div>
      
    </section>
   
    {/* <!-- ========= Profile Section Start -- */}
    </div>
  )
}
