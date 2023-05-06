import React from 'react';
import styled from "../HomeRedfin/HomeRedfin.module.scss";
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
const HomeRedfin = () => {
  return (
    <div className={styled.redfin}>
      <div className={styled.container}>
        <div className="row">
            <div className="col-xl-6">
                <h2>We are Rent. a Redfin Company</h2>
                <img src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-about-us.png" alt="" />
            </div>
            <div className="col-xl-6">
                <p>We’re here to simplify your entire leasing lifecycle, whether you’re building your property’s brand, attracting and converting new renter leads, or nurturing current residents for renewals. </p>
                <span>Follow us on social: <a href=""><BsFacebook size={24}/></a> <a href=""><AiFillTwitterCircle size={30}/></a> <a href=""><AiFillLinkedin size={30}/></a> <a href=""><AiFillInstagram size={30}/></a> </span>
               <div className={styled.btnabout}>
               <button>About Rent.</button>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRedfin
