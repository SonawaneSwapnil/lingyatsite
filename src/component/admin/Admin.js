import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
// import "./css/bootstrap.min.css";
import "./css/admin.css";
import Service from "../../service/Service";

function Admin() {
  let navigate = useNavigate();
  const [isToggle, setisToggle] = useState(true);

  useEffect(() => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }, []);

  const toggleNav = () => {
    if (isToggle) {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      setisToggle(false);
    } else {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      setisToggle(true);
    }
  };

  const logout=()=>{
    localStorage.clear();
    window.location.replace("/admin-login")
  }

  return (
    <div>
      <div id="mySidebar" className="sidebar">
        {/* <div className="closebtn text-white">Dashboard</div> */}
        <a
          target="_blank"
          href="/registration"
          className="navItem"
        >
          Add New Profile
        </a>
        <Link
          onClick={toggleNav}
          to="/admin/admin-allprofiles"
          className="navItem"
        >
          List of Profiles
        </Link>
        <Link
          onClick={toggleNav}
          to="/admin/admin-incomplete-profiles"
          className="navItem"
        >
          Incomplete Profiles
        </Link>
        {/* <Link
          onClick={toggleNav}
          to="/admin/admin-reset-pass"
          className="navItem"
        >
          Reset Password
        </Link> */}
        <a onClick={logout} className="navItem curpointer">
          Logout
        </a>
      </div>

      <div id="main">
        <div className="adminheader">
          <div className="openbtn" onClick={toggleNav}>
            ☰
          </div>
        </div>
        <div className="childContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
