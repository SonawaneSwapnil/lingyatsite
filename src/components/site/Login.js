import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6 border border-primary mt-5'>
                <form>
                    <h1> Create your profile</h1>
    <div className="mb-2">
      <label for="contactno" className="form-label">Contact no</label>
      <input type="contactno" className="form-control" id="contactno" placeholder='Enter your mobile no'/>
    </div>
    <div className="mb-2">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password'/>
    </div>
  <div className='d-grid col-4 mx-auto mb-3'><Link to="/registation">
    <button type="submit" className="btn btn-primary ms-5">Login</button></Link></div>
  </form>
                </div>
                <div className='col-3'></div>
            </div>
        </div>
       </div>
  )
}
