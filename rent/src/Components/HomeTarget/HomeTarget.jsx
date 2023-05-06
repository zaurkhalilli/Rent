import React from 'react';
import styled from "../HomeTarget/HomeTarget.module.scss";
const HomeTarget = () => {
  return (
    <div className={styled.target}>
      <hr />
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
                <h2>Target intelligently</h2>
                <h5>Boost your efforts with hyper-targeted advertising solutions powered by our proprietary in-market renter data.</h5>
            </div>
            <div className="col-xl-6">
                <img src="https://solutions.rent.com/wp-content/uploads/2022/05/RentTarget-Examples.png" alt="" />
                <h3>Rent <span>Marketplace.</span></h3>
                <p>Renter-centric search experiences to find your newest residents.</p>
                <li>Access to 350M+ visits each month through our Rent. network and strategic partnership with Realtor.com.</li>
                <li>Attract and engage renters with videos, virtual tours, online applications, and included photoshoots.</li>
                <li>Easily manage listing content, tools and performance reports with the RentHQ. client portal.</li>
                <li>Stand out to renters in their search with Profile Sync, which effortlessly syndicates property data and images on your Google listing.</li>
                <button>Learn more</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTarget
