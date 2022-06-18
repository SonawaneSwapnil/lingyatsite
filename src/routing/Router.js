import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
            <Route path="profile" element={<UserProfileInfo />} />
            <Route path="update-profile" element={<UpdateProfileInfo />} />
            <Route path="update-family" element={<UpdateFamilyInfo />} />
            <Route path="update-expectation" element={<UpdateExpectation />} />
            <Route path="search" element={<Search />} />
            <Route path="other-info" element={<UserProfileOtherInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}