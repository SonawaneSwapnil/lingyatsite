import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Service from '../../service/Service';

export default function Single_profile3() {
  const [usersData, setUsersData] = useState();

  useEffect(() => {
    loadAllUsersData();
  }, []);

  const loadAllUsersData = () => {
    Service.getSingleUser(JSON.parse(localStorage.getItem("USERID"))).then((res) => {
      setUsersData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div>

      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">
              Single Profile
            </h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="">
                  Home
                </Link>
              </li>

              <li>
                Single Profile
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ========= Profile Section Start --> */}
      <section className="profile-section">
        {usersData && usersData.map(index => (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-7">
                <div className="left-profile-area">
                  <div className="profile-about-box">
                    <div className="top-bg"></div>
                    <div className="p-inner-content">
                      <div className="profile-img">
                        <img src="assets/images/profile/profile-user.png" alt="" />
                        <div className="active-online"></div>
                      </div>
                      <h5 className="name">
                        {index.user_name}
                      </h5>
                      <ul className="p-b-meta-one">
                        <li>
                          <span>{index.age} Years Old</span>
                        </li>
                        <li>
                          <span> <i className="fas fa-map-marker-alt"></i>
                            {index.city}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="profile-meta-box">
                  </div>
                  <div className="profile-uplodate-photo">
                    <h4 className="p-u-p-header">
                      <i className="fas fa-camera"></i>Uploaded Photos</h4>
                    <div className="p-u-p-list">
                      <div className="my-col">
                        <div className="img">
                          <img src="assets/images/profile/up1.jpg" alt="" />
                          <div className="overlay">
                            <Link to="assets/images/profile/up1.jpg" className="light-box mfp-iframe"><i
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
                      <NavLink to="/single_profile2" exact activeclassname="active-class">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/details" exact activeclassname="active-class">
                        Add More Information
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Search" exact activeclassname="active-class">
                        search

                      </NavLink>
                    </li>

                  </ul>
                  <div className="profile-friends">
                    <div className="single-friend">
                      <img src="assets/images/profile/friend1.png" alt="" />
                      <div className="content">
                        <Link to="community-single.html" className="name">
                          Erma Porter
                          <div className="isvarify">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </Link>
                        <p className="date">
                          a month ago
                        </p>
                        <Link to="community-single.html" className="connnect-btn">
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div className="single-friend">
                      <img src="assets/images/profile/friend2.png" alt="" />
                      <div className="content">
                        <Link to="community-single.html" className="name">
                          Vicki Alvarez
                          <div className="isvarify">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </Link>
                        <p className="date">
                          a month ago
                        </p>
                        <Link to="community-single.html" className="connnect-btn">
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div className="single-friend">
                      <img src="assets/images/profile/friend3.png" alt="" />
                      <div className="content">
                        <Link to="community-single.html" className="name">
                          Opal Farmer
                          <div className="isvarify">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </Link>
                        <p className="date">
                          a month ago
                        </p>
                        <Link to="community-single.html" className="connnect-btn">
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div className="single-friend">
                      <img src="assets/images/profile/friend4.png" alt="" />
                      <div className="content">
                        <Link to="community-single.html" className="name">
                          May Hart
                          <div className="isvarify">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </Link>
                        <p className="date">
                          a month ago
                        </p>
                        <Link to="community-single.html" className="connnect-btn">
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div className="single-friend">
                      <img src="assets/images/profile/friend5.png" alt="" />
                      <div className="content">
                        <Link to="community-single.html" className="name">
                          Julia Salazar
                          <div className="isvarify">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </Link>
                        <p className="date">
                          a month ago
                        </p>
                        <Link to="community-single.html" className="connnect-btn">
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div className="single-friend">
                      <img src="assets/images/profile/friend6.png" alt="" />
                      <div className="content">
                        <Link to="community-single.html" className="name">
                          Joy Bailey
                          <div className="isvarify">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </Link>
                        <p className="date">
                          a month ago
                        </p>
                        <Link to="community-single.html" className="connnect-btn">
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div className="single-friend">
                      <img src="assets/images/profile/friend7.png" alt="" />
                      <div className="content">
                        <Link to="community-single.html" className="name">
                          Julie Dunn
                          <div className="isvarify">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </Link>
                        <p className="date">
                          a month ago
                        </p>
                        <Link to="community-single.html" className="connnect-btn">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* <!-- ========= Profile Section Start -- */}
    </div>
  )
}
