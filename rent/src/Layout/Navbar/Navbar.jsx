import React from 'react';
import styled from "../Navbar/Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <div className="container">
        <div className="row">
            <div className="col-xl-9">
                <div className="left-side">
                <p>678.421.3000</p>
                </div>
                <div className="right-side">
                   <span>8am - 5pm EDT</span>
                </div>
            </div>
            <div className="col-xl-3">
                Contact Us
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <div className="logo">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6">
            <ul>
              <li>Home</li>
              <li>Solutions</li>
              <li>Company</li>
              <li>Blog</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="col-xl-2">
            <a href="">Client Login</a>
          </div>
          <div className="col-xl-2">
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
