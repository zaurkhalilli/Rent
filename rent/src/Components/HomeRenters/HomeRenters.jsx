import React from 'react';
import styled from "../HomeRenters/HomeRenters.module.scss";

const HomeRenters = () => {
  return (
    <div className={styled.renters}>
      <div className="container">
        <div className="row">
            <div className="col-xl-5">
            <div className={styled.texts2}>
                <h2>Attract Qualified Renters</h2>
                <p>Renters are more likely to discover your property first on an online marketplace than your property website. From there, it’s about getting tours booked. 
                <br />
                <br />
                <span> Attract high-quality leads that are ready to tour–and ultimately sign that lease–with listings that make the most of your budget and time. Property owners and managers receive access to over 350 million website visits¹ each month through our RentMarketplace. network and strategic agreement with Realtor.com. You can even reach in-market renters with search ads, social ads and email marketing solutions that are powered by our marketplace.</span>
               </p>
                <button>
                    Start Listing
                </button>
                <div className={styled.sites}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/2-3.png" alt="" />
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/1-1.png" alt="" />
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/3-1.png" alt="" />
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/4-1.png" alt="" />
                </div>
            </div>
            </div>
            <div className="col-xl-7">
                <div className={styled.background}>
                    <img src="https://solutions.rent.com/wp-content/themes/rent/assets/images/overlays/bullet_overlay_556_204.png" alt="" />
                </div>
                <div className={styled.image}>
                    <p>Lower Cost Per Lead (year over year)²</p>
                    <h5>More Leads Per Property (year over year)³</h5>
                    <span>Tour Requests Per Month (average per property)⁴</span>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-our-network.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRenters
