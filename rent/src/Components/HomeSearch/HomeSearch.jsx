import React from 'react';
import tyled from "../HomeSearch/HomeSearch.module.scss";
const HomeSearch = () => {
  return (
    <div className={tyled.search}>
      <div className="container">
        <div className="row">
            <div className="col-xl-7">
                <div className={tyled.leftimg}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/Rent-Search-Mockups-4.png" alt="" />
                    <p>Lower cost per click than industry average <span>43%</span></p>
                </div>
            </div>
            <div className="col-xl-5">
            <div className={tyled.texts6}>
                <h3>Rent <span>Search.</span></h3>
                <p>Award-winning Google search campaigns that keep occupancy rates high.</p>
                <li>Unparalleled lead quality and website traffic powered by the Rent. marketplace network.</li>
                <li>3X higher click-through rates than the industry average.⁶</li>
                <li>Simple, transparent pricing.</li>
                <button>Learn more</button>
                </div>
            </div>
        </div>
      </div>
     
    </div>
  )
}
export default HomeSearch
