import React from 'react';
import styled from "../HomeResident/HomeResident.module.scss";
const HomeResident = () => {
  return (
    <div className={styled.resident}>
      <div className="container">
        <div className="row">
            <h2>Meet Your Next Resident</h2>
            <span>Inspire renters to take action and boost your property’s brand.</span>
            <div className="col-xl-7">
            <div className={styled.image3}>
            <img src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-marketplace-1.png" alt="" />
            <p>Average monthly visits 350M+</p>
            <h5>Search engine keywords targeted 85M</h5>
            </div>
            </div>
            <div className="col-xl-5">
            <div className={styled.texts4}>
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
     
    </div>
  )
}

export default HomeResident
