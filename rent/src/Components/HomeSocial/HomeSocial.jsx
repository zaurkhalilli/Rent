import React from 'react';
import styled from "../HomeSocial/HomeSocial.module.scss";
const HomeSocial = () => {
  return (
    <div className={styled.social}>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
                <div className={styled.texts5}>
                <h3>Rent <span>Social.</span></h3>
                <p>Fair-housing compliant social ads that generate high-quality renter leads.</p>
                <li>Rent. reaches 50x more in-market renters than traditional targeting with hyper-targeting powered by our unmatched proprietary data from RentMarketplace. visitors.⁵</li>
                <li>Choose from turnkey ads that go live in as little as 24 hours or custom strategy based on your specific campaign needs.</li>
                <li>Reach renters like never before on Facebook, Instagram, Snapchat or TikTok.</li>
                <li>Deliver in-market renter leads directly to your property management system with campaigns powered by unmatched proprietary data.</li>
                <button>Learn more</button>
                </div>
            </div>
            <div className="col-xl-6">
               <div className={styled.background}>
               <img src="https://solutions.rent.com/wp-content/uploads/2022/05/Rent.-LinkedIn-Covers-276-%C3%97-559-px-384-%C3%97-531-px.png" alt="" />
               <p>Increase in leads per month (when added to RentMarketplace.)  <span>35%</span></p>
              
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSocial
