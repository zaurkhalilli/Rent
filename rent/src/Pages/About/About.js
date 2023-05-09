import React from 'react'
import App from "../../App"
import AboutHeading from '../../Components/AboutHeading/AboutHeading'
import AboutValue from '../../Components/AboutValue/AboutValue'
import AboutLeaders from '../../Components/AboutLeaders/AboutLeaders'
import AboutJoin from '../../Components/AboutJoin/AboutJoin'
import AboutLife from '../../Components/AboutLife/AboutLife'
import AboutNews from '../../Components/AboutNews/AboutNews'
import AboutDiscover from '../../Components/AboutDiscover/AboutDiscover'
const About = () => {
  return (
    <div>
      <AboutHeading/>
      <AboutValue/>
      <AboutLeaders/>
      <AboutJoin/>
      <AboutLife/>
      <AboutNews/>
      <AboutDiscover/>
    </div>
  )
}

export default About
