import React from 'react'
import styled from "../AboutHeading/AboutHeading.module.scss"
const AboutHeading = () => {
  return (
    <div className={styled.aboutheading}>
      <div className={styled.headings}>
      <h1>About Us.</h1>
      <h2>
      Our mission is to simplify the experience of connecting people & properties. 
      <br />
      <br />
      We do this by delivering integrated solutions that bring together the right renter, with the right property, at the right time, eliminating friction and driving efficiency.

      </h2>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
               <div className={styled.leftimg}>
               <img src="https://solutions.rent.com/wp-content/uploads/2022/06/still_1-610x391.jpg" alt="" />
                <div className={styled.marks}>
                    <a href=""><img src="https://solutions.rent.com/wp-content/uploads/2022/05/2-2.png" alt="" />
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/1-2.png" alt="" />
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/3-2.png" alt="" />
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/4-2-1.png" alt="" /></a>
                </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className={styled.rightimg}>
               <img src="https://solutions.rent.com/wp-content/uploads/2022/06/P1111508-610x714.jpg" alt="" />
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeading
