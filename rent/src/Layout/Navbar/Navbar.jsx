import React from 'react';
import styled from "../Navbar/Navbar.module.scss";
import {BsHeadphones} from "react-icons/bs";
import {IoIosArrowDown} from "react-icons/io";
const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <div className={styled.container}>
        <div className="row">
            <div className="col-xl-9">
                <div className={styled.left}>
                  <BsHeadphones size={20}  color='#7386d7'/>
                <p>678.421.3000</p>
                <span>I</span>
                <h5>8am - 5pm EDT</h5>
                </div>
              
            </div>
            <div className="col-xl-3">
              
                <div className={styled.right}>
                <a href="">Contact Us</a>
                   </div>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <div className={styled.logo}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6">
          <a href="">Home</a>
            <div className={styled.dropdown_hover}>
             
              <button>Solution</button>
              <div className={styled.dropdown_content}>
                <h2>Solutions <IoIosArrowDown/> </h2> 
                <div className="col-xl-5">
                  <div className="solution_hover">
                    <p>Rent <a href="">Marketplace.</a></p>
                    <p>Rent <a href="">Social.</a></p>
                    <p>Rent <a href="">Engage.</a></p>
                    <p>Rent <a href="">Search.</a></p>
                    <p>Rent <a href="">Target.</a></p>
                    <p>Rent <a href="">Rep.</a></p>
                  </div>
                </div>
                <div className="col-xl-7"></div>
              </div>
            </div>
           <div className={styled.li}>
          
           </div>
          </div>
          <div className="col-xl-2">
           <div className={styled.login}>
           <a href="">Client Login</a>
           </div>
          </div>
          <div className="col-xl-2">
              <div className={styled.button}>
              <button>Get in Touch</button>

              </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
