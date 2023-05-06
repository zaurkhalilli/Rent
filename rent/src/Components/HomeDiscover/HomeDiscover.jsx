import React from 'react';
import styled from "../HomeDiscover/HomeDiscover.module.scss";
const HomeDiscover = () => {
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
      <div className={styled.list}>
      <li>comScore, Jan 2023 – Mar 2023</li>
      <li>Internal Data: 12 month average Leads per Property, May 2021 – Apr 2022 vs May 2020 – Apr 2021</li>
      <li>Internal Data: 12 month average Leads per Property, May 2021 – Apr 2022 vs May 2020 – Apr 2021</li>
      <li>Internal data, Sept 2021</li>
      <li>Based on census.gov population statistics and the Rent. 2021 Renter Survey data. Assumes a 12-month average lease duration, renter population that is 18+ years old and the same pricing offered across social ad providers.</li>
      <li>Internal Data Dec 21 Apr 22 compared to Wordstream Google Adwords Industry Benchmarks, February 2022</li>
      <li>Invesp, April 2022</li>
      </div>
    </div>
  )
}

export default HomeDiscover
