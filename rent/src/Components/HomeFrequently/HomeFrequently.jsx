import React from 'react'
import styled from "../HomeFrequently/HomeFrequently.module.scss";
import {BsArrowUpCircle} from "react-icons/bs";
const HomeFrequently = () => {
  return (
    <div className={styled.frequently}>
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className={styled.h2}>
                    <h2>Frequently Asked Questions</h2>
                    </div>
                    <h5>Got questions? We have answers.</h5>
                </div>
                <div className="col-xl-6">
     <div class="accordion" id="accordionExample">
  <div className={styled.accordion_item}>
    <h2 class="accordion-header">
      <button className={styled.accordion_button} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Rent.? <BsArrowUpCircle color='#4561ec' />
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>We’re here to simplify your entire leasing lifecycle, whether you’re building your property’s brand, attracting and converting new renter leads, or nurturing current residents for renewals. The Rent. platform powers a full suite of best-in-class digital marketing solutions across search advertising, social media, email marketing, web chat, resident communication, reputation management and more. Powered by unmatched proprietary data from our marketplace, Rent. solutions allow you to reach high-intent renters who are actively searching in your area. With the fastest search speeds¹ , we help home seekers quickly find your property and request a tour on RentMarketplace. Property owners and managers receive access to over 350 million website visits each month through our RentMarketplace. network and strategic agreement with Realtor.com. The RentMarketplace. network includes Rent.com, ApartmentGuide.com, Rentals.com and Redfin.com. Wondering what happened to RentPath? That’s us! Learn more about our upgrade to Rent. and our new and improved capabilities here.  ¹ Google Pagespeed Insights, Data based on 5 major U.S. markets, June 2022.</p>
        </div>
    </div>
  </div>
  <div className={styled.accordion_item}>
    <h2 class="accordion-header">
      <button className={styled.accordion_button} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       What services do you offer? <BsArrowUpCircle color='#4561ec' />
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p> Though we are recognized for our vast reach across a network of listing services, Rent. is here to take the hassle out of the entire leasing lifecycle for property owners and operators.  Think of us as your go-to for attracting new renters, engaging prospects during their search for a place, and nurturing resident relationships.  Our property marketing and advertising solutions allow you to generate awareness around your property brand, get in front of in-market renters, and capture new renter leads.  Our marketing solutions include: 

            RentSocial.: social ads on Instagram, Facebook, and the industry’s first and only advertising for Snapchat
            RentSearch.: paid search ads (PPC) on Google
            RentTarget.: display ads, geofencing and email marketing
            RentRep.: online reputation, listing and social media management
            Powered by first-party data only available through Rent., our solutions get you in front of homeseekers across marketplaces boasting over 350 million visits monthly. With a full suite of communication solutions and an automated marketing platform, we help you nurture those relationships with residents and prospective renters so you can secure more renewals and signed leases.  RentEngage. offers:
            Virtual leasing center: 24/7 support for phone and email, voice AI assistance, and chatbots for your property website
            Centralized digital marketing platform: offering automated, two-way text and email messages</p>
      </div>
    </div>
  </div>
  <div className={styled.accordion_item}>
    <h2 class="accordion-header">
      <button className={styled.accordion_button} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Where do you operate? <BsArrowUpCircle color='#4561ec' />
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Rent. supports property owners and operators all across the United States. We have a diverse and connected team of remote and in-office employees, and our headquarters is in Atlanta.  </p>
      </div>
    </div>
  </div>
  <div className={styled.accordion_item}>
    <h2 class="accordion-header">
      <button className={styled.accordion_button} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How do I get started? <BsArrowUpCircle color='#4561ec' />
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Let’s get you set up! Complete the form on our Contact Us page and our team will connect with you as soon as possible to talk through your needs. We look forward to hearing from you.</p>
      </div>
    </div>
  </div>
  <div className={styled.accordion_item}>
    <h2 class="accordion-header">
      <button className={styled.accordion_button} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      I used your solutions in the past, what should I expect with the new improvements? <BsArrowUpCircle color='#4561ec' />
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Our network is stronger than ever, with over 350M website visits each month across our sites (rent.com, apartmentguide.com, rentals.com and redfin.com) and through our strategic agreement with Realtor.com. The new Rent. is much more than a marketplace. Whether you’re building your property’s brand, attracting and converting new renter leads, or nurturing current residents for renewals–the Rent. platform is here to take on your biggest challenges. With unmatched audience targeting fueled by proprietary data from the RentMarketplace, you can reach in-market renters through a combination of tactics that works best for your team. Search, social, display and email advertising tools save you budget and time by seamlessly integrating with your marketplace listings. That said, we’ve also optimized our renter-centric marketplaces. And with the fastest search speeds, we empower home seekers to quickly find your property and request a tour. We’re also thrilled to introduce Profile Sync, which seamlessly manages your Google Business Profile and has proven to more than double actions taken on the profile listing.  We’re focused on the future of your property. Rent. will continue to innovate and remove friction for both clients and renters alike with the addition of new features like configurable, templated property websites to further amplify Rent. clients’ online presence.</p>
      </div>
    </div>
  </div>
  <div className={styled.accordion_item}>
    <h2 class="accordion-header">
      <button className={styled.accordion_button} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      I signed up for services prior to June 21, 2022. Has my service changed? What are the new product names? <BsArrowUpCircle color='#4561ec' />
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>You still have the same pricing, access to powerful solutions and quality customer service that are part of your plan. Your MyRentPath account has been upgraded to RentHQ, where you can easily access all of your solutions and reporting.  New names for our solutions are as follows:

        Network advertising (including Silver, Gold, Platinum and Diamond level packages) is now RentMarketplace. 
        Search Ads Express and Pro are now RentSearch. 
        Social Ads Express and Pro are now RentSocial. 
        Geofencing, Display, LeadMail are now RentTarget.
        Contact Center Express and PRO, and Media Center are now RentEngage. 
        Community Reputation Express and PRO are now RentRep.</p>
      </div>
    </div>
  </div>
  <div className={styled.accordion_item}>
    <h2 class="accordion-header">
      <button className={styled.accordion_button} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      I’m a current customer, how do I contact customer support <BsArrowUpCircle color='#4561ec' />
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>You can reach us by phone at 877.999.4472 from 9:00 am to 6:00 pm EDT. Or shoot us an email at customersuccess@rent.com. </p>
      </div>
    </div>
  </div>
  <div className={styled.accordion_item}>
    <h2 class="accordion-header">
      <button className={styled.accordion_button} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Who can I contact for questions on billing and my invoices? <BsArrowUpCircle color='#4561ec' />
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p> We’re happy to help! Call us at 866.236.2510 to talk through your billing questions. </p>
      </div>
    </div>
  </div>
  <div className={styled.explorebtn}>
  <button>Explore FAQs</button>

  </div>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFrequently
