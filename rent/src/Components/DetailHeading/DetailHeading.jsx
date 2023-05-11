import React from 'react';
import styled from "../DetailHeading/DetailHeading.module.scss";
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
const DetailHeading = () => {
  return (
    <div className={styled.detail}>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
            <img src="https://solutions.rent.com/wp-content/uploads/2023/05/Copy-of-LinkedIn-AIM-Speaker-Panel-2.jpg" alt="" />
            <div className={styled.detailbtn}>
                <button>#Reputation Management</button>
                <button>#DisplayAds</button>
                <button>#Multifamily Marketing</button>
            </div>
            </div>
            <div className="col-xl-6">
               <div className={styled.righttxt}>
               <span>05/02/2023</span>
                <h2>AIM 2023: The Science of Multifamily Marketing Panel</h2>
               </div>
                <p>Share: <BsFacebook color='#6576c9'/> <AiFillTwitterCircle color='#6576c9' size={20}/> <AiFillLinkedin color='#6576c9' size={20}/></p>
            </div>
        </div>
      </div>
    </div>
 )
}

export default DetailHeading
