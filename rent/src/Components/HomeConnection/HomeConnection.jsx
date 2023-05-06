import React from 'react';
import styled from "../HomeConnection/HomeConnection.module.scss";
const HomeConnection = () => {
  return (
    <div className={styled.connection}>
      <h2>Make Resident Connections Count</h2>
      <h5>Simplify communications and automate repetitive tasks for your property team.</h5>
       <div className={styled.dottedimg}>
            <img src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-connect.png" alt="" />
       </div>
       <div className={styled.texts7}>
                <h3>Rent <span>Engage.</span></h3>
                <p>Your leasing team’s key to communicating with renters and residents stress-free.</p>
                <li>24/7 leasing center support handles incoming calls, emails and online chat.</li>
                <li>Trusted, FHA-compliant solutions safely answer questions, book appointments and qualify renter leads.</li>
                <li>Nurture prospects and residents to lease and renewal with automated, two-way text and email messages from a centralized platform.</li>
                <button>Learn more</button>
       </div>
       <div className={styled.connection2}>
    <div className={styled.connectionimage}>
    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/Screen-Shot-2022-07-21-at-10.56.43-AM.jpg" alt="" />
                <h3>Rent <span>Rep.</span></h3>
                <p>Take control of your online reputation and social presence to boost renter engagement and SEO.</p>
                <li>Fair Housing-trained experts handle your review responses and social media.</li>
                <li>Effectively manage reviews, social, listings, surveys and more with a best-in-class dashboard powered by Reputation.</li>
                <li>Deliver fast and personalized responses to resident reviews.</li>
                <li>Highest-rated reputation management solution available.</li>
                <button>Learn more</button>
    </div>
</div>
    </div>
  )
}

export default HomeConnection
