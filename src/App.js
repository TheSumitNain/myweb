import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Service from './components/Service';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Service/>} />
      </Routes>
 
     
      <ScrollToTop style={{zIndex:"15", borderRadius: "50%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", outline: "none"}} smooth top="200" color="rgb(243, 123, 143)" />
    

      <div className="icon-bar" data-aos="zoom-in-left">
        <a href="https://www.facebook.com/thesumitnain/" >
          <i class="fab fa-facebook"> </i>
        </a>
        <a href="https://www.instagram.com/thesumitnain/?igshid=YmMyMTA2M2Y%3D" >
          <i class="fab fa-instagram"> </i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=8686087807" >
          <i class="fab fa-whatsapp"> </i>
        </a>
      </div>
    </>
  )
}

export default App