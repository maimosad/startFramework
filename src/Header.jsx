import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
class Header extends Component {
  

    
    render() {
        return <>
    
    
       


<nav className="navbar navbar-expand-lg fixed-top py-4">
  <div className="container">
    <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2" to="home">Start Framework </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0"  >
      <li className="nav-item mx-0 mx-lg-1"><NavLink    className="nav-link text-white text-uppercase fw-bold py-3 px-2 px-lg-3 rounded js-scroll-trigger"  to="portofolio">Portofolio</NavLink>
        </li>
      <li className="nav-item">
      
      <NavLink className="nav-link text-white text-uppercase fw-bold py-3 px-2 px-lg-3 rounded js-scroll-trigger  " to="about">About</NavLink> </li>
      <li className="nav-item">
      
      <NavLink className="nav-link text-white text-uppercase fw-bold py-3 px-2 px-lg-3 rounded js-scroll-trigger  " to="contactus">contact Us</NavLink>
          </li>
        
      </ul>
      
    </div>
  </div>
</nav>

        </>
    }
}

export default Header;