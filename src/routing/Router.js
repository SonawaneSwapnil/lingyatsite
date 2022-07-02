import React from 'react'
import { Navigate,BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../component/site/Home'
import Site from '../component/site/Site'
import About from "../component/site/About"
import Contact from '../component/site/Contact'
import Login from '../component/site/Login'
import Registration from "../component/site/Registration"
import UserProfileInfo from '../component/site/UserProfileInfo'
import UpdateProfileInfo from '../component/site/UpdateProfileInfo'
import UpdateFamilyInfo from '../component/site/UpdateFamilyInfo'
import UpdateExpectation from '../component/site/UpdateExpectation'
import Search from '../component/site/Search'
import UserProfileOtherInfo from '../component/site/UserProfileOtherInfo'
import ForgotPassword from "../component/site/ForgotPassword"
import ResetNewPassword from "../component/site/ResetNewPassword"
import VerifyOtp from "../component/site/VerifyOtp";

//admin componenets
import Admin from "../component/admin/Admin";
import AdminHome from "../component/admin/AdminHome";
import Profiles from "../component/admin/Profiles";
import IncompleteProfile from "../component/admin/IncompleteProfile";
import ResetPass from "../component/admin/ResetPass";

const useUserAuth=()=>{
  const userLogin=JSON.parse(localStorage.getItem('USERID'));
  if(userLogin){
    return true
  } else {
    return false
  }
}

const useAdminAuth=()=>{
  const adminLogin=JSON.parse(localStorage.getItem('ADMINLOGIN'));
  if(adminLogin){
    return true
  } else {
    return true
  }
}

export default function Router() {
  const auth=useUserAuth();
  const adminAuth=useAdminAuth();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          
          <Route path="" element={<Site />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile"  element={auth?<UserProfileInfo />: <Navigate to="/login"/>} />
            <Route path="update-profile" element={auth?<UpdateProfileInfo />: <Navigate to="/login"/>} />
            <Route path="update-family" element={auth?<UpdateFamilyInfo />: <Navigate to="/login"/>} />
            <Route path="update-expectation" element={auth?<UpdateExpectation />: <Navigate to="/login"/>} />
            <Route path="search" element={auth?<Search />: <Navigate to="/login"/>} />
            <Route path="other-info" element={auth?<UserProfileOtherInfo />: <Navigate to="/login"/>} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetNewPassword />} />
            <Route path="verify-otp" element={<VerifyOtp />} />
          </Route>

          {/* admin routes begins */}
          <Route path="admin" element={adminAuth?<Admin />: <Navigate to="/login"/>}>
            <Route path="" element={<AdminHome />} />
            <Route path="admin-allprofiles" element={<Profiles />} />
            <Route path="admin-incomplete-profiles" element={<IncompleteProfile />} />
            <Route path="admin-reset-pass" element={<ResetPass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}