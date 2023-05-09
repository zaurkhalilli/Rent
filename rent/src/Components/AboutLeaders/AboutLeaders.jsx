import React from 'react'
import styled from "../AboutLeaders/AboutLeader.module.scss"
const AboutLeaders = () => {
  return (
    <div className={styled.leaders}>
      <h2>Our Leaders</h2>
      <span>Meet our leadership team</span>
      <div className="container">
        <div className="row">
            <div className="col-xl-3">
                <img src="https://solutions.rent.com/wp-content/uploads/2022/05/jon_ziglar-Apr-2023-Optimized-crop.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>Jon Ziglar</h5>
                    <p>Chief Executive Officer</p>
                </div>
            </div>
            <div className="col-xl-3">
            <img src="https://solutions.rent.com/wp-content/uploads/2022/05/nishant-phadnis-211207_1-e1654878031471.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>Nishant Phadnis</h5>
                    <p>Chief Product Officer</p>
                </div>
            </div>
            <div className="col-xl-3">
            <img src="https://solutions.rent.com/wp-content/uploads/2022/05/kathy_neumann_220322_v2-web-e1654878009283.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>Kathy Neumann</h5>
                    <p>Chief Marketing Officer</p>
                </div>
            </div>
            <div className="col-xl-3">
            <img src="https://solutions.rent.com/wp-content/uploads/2022/05/david-sommers-_1_.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>David Sommers</h5>
                    <p>Chief Technology Officer</p>
                </div>
            </div>
            <div className="col-xl-3">
            <img src="https://solutions.rent.com/wp-content/uploads/2022/05/sheila_dehdashti_resized.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>Sheila Dehdashti</h5>
                    <p>Chief People Officer</p>
                </div>
            </div>
            <div className="col-xl-3">
            <img src="https://solutions.rent.com/wp-content/uploads/2022/10/jamie_graves_220928-2.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>Jamie Graves</h5>
                    <p>General Counsel</p>
                </div>
            </div>
            <div className="col-xl-3">
            <img src="https://solutions.rent.com/wp-content/uploads/2022/11/rob_kocerha_221027.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>Rob Kocerha</h5>
                    <p>Senior Vice President, Client Experience</p>
                </div>
            </div>
            <div className="col-xl-3">
            <img src="https://solutions.rent.com/wp-content/uploads/2022/11/jesus_machuca_221027.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>Jesus Machuca</h5>
                    <p>Vice President of Sales</p>
                </div>
            </div>
            <div className="col-xl-3">
            <img src="	https://solutions.rent.com/wp-content/uploads/2022/06/will-byrum.jpg" alt="" />
                <div className={styled.imgtxt}>
                    <h5>Will Byrum</h5>
                    <p>Vice President, Corporate Development & Strategy</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutLeaders
