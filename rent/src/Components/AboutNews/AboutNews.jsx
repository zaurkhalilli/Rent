import React from 'react'
import styled from "../AboutNews/AboutNews.module.scss"
const AboutNews = () => {
  return (
    <div className={styled.news}>
       <h2>Recent News</h2>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
                <img src="https://solutions.rent.com/wp-content/uploads/2023/04/Realtor-Rent.-Announcement-Graphic.jpg" alt="" />
                <div className={styled.btns}>
                    <button>Business Wire</button>
                    <button>Apr 6, 2023</button>
                    <div className="a">
                    <a href="">BusinessWire: Rent. Announces Strategic Agreement to Expand Content Listings to Realtor.com®</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <img src="https://solutions.rent.com/wp-content/uploads/2023/03/Add-a-heading.jpg" alt="" />
                <div className={styled.btns}>
                    <button>YouShouldTalkTo. Podcast</button>
                    <button>Apr 5, 2023</button>
                    <div className="a">
                    <a href="">YouShouldTalkTo podcast interview with Rent. CMO Kathy Neumann</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutNews
