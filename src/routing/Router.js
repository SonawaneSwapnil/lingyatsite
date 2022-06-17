import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../component/site/Home'
import Site from '../component/site/Site'
import About from "../component/site/About"
import Contact from '../component/site/Contact'
import Login from '../component/site/Login'
import Registration from "../component/site/Registration"
import Single_profile2 from '../component/site/Single_profile2'
import Details from '../component/site/Details'
import Family from '../component/site/Family'
import Expectation from '../component/site/Expectation'
import User_setting from '../component/site/User_setting'
import Single_profile3 from '../component/site/Single_profile3'
import Search from '../component/site/Search'
import Profile from '../component/site/Profile'
import Info from '../component/site/Info'
import Selfprofile from '../component/site/Selfprofile'

export default function Router() {
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
            <Route path="single_profile2" element={<Single_profile2 />} />
            <Route path="details" element={<Details />} />
            <Route path="family" element={<Family />} />
            <Route path="expectation" element={<Expectation />} />
            {/* <Route path="single_profile3" element={<Single_profile3/>}/> */}
            <Route path="user_setting" element={<User_setting />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
            <Route path="info" element={<Info />} />
            <Route path="selfprofile" element={<Selfprofile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}