import React from 'react';
import styled from "../AboutValue/AboutValue.module.scss";
const AboutValue = () => {
  return (
    <div className={styled.value}>
      <hr />
     <div className={styled.valuetxt}>
     <h2>Our Core Values</h2> 
      <h4>At Rent. our mission is driven by eight values that guide every decision we make.</h4>
     </div>
     <div className="container">
        <div className="row">
            <div className="col-xl-3">
                <div className={styled.valueimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/1-Core-Values_Experience-SM.png" alt="" />
                    <h5>Obsessed with Experience</h5>
                </div>
            </div>
            <div className="col-xl-3">
            <div className={styled.valueimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/2-Core-Values_Integrity-SM.png" alt="" />
                    <h5>Act with Integrity</h5>
                </div>
            </div>
            <div className="col-xl-3">
            <div className={styled.valueimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/3-Core-Values_Grit-SM-2.png" alt="" />
                    <div className={styled.gift}>
                    <h5>Have Grit</h5>
                    </div>
                </div>
            </div>
            <div className="col-xl-3">
            <div className={styled.valueimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/4-Core-Values_We-SM.png" alt="" />
                    <div className={styled.gift}>
                    <h5>Have Grit</h5>
                    </div>
                </div>
            </div>
            <div className="col-xl-3">
            <div className={styled.valueimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/5-Core-Values_Matter-SM.png" alt="" />
                    <h5>Do Things that Matter</h5>
                </div>
            </div>
            <div className="col-xl-3">
            <div className={styled.valueimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/6-Core-Values_Forward-SM.png" alt="" />
                    <h5>Keep Moving Forward</h5>
                </div>
            </div>
            <div className="col-xl-3">
            <div className={styled.valueimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/7-Core-Values_Why-SM.png" alt="" />
                    <h5>Understand the "Why?'</h5>
                </div>
            </div>
            <div className="col-xl-3">
            <div className={styled.valueimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/8-Core-Values_Support-SM.png" alt="" />
                    <h5>Support our People </h5>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default AboutValue
