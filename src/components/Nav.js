import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";
// import logo from "../images/sumit.jpg"


const Nav = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className='navbar bg-secondary-subtle'>
          <h2>SumitNain</h2>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}> 
             <Link style={{textDecoration: 'none'}} to="/"> <li>Home</li> </Link>
             <Link style={{textDecoration: 'none'}} to="/services"> <li>Services</li> </Link>
             <Link style={{textDecoration: 'none'}} to="/projects"> <li>Projects</li> </Link>
             <Link style={{textDecoration: 'none'}} to="/contact"> <li>Contact</li> </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
           {mobile ? <ImCancelCircle/> : <FaBars/>}
        </button>
      </nav>
    </>
  )
}

export default Nav