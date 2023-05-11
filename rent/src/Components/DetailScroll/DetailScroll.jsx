import React from 'react';
import styled from "../DetailScroll/DetailScroll.module.scss";
import {FiArrowLeft} from "react-icons/fi"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
const DetailScroll = () => {
  return (
    <div className={styled.scroll}>
        <hr />
      <div class={styled.scr}>
        <p>
        Media consumption among younger generations is evolving at lightning speed, necessitating multifamily owners, operators and communities to continually update their marketing playbooks.
        <br />
        The proliferation of today’s digital platforms combined with privacy changes in data collection, today’s marketing landscape is fracturing. While this can be intimidating for today’s teams, choosing a stabilized marketing strategy built across digital platforms including ILS, social media and reputation management can be easier than you think. Kathy Neumann, Chief marketing officer of Rent., will lead a panel of marketing gurus to share tangible best practices and examples that can be applied to today’s renter journey, helping to leverage marketing channels, authentically engage with today’s renters and hit occupancy goals.
        <br />
        Join us at AIM in the Main Ballroom on Monday, May 8, from 10:00 a.m. – 10:45 a.m. for an insightful and educational overview of the power of an integrated approach to combining traditional marketing strategies with some of the newest marketing channels and trends.
        </p>
        <h3>What Media Channels Matter Today and Why</h3>
        <div className={styled.scrollimg}>
            <p>In order to build website traffic, gain inquiries, convert leases and boost renewals, it’s important to</p>
            <img src="	https://solutions.rent.com/wp-content/uploads/2023/05/shutterstock_438088582-300x196.jpg" alt="" />
            <p>understand what media channels are in play among GenZ and Millenials, who continue to be the majority of renters. According to The Pew Research Center, 53% of households that rent are headed by people under 45 years old.</p>
            <br />
            <p>The sheer number of media platforms can appear to be overwhelming with TikTok, Meta platforms, Google platforms, streaming and OTT video all being areas where your next residents can be accessed. There are ways to make these media offerings fun for consumers, and the panel will share avenues to create approachable content that generates leads. In addition, there will be a look at how different sizes of onsite teams can approach social media, leveraging partnerships and success in other industries.</p>
        </div>
        <h3>Checklist of Marketing Must-Haves</h3>
        <p>Multifamily communities must create content that works among multiple channels and diversification is of vital importance. Use what you’ve got! The panel will present a checklist of “Marketing Must-Haves” that includes deploying a nimble approach to your media marketing and using partnerships as an extension of your marketing team. Other areas of discussion will include budgeting and ways to navigate the future.</p>
        <h3>The Impact of Integrated Marketing</h3>
        <p>Search engines, ILS, and property websites continue to drive the renter journey, but the benefits of tour technology, influencer culture, and reputation management tools are proving to be more useful and heavily relied upon. Let’s examine display, geofencing, AI, ChatGPT and other channels that are changing the approach to media campaigns. We look forward to exploring with you!</p>
        <br />
        <p>Multifamily needs to feel empowered to try new things, and that sticking to what you know may be detrimental to your overall marketing strategy.</p>
        <div className={styled.prev}>
        <button><FiArrowLeft/></button> <span>Prev</span>
        <hr />
        <div className={styled.bottom}>
            <button>#Rent Trends</button>
            <button>#Reputation Management</button>
            <button>#DisplayAds</button>
            <button>#Multifamily Marketing</button>

        </div>
        <div className={styled.share}>
        <p>Share: <BsFacebook color='#6576c9' size={25}/> <AiFillTwitterCircle  color='#6576c9' size={30}/> <AiFillLinkedin color='#6576c9' size={30}/></p>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default DetailScroll
