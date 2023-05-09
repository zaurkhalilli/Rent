import React from 'react'
import styled from "../AboutJoin/AboutJoin.module.scss"
import {ImLocation} from "react-icons/im"
const AboutJoin = () => {
  return (
    <div className={styled.join}>
      <hr />
        <div className={styled.jointxt}>
        <h2>Join the Rent. team</h2>
      <h5>Feel at home in your career. Our offices are a place where people and performance take precedence. We thrive in a welcoming, collaborative environment where individuals are inspired to do their best work day in and day out.
        <br />
        <br />
         Join us in our mission to make finding an ideal place to live intuitive and stress-free for all.
      </h5>
      <button>Explore Careers</button>
        </div>
    <div className={styled.tpmtext}>
    <div className={styled.tpm}>
            <h5>Technical Program Manager</h5>
            <span> <ImLocation/> Remote</span>
            <button>Show Details</button>
        </div>
        <div className={styled.tpm}>
            <h5>Technical Program Manager</h5>
            <span> <ImLocation/> Remote</span>
            <button>Show Details</button>
        </div>
        <div className={styled.tpm}>
            <h5>Technical Program Manager</h5>
            <span><ImLocation/> Remote</span>
            <button>Show Details</button>
        </div>
    </div>
    </div>
  )
}

export default AboutJoin
