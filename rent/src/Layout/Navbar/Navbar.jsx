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
          <div className={styled.navlist}>
          <a href="">Home</a>
          <div class={styled.dropdown}>
          <button class={styled.dropbtn}>Solutions <IoIosArrowDown/></button>
          <div class={styled.dropdown_content2}>
          <div className="container">
            <div className="row">
              <h2>Solutions</h2>
              <div className="col-xl-6">
                <div className={styled.rentflex}>
                  <h4>Rent <span>Marketplace.</span></h4>
                  <h4>Rent <span>Social.</span> </h4>
                  <h4>Rent <span>Engage.</span> </h4>
                  <h4>Rent <span>Search.</span></h4>
                  <h4>Rent <span>Target.</span></h4>
                  <h4>Rent <span>Rep.</span></h4>
                </div>
              </div>
              <div className="col-xl-6"></div>
            </div>
          </div>
          </div>
          </div>
           
            <div class={styled.dropdown}>
          <button class={styled.dropbtn}>Company <IoIosArrowDown/></button>
          <div class={styled.dropdown_content}>
            <a href="">About</a>
            <a href="#">News</a>
            <a href="#">Careers</a>
            <a href="#">FAQ</a>
          </div>
          </div>

                <a href=""> Blog</a>
                <a href=""> Resources <IoIosArrowDown/></a>
           <div className={styled.li}>
          
           </div>
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
