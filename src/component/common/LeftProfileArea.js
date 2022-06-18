import React from 'react'
import { Link } from "react-router-dom";

function LeftProfileArea(props) {

  const data = props.data[0];

  return (
    <div className="col-xl-4 col-lg-5 col-md-7">
      <div className="left-profile-area">
        <div className="profile-about-box">
          <div className="top-bg"></div>
          <div className="p-inner-content">
            <div className="profile-img">
              <img
                src={data.passport} className="img-fluid"
                alt="" />
              <div className="active-online"></div>
            </div>
            <h5 className="name">{data.user_name}</h5>
            <ul className="p-b-meta-one">
              <li><span>{data.age} Years Old</span></li>
              <li>
                <span><i className="fas fa-map-marker-alt"></i>{data.city}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-meta-box"></div>
        <div className="profile-uplodate-photo">
          <h4 className="p-u-p-header"><i className="fas fa-camera"></i> 4 Upload Photos</h4>
          <div className="p-u-p-list">
            <div className="my-col">
              <div className="img">
                <img src={data.fullphoto} className="img-fluid" alt="" />
                <div className="overlay">
                  <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe">
                    <i className="fas fa-plus"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftProfileArea