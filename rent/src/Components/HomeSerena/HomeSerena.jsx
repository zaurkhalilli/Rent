import React from 'react';
import styled from "../HomeSerena/HomeSerena.module.scss";
import {AiOutlineDownload} from "react-icons/ai";
const HomeSerena = () => {
  return (
    <div className={styled.serena}>
      <h2>Be a leasing legend.</h2>
      <h5>Learn how WestCorp boosted occupancy rates to 99% with Google PPC Ads powered by our unmatched proprietary data on in-market renters.</h5>
      <div className={styled.serenaimage}>
        <div className={styled.bluebg}>
        <p>Serena Y. from WestCorp Management Group found a better way to bring in qualified renters.</p>
        <h5>WestCorp boosted their leasing after using our hyper-targeted PPC Google campaigns:</h5>
        <li>34% higher conversion rates</li>
        <li>15-20% higher click-through rate</li>
        <li>98-99% occupancy rates</li>
        <button>Download Now <AiOutlineDownload/> </button>
        <img src="https://solutions.rent.com/wp-content/uploads/2022/06/serena-yang-transparent.png" alt="" />
        </div>
       </div>
       <br />
       <br />
       <br />
       <br />

    </div>
  )
}

export default HomeSerena
