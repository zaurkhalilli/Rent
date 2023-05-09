import React from 'react'
import styled from "../AboutDiscover/AboutDiscover.module.scss"
const AboutDiscover = () => {
  return (
          <div className={styled.discover}>
      <div className={styled.container}>
        <div className="row">
            <div className="col-xl-6">
                <h2>Discover your next resident on our network</h2>
            </div>
            <div className="col-xl-6">
                <a href=""> <img src="https://solutions.rent.com/wp-content/uploads/2022/06/BrandRent-TypePrimary-Logo-Saturation1-Color-ColorBlack-1-3.png" alt="" /></a>
                <a href=""> <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-12.png" alt="" /></a>
                <a href=""> <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-13.png" alt="" /></a>
                <a href=""> <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-14.png" alt="" /></a>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default AboutDiscover
