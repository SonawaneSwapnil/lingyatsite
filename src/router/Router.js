import React from 'react'
import { BrowserRouter,Routes  , Route} from 'react-router-dom';
import Site from '../components/site/Site';
import Home from '../components/site/Home';
import Contact from '../components/site/Contact';
import About from '../components/site/About';
import Registation from '../components/site/Registation';
import Family from '../components/site/Family'
import Login from '../components/site/Login';

import Expectation from '../components/site/Expectation';

function Router() {
  return (
    <div>
        <BrowserRouter>
       <Routes>
           <Route path="/" element={<Site/>}>
           <Route path="" element={<Home/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="login" element={<Login/>}/>
           <Route path="registation" element={<Registation/>}/>
           <Route path="family" element={<Family/>}/>
        
           <Route path="expectation" element={<Expectation/>}/>

           </Route>
           </Routes></BrowserRouter>
    </div>
  )
}
export default Router;