import React from 'react'
import App from '../../App';
import HomeApartments from "./HomeApartments"
import HomeRenters from '../../Components/HomeRenters/HomeRenters';
import HomeResident from "../../Components/HomeResident/HomeResident"
import HomeSocial from "../../Components/HomeSocial/HomeSocial";
import HomeSearch from "../../Components/HomeSearch/HomeSearch";
import HomeSerena from "../../Components/HomeSerena/HomeSerena";
import HomeConnection from "../../Components/HomeConnection/HomeConnection";
import HomeTarget from "../../Components/HomeTarget/HomeTarget";
import HomeFrequently from "../../Components/HomeFrequently/HomeFrequently";
import HomeRedfin from "../../Components/HomeRedfin/HomeRedfin";
import HomeNews from "../../Components/HomeNews/HomeNews";
import HomeDiscover from "../../Components/HomeDiscover/HomeDiscover";
const Home = () => {
  return (
    <div>
      <HomeApartments/>
      <HomeRenters/>
      <HomeResident/>
      <HomeSocial/>
      <HomeSearch/>
      <HomeSerena/>
      <HomeConnection/>
      <HomeTarget/>
      <HomeFrequently/>
      <HomeRedfin/>
      <HomeNews/>
      <HomeDiscover/>
    </div>
  )
}

export default Home
