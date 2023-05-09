import React from 'react'
import App from "../../App"
import AboutHeading from '../../Components/AboutHeading/AboutHeading'
import AboutValue from '../../Components/AboutValue/AboutValue'
import AboutLeaders from '../../Components/AboutLeaders/AboutLeaders'
import AboutJoin from '../../Components/AboutJoin/AboutJoin'
const About = () => {
  return (
    <div>
      <AboutHeading/>
      <AboutValue/>
      <AboutLeaders/>
      <AboutJoin/>
    </div>
  )
}

export default About
